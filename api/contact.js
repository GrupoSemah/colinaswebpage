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

export default async function handler(request, response) {
  console.log('=== INICIO API CONTACT VERCEL FUNCTION ===');
  
  // Only allow POST method
  if (request.method !== 'POST') {
    return response.status(405).json({ 
      success: false, 
      error: 'Method not allowed' 
    });
  }
  
  try {
    // Log del entorno de ejecución
    console.log('Environment:', {
      isVercel: !!process.env.VERCEL,
      nodeEnv: process.env.NODE_ENV,
      platform: process.platform
    });
    
    // Verificar variables de entorno
    const requiredEnvVars = [
      'KOMMO_SUBDOMAIN',
      'KOMMO_ACCESS_TOKEN',
      'KOMMO_PIPELINE_ID',
      'KOMMO_USER_ID',
      'KOMMO_EMAIL_FIELD_ID',
      'KOMMO_PHONE_FIELD_ID',
      'KOMMO_SERVICE_FIELD_ID',
      'KOMMO_FUENTE_LEAD_ID',
      'KOMMO_FUENTE_LEAD_ENUM_ID'
    ];

    console.log('Verificando variables de entorno...');
    const envStatus = {};
    requiredEnvVars.forEach(varName => {
      envStatus[varName] = {
        exists: !!process.env[varName],
        length: process.env[varName] ? process.env[varName].length : 0
      };
    });
    console.log('Estado de variables:', envStatus);
    
    const missingVars = requiredEnvVars.filter(varName => !process.env[varName]);
    
    if (missingVars.length > 0) {
      console.error('Variables de entorno faltantes:', missingVars);
      return response.status(500).json({ 
        success: false, 
        error: 'Configuración del servidor incompleta',
        missingVars: missingVars,
        envStatus: envStatus
      });
    }

    console.log('Parseando datos del formulario...');
    const formData = request.body;
    console.log('Datos recibidos:', {
      nombre: formData.nombre ? 'OK' : 'MISSING',
      telefono: formData.telefono ? 'OK' : 'MISSING',
      email: formData.email ? 'OK' : 'MISSING',
      servicio: formData.servicio ? 'OK' : 'MISSING'
    });
    
    const incomingLeadData = [{
      source_name: "Formulario Web Colinas de la Paz",
      source_uid: `web_form_${Date.now()}_${Math.random().toString(36).substring(2, 11)}`,
      created_at: Math.floor(Date.now() / 1000),
      pipeline_id: parseInt(process.env.KOMMO_PIPELINE_ID),
      metadata: {
        category: "forms",
        form_id: "contact_form_colinas",
        form_name: "Formulario de Contacto",
        form_page: "https://colinasdelapaz.com/contact",
        ip: request.headers['x-forwarded-for'] || request.headers['x-real-ip'] || '127.0.0.1',
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

    const kommoUrl = `https://${process.env.KOMMO_SUBDOMAIN}.kommo.com/api/v4/leads/unsorted/forms`;
    console.log('Enviando a Kommo:', {
      url: kommoUrl,
      dataSize: JSON.stringify(incomingLeadData).length,
      hasAuth: !!process.env.KOMMO_ACCESS_TOKEN
    });
    
    const axiosResponse = await axios.post(
      kommoUrl,
      incomingLeadData,
      {
        headers: {
          'Authorization': `Bearer ${process.env.KOMMO_ACCESS_TOKEN}`,
          'Content-Type': 'application/json'
        },
        timeout: 10000 // 10 segundos timeout
      }
    );
    
    console.log('Respuesta de Kommo:', {
      status: axiosResponse.status,
      statusText: axiosResponse.statusText,
      dataKeys: Object.keys(axiosResponse.data || {})
    });

    // Manejar diferentes estructuras de respuesta
    let leadId = null;
    if (axiosResponse.data && Array.isArray(axiosResponse.data) && axiosResponse.data.length > 0) {
      leadId = axiosResponse.data[0].id;
    } else if (axiosResponse.data && axiosResponse.data._embedded && axiosResponse.data._embedded.leads) {
      leadId = axiosResponse.data._embedded.leads[0].id;
    }
    
    return response.status(200).json({ 
      success: true, 
      leadId: leadId,
      message: 'Lead creado exitosamente en Kommo'
    });

  } catch (error) {
    console.error('=== ERROR EN API CONTACT ===');
    console.error('Error completo:', {
      message: error.message,
      stack: error.stack,
      name: error.name,
      code: error.code
    });
    
    // Proporcionar más detalles del error
    let errorMessage = 'Error al enviar el formulario';
    let errorDetails = {
      type: 'unknown',
      message: error.message
    };
    
    if (error.response) {
      console.error('Error de respuesta HTTP:', {
        status: error.response.status,
        statusText: error.response.statusText,
        data: error.response.data,
        headers: error.response.headers
      });
      errorMessage = `Error ${error.response.status}: ${error.response.statusText}`;
      errorDetails = {
        type: 'http_response',
        status: error.response.status,
        statusText: error.response.statusText,
        data: error.response.data
      };
    } else if (error.request) {
      console.error('Error de request:', error.request);
      errorMessage = 'Error de conexión con Kommo';
      errorDetails = {
        type: 'network',
        message: 'No se pudo conectar con Kommo'
      };
    } else if (error.code === 'ENOTFOUND') {
      errorMessage = 'Error de DNS - no se pudo resolver el dominio';
      errorDetails = {
        type: 'dns',
        message: error.message
      };
    } else if (error.code === 'ETIMEDOUT') {
      errorMessage = 'Timeout - la solicitud tardó demasiado';
      errorDetails = {
        type: 'timeout',
        message: error.message
      };
    }
    
    console.error('Enviando respuesta de error:', { errorMessage, errorDetails });
    
    return response.status(500).json({ 
      success: false, 
      error: errorMessage,
      details: errorDetails,
      timestamp: new Date().toISOString()
    });
  }
}
