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

export async function POST({ request }) {
  try {
    const formData = await request.json();
    
    const incomingLeadData = [{
      source_name: "Formulario Web Colinas de la Paz",
      source_uid: `web_form_${Date.now()}_${Math.random().toString(36).substr(2, 9)}`,
      created_at: Math.floor(Date.now() / 1000),
      pipeline_id: parseInt(import.meta.env.KOMMO_PIPELINE_ID),
      metadata: {
        category: "forms",
        form_id: "contact_form_colinas",
        form_name: "Formulario de Contacto",
        form_page: "https://colinasdelapaz.com/contact",
        ip: request.headers.get('x-forwarded-for') || request.headers.get('x-real-ip') || '127.0.0.1',
        form_sent_at: Math.floor(Date.now() / 1000)
      },
      _embedded: {
        contacts: [{
          name: formData.nombre,
          custom_fields_values: [
            {
              field_id: parseInt(import.meta.env.KOMMO_EMAIL_FIELD_ID),
              values: [{ value: formData.email }]
            },
            {
              field_id: parseInt(import.meta.env.KOMMO_PHONE_FIELD_ID),
              values: [{ value: formData.telefono }]
            }
          ]
        }],
        leads: [{
          name: `Solicitud WEB - ${formData.nombre}`,
          price: 0,
          pipeline_id: parseInt(import.meta.env.KOMMO_PIPELINE_ID),
          responsible_user_id: parseInt(import.meta.env.KOMMO_USER_ID),
          custom_fields_values: [
            {
              field_id: parseInt(import.meta.env.KOMMO_SERVICE_FIELD_ID),
              values: [{ enum_id: getServiceEnumId(formData.servicio) }]
            },
            {
              field_id: parseInt(import.meta.env.KOMMO_FUENTE_LEAD_ID),
              values: [{ enum_id: parseInt(import.meta.env.KOMMO_FUENTE_LEAD_ENUM_ID) }]
            }
          ]
        }]
      }
    }];

    const response = await axios.post(
      `https://${import.meta.env.KOMMO_SUBDOMAIN}.kommo.com/api/v4/leads/unsorted/forms`,
      incomingLeadData,
      {
        headers: {
          'Authorization': `Bearer ${import.meta.env.KOMMO_ACCESS_TOKEN}`,
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
    
    return new Response(JSON.stringify({ 
      success: true, 
      leadId: leadId,
      message: 'Lead creado exitosamente en Kommo'
    }), {
      status: 200,
      headers: { 'Content-Type': 'application/json' }
    });

  } catch (error) {
    return new Response(JSON.stringify({ 
      success: false, 
      error: 'Error al enviar el formulario'
    }), {
      status: 500,
      headers: { 'Content-Type': 'application/json' }
    });
  }
}
