import axios from 'axios';

function getServiceEnumId(servicio) {
  const serviceMap = {
    'lotes': 971748,
    'nichos': 971750,
    'osarios': 971752,
    'alquiler': 971754,
    'servicios-funerarios': 971756,
    'cremaciones': 971758,
    'otros-servicios': 971760,
    'lote-servicios': 971762,
    'nichos-servicios': 971764,
    'alquiler-servicios': 971766
  };
  
  return serviceMap[servicio] || 971950; // Default: "Pendiente"
}

export default async function handler(req, res) {
  // Solo permitir POST
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  try {
    const formData = req.body;
    
    const incomingLeadData = [{
      source_name: "Formulario Web Colinas de la Paz",
      source_uid: `web_form_${Date.now()}_${Math.random().toString(36).substr(2, 9)}`,
      created_at: Math.floor(Date.now() / 1000),
      pipeline_id: parseInt(process.env.KOMMO_PIPELINE_ID),
      metadata: {
        category: "forms",
        form_id: "contact_form_colinas",
        form_name: "Formulario de Contacto",
        form_page: "https://colinasdelapaz.com/contact",
        ip: req.headers['x-forwarded-for'] || req.headers['x-real-ip'] || '127.0.0.1',
        form_sent_at: Math.floor(Date.now() / 1000)
      },
      _embedded: {
        contacts: [{
          name: formData.nombre,
          custom_fields_values: [
            {
              field_id: parseInt(process.env.KOMMO_EMAIL_FIELD_ID),
              values: [{ value: formData.email }]
            },
            {
              field_id: parseInt(process.env.KOMMO_PHONE_FIELD_ID),
              values: [{ value: formData.telefono }]
            }
          ]
        }],
        leads: [{
          name: `Solicitud WEB - ${formData.nombre}`,
          price: 0,
          pipeline_id: parseInt(process.env.KOMMO_PIPELINE_ID),
          responsible_user_id: parseInt(process.env.KOMMO_USER_ID),
          custom_fields_values: [
            {
              field_id: parseInt(process.env.KOMMO_SERVICE_FIELD_ID),
              values: [{ enum_id: getServiceEnumId(formData.servicio) }]
            },
            {
              field_id: parseInt(process.env.KOMMO_FUENTE_LEAD_ID),
              values: [{ enum_id: parseInt(process.env.KOMMO_FUENTE_LEAD_ENUM_ID) }]
            }
          ]
        }]
      }
    }];

    const response = await axios.post(
      `https://${process.env.KOMMO_SUBDOMAIN}.kommo.com/api/v4/leads/unsorted/forms`,
      incomingLeadData,
      {
        headers: {
          'Authorization': `Bearer ${process.env.KOMMO_ACCESS_TOKEN}`,
          'Content-Type': 'application/json'
        }
      }
    );

    // Manejar diferentes estructuras de respuesta
    let leadId = null;
    if (response.data && Array.isArray(response.data) && response.data.length > 0) {
      leadId = response.data[0].id;
    } else if (response.data && response.data._embedded && response.data._embedded.leads) {
      leadId = response.data._embedded.leads[0].id;
    }
    
    return res.status(200).json({ 
      success: true, 
      leadId: leadId,
      message: 'Lead creado exitosamente en Kommo'
    });

  } catch (error) {
    console.error('Error en API de contacto:', error);
    return res.status(500).json({ 
      success: false, 
      error: 'Error al enviar el formulario'
    });
  }
}