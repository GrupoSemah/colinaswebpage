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
  console.log('=== INICIO API CONTACT ===');
  
  try {
    // Log del entorno de ejecución
    console.log('Environment:', {
      isVercel: !!import.meta.env.VERCEL,
      nodeEnv: import.meta.env.NODE_ENV,
      platform: typeof process !== 'undefined' ? process.platform : 'unknown'
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
        exists: !!import.meta.env[varName],
        length: import.meta.env[varName] ? import.meta.env[varName].length : 0
      };
    });
    console.log('Estado de variables:', envStatus);
    
    const missingVars = requiredEnvVars.filter(varName => !import.meta.env[varName]);
    
    if (missingVars.length > 0) {
      console.error('Variables de entorno faltantes:', missingVars);
      return new Response(JSON.stringify({ 
        success: false, 
        error: 'Configuración del servidor incompleta',
        missingVars: missingVars,
        envStatus: envStatus
      }), {
        status: 500,
        headers: { 'Content-Type': 'application/json' }
      });
    }

    console.log('Parseando datos del formulario...');
    const formData = await request.json();
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

    const kommoUrl = `https://${import.meta.env.KOMMO_SUBDOMAIN}.kommo.com/api/v4/leads/unsorted/forms`;
    console.log('Enviando a Kommo:', {
      url: kommoUrl,
      dataSize: JSON.stringify(incomingLeadData).length,
      hasAuth: !!import.meta.env.KOMMO_ACCESS_TOKEN
    });
    
    const response = await axios.post(
      kommoUrl,
      incomingLeadData,
      {
        headers: {
          'Authorization': `Bearer ${import.meta.env.KOMMO_ACCESS_TOKEN}`,
          'Content-Type': 'application/json'
        },
        timeout: 10000 // 10 segundos timeout
      }
    );
    
    console.log('Respuesta de Kommo:', {
      status: response.status,
      statusText: response.statusText,
      dataKeys: Object.keys(response.data || {})
    });

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
    
    return new Response(JSON.stringify({ 
      success: false, 
      error: errorMessage,
      details: errorDetails,
      timestamp: new Date().toISOString()
    }), {
      status: 500,
      headers: { 'Content-Type': 'application/json' }
    });
  }
}
