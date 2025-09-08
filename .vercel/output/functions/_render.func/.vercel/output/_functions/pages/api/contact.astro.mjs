import axios from 'axios';
export { renderers } from '../../renderers.mjs';

const __vite_import_meta_env__ = {"ASSETS_PREFIX": undefined, "BASE_URL": "/", "DEV": false, "MODE": "production", "PROD": true, "SITE": "https://colinasdelapaz.com", "SSR": true};
function getServiceEnumId(servicio) {
  const serviceMap = {
    "lotes": 971748,
    "nichos": 971750,
    "osarios": 971752,
    "alquiler": 971754,
    "servicios-funerarios": 971756,
    "cremaciones": 971758,
    "otros-servicios": 971760,
    "lote-servicios": 971762,
    "nichos-servicios": 971764,
    "alquiler-servicios": 971766
  };
  return serviceMap[servicio] || 971950;
}
async function POST({ request }) {
  console.log("=== INICIO API CONTACT ===");
  try {
    console.log("Environment:", {
      isVercel: !!Object.assign(__vite_import_meta_env__, { KOMMO_SUBDOMAIN: "colinasdelapaz", KOMMO_ACCESS_TOKEN: "eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiIsImp0aSI6Ijc0YzBjOWQ0YTA2MGY2NzUyYWE0MzVlMGQ0NTk5NjczMDM3MTliYzgyMjJhYjAxOTc0ZmNlNjAyYTZiODhmZWE3OWUwNTEzYzE2ODFhMGEzIn0.eyJhdWQiOiI4MjM0Yjc2Yy1lYTMyLTRmNmYtYjU4Zi01MGUwYjAzZDI5MDQiLCJqdGkiOiI3NGMwYzlkNGEwNjBmNjc1MmFhNDM1ZTBkNDU5OTY3MzAzNzE5YmM4MjIyYWIwMTk3NGZjZTYwMmE2Yjg4ZmVhNzllMDUxM2MxNjgxYTBhMyIsImlhdCI6MTc1NjkxNjMwNSwibmJmIjoxNzU2OTE2MzA1LCJleHAiOjE4OTMzNjk2MDAsInN1YiI6IjEyNTc1MjgzIiwiZ3JhbnRfdHlwZSI6IiIsImFjY291bnRfaWQiOjM0MDQ5NzQzLCJiYXNlX2RvbWFpbiI6ImtvbW1vLmNvbSIsInZlcnNpb24iOjIsInNjb3BlcyI6WyJjcm0iLCJmaWxlcyIsImZpbGVzX2RlbGV0ZSIsIm5vdGlmaWNhdGlvbnMiLCJwdXNoX25vdGlmaWNhdGlvbnMiXSwidXNlcl9mbGFncyI6MCwiaGFzaF91dWlkIjoiYWU3M2MyZGUtZGRhNS00MWZhLWExNzAtOGVkYjQ1ZDlmZWQxIiwiYXBpX2RvbWFpbiI6ImFwaS1jLmtvbW1vLmNvbSJ9.KIhzWazN8QOJgE53KCX_zJTHDhLmEE_Znc92XuoPZHXfSnul2tsNbqAfF8YiuxWS9RUj0sBQKIScQ0Wv2jeQs7rbEjO3VeoTt2QQAcvSG2ZUkA3JS456uuBMpSuMNs1VkFf8rTqP2PbcKquGdKwhlbSAYCXPyw1G5WSeT5YF5LXfSj3ZCPp1bU37tiw3actyLVOfDOPYVxSC3zm5e973CScSl2a-zp-emllag5TPa43f5vdR0wYwmBxDcePyGK6OtQVk400Br41c__0oknbc42DsPJENQ9_G3jmCuSVtRcpbJEJLnh715-RIhsLeWpbRxcGbmS6gOfNlSVxbdkpQNg", KOMMO_PIPELINE_ID: "10348799", KOMMO_USER_ID: "13774007", KOMMO_EMAIL_FIELD_ID: "119884", KOMMO_PHONE_FIELD_ID: "119882", KOMMO_SERVICE_FIELD_ID: "1021440", KOMMO_FUENTE_LEAD_ID: "1021438", KOMMO_FUENTE_LEAD_ENUM_ID: "974566", NODE: process.env.NODE, NODE_ENV: process.env.NODE_ENV, OS: process.env.OS, _: process.env._ }).VERCEL,
      nodeEnv: process.env.NODE_ENV,
      platform: typeof process !== "undefined" ? process.platform : "unknown"
    });
    const requiredEnvVars = [
      "KOMMO_SUBDOMAIN",
      "KOMMO_ACCESS_TOKEN",
      "KOMMO_PIPELINE_ID",
      "KOMMO_USER_ID",
      "KOMMO_EMAIL_FIELD_ID",
      "KOMMO_PHONE_FIELD_ID",
      "KOMMO_SERVICE_FIELD_ID",
      "KOMMO_FUENTE_LEAD_ID",
      "KOMMO_FUENTE_LEAD_ENUM_ID"
    ];
    console.log("Verificando variables de entorno...");
    const envStatus = {};
    requiredEnvVars.forEach((varName) => {
      envStatus[varName] = {
        exists: !!Object.assign(__vite_import_meta_env__, { KOMMO_SUBDOMAIN: "colinasdelapaz", KOMMO_ACCESS_TOKEN: "eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiIsImp0aSI6Ijc0YzBjOWQ0YTA2MGY2NzUyYWE0MzVlMGQ0NTk5NjczMDM3MTliYzgyMjJhYjAxOTc0ZmNlNjAyYTZiODhmZWE3OWUwNTEzYzE2ODFhMGEzIn0.eyJhdWQiOiI4MjM0Yjc2Yy1lYTMyLTRmNmYtYjU4Zi01MGUwYjAzZDI5MDQiLCJqdGkiOiI3NGMwYzlkNGEwNjBmNjc1MmFhNDM1ZTBkNDU5OTY3MzAzNzE5YmM4MjIyYWIwMTk3NGZjZTYwMmE2Yjg4ZmVhNzllMDUxM2MxNjgxYTBhMyIsImlhdCI6MTc1NjkxNjMwNSwibmJmIjoxNzU2OTE2MzA1LCJleHAiOjE4OTMzNjk2MDAsInN1YiI6IjEyNTc1MjgzIiwiZ3JhbnRfdHlwZSI6IiIsImFjY291bnRfaWQiOjM0MDQ5NzQzLCJiYXNlX2RvbWFpbiI6ImtvbW1vLmNvbSIsInZlcnNpb24iOjIsInNjb3BlcyI6WyJjcm0iLCJmaWxlcyIsImZpbGVzX2RlbGV0ZSIsIm5vdGlmaWNhdGlvbnMiLCJwdXNoX25vdGlmaWNhdGlvbnMiXSwidXNlcl9mbGFncyI6MCwiaGFzaF91dWlkIjoiYWU3M2MyZGUtZGRhNS00MWZhLWExNzAtOGVkYjQ1ZDlmZWQxIiwiYXBpX2RvbWFpbiI6ImFwaS1jLmtvbW1vLmNvbSJ9.KIhzWazN8QOJgE53KCX_zJTHDhLmEE_Znc92XuoPZHXfSnul2tsNbqAfF8YiuxWS9RUj0sBQKIScQ0Wv2jeQs7rbEjO3VeoTt2QQAcvSG2ZUkA3JS456uuBMpSuMNs1VkFf8rTqP2PbcKquGdKwhlbSAYCXPyw1G5WSeT5YF5LXfSj3ZCPp1bU37tiw3actyLVOfDOPYVxSC3zm5e973CScSl2a-zp-emllag5TPa43f5vdR0wYwmBxDcePyGK6OtQVk400Br41c__0oknbc42DsPJENQ9_G3jmCuSVtRcpbJEJLnh715-RIhsLeWpbRxcGbmS6gOfNlSVxbdkpQNg", KOMMO_PIPELINE_ID: "10348799", KOMMO_USER_ID: "13774007", KOMMO_EMAIL_FIELD_ID: "119884", KOMMO_PHONE_FIELD_ID: "119882", KOMMO_SERVICE_FIELD_ID: "1021440", KOMMO_FUENTE_LEAD_ID: "1021438", KOMMO_FUENTE_LEAD_ENUM_ID: "974566", NODE: process.env.NODE, NODE_ENV: process.env.NODE_ENV, OS: process.env.OS, _: process.env._ })[varName],
        length: Object.assign(__vite_import_meta_env__, { KOMMO_SUBDOMAIN: "colinasdelapaz", KOMMO_ACCESS_TOKEN: "eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiIsImp0aSI6Ijc0YzBjOWQ0YTA2MGY2NzUyYWE0MzVlMGQ0NTk5NjczMDM3MTliYzgyMjJhYjAxOTc0ZmNlNjAyYTZiODhmZWE3OWUwNTEzYzE2ODFhMGEzIn0.eyJhdWQiOiI4MjM0Yjc2Yy1lYTMyLTRmNmYtYjU4Zi01MGUwYjAzZDI5MDQiLCJqdGkiOiI3NGMwYzlkNGEwNjBmNjc1MmFhNDM1ZTBkNDU5OTY3MzAzNzE5YmM4MjIyYWIwMTk3NGZjZTYwMmE2Yjg4ZmVhNzllMDUxM2MxNjgxYTBhMyIsImlhdCI6MTc1NjkxNjMwNSwibmJmIjoxNzU2OTE2MzA1LCJleHAiOjE4OTMzNjk2MDAsInN1YiI6IjEyNTc1MjgzIiwiZ3JhbnRfdHlwZSI6IiIsImFjY291bnRfaWQiOjM0MDQ5NzQzLCJiYXNlX2RvbWFpbiI6ImtvbW1vLmNvbSIsInZlcnNpb24iOjIsInNjb3BlcyI6WyJjcm0iLCJmaWxlcyIsImZpbGVzX2RlbGV0ZSIsIm5vdGlmaWNhdGlvbnMiLCJwdXNoX25vdGlmaWNhdGlvbnMiXSwidXNlcl9mbGFncyI6MCwiaGFzaF91dWlkIjoiYWU3M2MyZGUtZGRhNS00MWZhLWExNzAtOGVkYjQ1ZDlmZWQxIiwiYXBpX2RvbWFpbiI6ImFwaS1jLmtvbW1vLmNvbSJ9.KIhzWazN8QOJgE53KCX_zJTHDhLmEE_Znc92XuoPZHXfSnul2tsNbqAfF8YiuxWS9RUj0sBQKIScQ0Wv2jeQs7rbEjO3VeoTt2QQAcvSG2ZUkA3JS456uuBMpSuMNs1VkFf8rTqP2PbcKquGdKwhlbSAYCXPyw1G5WSeT5YF5LXfSj3ZCPp1bU37tiw3actyLVOfDOPYVxSC3zm5e973CScSl2a-zp-emllag5TPa43f5vdR0wYwmBxDcePyGK6OtQVk400Br41c__0oknbc42DsPJENQ9_G3jmCuSVtRcpbJEJLnh715-RIhsLeWpbRxcGbmS6gOfNlSVxbdkpQNg", KOMMO_PIPELINE_ID: "10348799", KOMMO_USER_ID: "13774007", KOMMO_EMAIL_FIELD_ID: "119884", KOMMO_PHONE_FIELD_ID: "119882", KOMMO_SERVICE_FIELD_ID: "1021440", KOMMO_FUENTE_LEAD_ID: "1021438", KOMMO_FUENTE_LEAD_ENUM_ID: "974566", NODE: process.env.NODE, NODE_ENV: process.env.NODE_ENV, OS: process.env.OS, _: process.env._ })[varName] ? Object.assign(__vite_import_meta_env__, { KOMMO_SUBDOMAIN: "colinasdelapaz", KOMMO_ACCESS_TOKEN: "eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiIsImp0aSI6Ijc0YzBjOWQ0YTA2MGY2NzUyYWE0MzVlMGQ0NTk5NjczMDM3MTliYzgyMjJhYjAxOTc0ZmNlNjAyYTZiODhmZWE3OWUwNTEzYzE2ODFhMGEzIn0.eyJhdWQiOiI4MjM0Yjc2Yy1lYTMyLTRmNmYtYjU4Zi01MGUwYjAzZDI5MDQiLCJqdGkiOiI3NGMwYzlkNGEwNjBmNjc1MmFhNDM1ZTBkNDU5OTY3MzAzNzE5YmM4MjIyYWIwMTk3NGZjZTYwMmE2Yjg4ZmVhNzllMDUxM2MxNjgxYTBhMyIsImlhdCI6MTc1NjkxNjMwNSwibmJmIjoxNzU2OTE2MzA1LCJleHAiOjE4OTMzNjk2MDAsInN1YiI6IjEyNTc1MjgzIiwiZ3JhbnRfdHlwZSI6IiIsImFjY291bnRfaWQiOjM0MDQ5NzQzLCJiYXNlX2RvbWFpbiI6ImtvbW1vLmNvbSIsInZlcnNpb24iOjIsInNjb3BlcyI6WyJjcm0iLCJmaWxlcyIsImZpbGVzX2RlbGV0ZSIsIm5vdGlmaWNhdGlvbnMiLCJwdXNoX25vdGlmaWNhdGlvbnMiXSwidXNlcl9mbGFncyI6MCwiaGFzaF91dWlkIjoiYWU3M2MyZGUtZGRhNS00MWZhLWExNzAtOGVkYjQ1ZDlmZWQxIiwiYXBpX2RvbWFpbiI6ImFwaS1jLmtvbW1vLmNvbSJ9.KIhzWazN8QOJgE53KCX_zJTHDhLmEE_Znc92XuoPZHXfSnul2tsNbqAfF8YiuxWS9RUj0sBQKIScQ0Wv2jeQs7rbEjO3VeoTt2QQAcvSG2ZUkA3JS456uuBMpSuMNs1VkFf8rTqP2PbcKquGdKwhlbSAYCXPyw1G5WSeT5YF5LXfSj3ZCPp1bU37tiw3actyLVOfDOPYVxSC3zm5e973CScSl2a-zp-emllag5TPa43f5vdR0wYwmBxDcePyGK6OtQVk400Br41c__0oknbc42DsPJENQ9_G3jmCuSVtRcpbJEJLnh715-RIhsLeWpbRxcGbmS6gOfNlSVxbdkpQNg", KOMMO_PIPELINE_ID: "10348799", KOMMO_USER_ID: "13774007", KOMMO_EMAIL_FIELD_ID: "119884", KOMMO_PHONE_FIELD_ID: "119882", KOMMO_SERVICE_FIELD_ID: "1021440", KOMMO_FUENTE_LEAD_ID: "1021438", KOMMO_FUENTE_LEAD_ENUM_ID: "974566", NODE: process.env.NODE, NODE_ENV: process.env.NODE_ENV, OS: process.env.OS, _: process.env._ })[varName].length : 0
      };
    });
    console.log("Estado de variables:", envStatus);
    const missingVars = requiredEnvVars.filter((varName) => !Object.assign(__vite_import_meta_env__, { KOMMO_SUBDOMAIN: "colinasdelapaz", KOMMO_ACCESS_TOKEN: "eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiIsImp0aSI6Ijc0YzBjOWQ0YTA2MGY2NzUyYWE0MzVlMGQ0NTk5NjczMDM3MTliYzgyMjJhYjAxOTc0ZmNlNjAyYTZiODhmZWE3OWUwNTEzYzE2ODFhMGEzIn0.eyJhdWQiOiI4MjM0Yjc2Yy1lYTMyLTRmNmYtYjU4Zi01MGUwYjAzZDI5MDQiLCJqdGkiOiI3NGMwYzlkNGEwNjBmNjc1MmFhNDM1ZTBkNDU5OTY3MzAzNzE5YmM4MjIyYWIwMTk3NGZjZTYwMmE2Yjg4ZmVhNzllMDUxM2MxNjgxYTBhMyIsImlhdCI6MTc1NjkxNjMwNSwibmJmIjoxNzU2OTE2MzA1LCJleHAiOjE4OTMzNjk2MDAsInN1YiI6IjEyNTc1MjgzIiwiZ3JhbnRfdHlwZSI6IiIsImFjY291bnRfaWQiOjM0MDQ5NzQzLCJiYXNlX2RvbWFpbiI6ImtvbW1vLmNvbSIsInZlcnNpb24iOjIsInNjb3BlcyI6WyJjcm0iLCJmaWxlcyIsImZpbGVzX2RlbGV0ZSIsIm5vdGlmaWNhdGlvbnMiLCJwdXNoX25vdGlmaWNhdGlvbnMiXSwidXNlcl9mbGFncyI6MCwiaGFzaF91dWlkIjoiYWU3M2MyZGUtZGRhNS00MWZhLWExNzAtOGVkYjQ1ZDlmZWQxIiwiYXBpX2RvbWFpbiI6ImFwaS1jLmtvbW1vLmNvbSJ9.KIhzWazN8QOJgE53KCX_zJTHDhLmEE_Znc92XuoPZHXfSnul2tsNbqAfF8YiuxWS9RUj0sBQKIScQ0Wv2jeQs7rbEjO3VeoTt2QQAcvSG2ZUkA3JS456uuBMpSuMNs1VkFf8rTqP2PbcKquGdKwhlbSAYCXPyw1G5WSeT5YF5LXfSj3ZCPp1bU37tiw3actyLVOfDOPYVxSC3zm5e973CScSl2a-zp-emllag5TPa43f5vdR0wYwmBxDcePyGK6OtQVk400Br41c__0oknbc42DsPJENQ9_G3jmCuSVtRcpbJEJLnh715-RIhsLeWpbRxcGbmS6gOfNlSVxbdkpQNg", KOMMO_PIPELINE_ID: "10348799", KOMMO_USER_ID: "13774007", KOMMO_EMAIL_FIELD_ID: "119884", KOMMO_PHONE_FIELD_ID: "119882", KOMMO_SERVICE_FIELD_ID: "1021440", KOMMO_FUENTE_LEAD_ID: "1021438", KOMMO_FUENTE_LEAD_ENUM_ID: "974566", NODE: process.env.NODE, NODE_ENV: process.env.NODE_ENV, OS: process.env.OS, _: process.env._ })[varName]);
    if (missingVars.length > 0) {
      console.error("Variables de entorno faltantes:", missingVars);
      return new Response(JSON.stringify({
        success: false,
        error: "Configuración del servidor incompleta",
        missingVars,
        envStatus
      }), {
        status: 500,
        headers: { "Content-Type": "application/json" }
      });
    }
    console.log("Parseando datos del formulario...");
    const formData = await request.json();
    console.log("Datos recibidos:", {
      nombre: formData.nombre ? "OK" : "MISSING",
      telefono: formData.telefono ? "OK" : "MISSING",
      email: formData.email ? "OK" : "MISSING",
      servicio: formData.servicio ? "OK" : "MISSING"
    });
    const incomingLeadData = [{
      source_name: "Formulario Web Colinas de la Paz",
      source_uid: `web_form_${Date.now()}_${Math.random().toString(36).substring(2, 11)}`,
      created_at: Math.floor(Date.now() / 1e3),
      pipeline_id: parseInt("10348799"),
      metadata: {
        category: "forms",
        form_id: "contact_form_colinas",
        form_name: "Formulario de Contacto",
        form_page: "https://colinasdelapaz.com/contact",
        ip: request.headers.get("x-forwarded-for") || request.headers.get("x-real-ip") || "127.0.0.1",
        form_sent_at: Math.floor(Date.now() / 1e3)
      },
      _embedded: {
        contacts: [{
          name: formData.nombre,
          custom_fields_values: [
            {
              field_id: parseInt("119884"),
              values: [{ value: formData.email }]
            },
            {
              field_id: parseInt("119882"),
              values: [{ value: formData.telefono }]
            }
          ]
        }],
        leads: [{
          name: `Solicitud WEB - ${formData.nombre}`,
          price: 0,
          pipeline_id: parseInt("10348799"),
          responsible_user_id: parseInt("13774007"),
          custom_fields_values: [
            {
              field_id: parseInt("1021440"),
              values: [{ enum_id: getServiceEnumId(formData.servicio) }]
            },
            {
              field_id: parseInt("1021438"),
              values: [{ enum_id: parseInt("974566") }]
            }
          ]
        }]
      }
    }];
    const kommoUrl = `https://${"colinasdelapaz"}.kommo.com/api/v4/leads/unsorted/forms`;
    console.log("Enviando a Kommo:", {
      url: kommoUrl,
      dataSize: JSON.stringify(incomingLeadData).length,
      hasAuth: true
    });
    const response = await axios.post(
      kommoUrl,
      incomingLeadData,
      {
        headers: {
          "Authorization": `Bearer ${"eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiIsImp0aSI6Ijc0YzBjOWQ0YTA2MGY2NzUyYWE0MzVlMGQ0NTk5NjczMDM3MTliYzgyMjJhYjAxOTc0ZmNlNjAyYTZiODhmZWE3OWUwNTEzYzE2ODFhMGEzIn0.eyJhdWQiOiI4MjM0Yjc2Yy1lYTMyLTRmNmYtYjU4Zi01MGUwYjAzZDI5MDQiLCJqdGkiOiI3NGMwYzlkNGEwNjBmNjc1MmFhNDM1ZTBkNDU5OTY3MzAzNzE5YmM4MjIyYWIwMTk3NGZjZTYwMmE2Yjg4ZmVhNzllMDUxM2MxNjgxYTBhMyIsImlhdCI6MTc1NjkxNjMwNSwibmJmIjoxNzU2OTE2MzA1LCJleHAiOjE4OTMzNjk2MDAsInN1YiI6IjEyNTc1MjgzIiwiZ3JhbnRfdHlwZSI6IiIsImFjY291bnRfaWQiOjM0MDQ5NzQzLCJiYXNlX2RvbWFpbiI6ImtvbW1vLmNvbSIsInZlcnNpb24iOjIsInNjb3BlcyI6WyJjcm0iLCJmaWxlcyIsImZpbGVzX2RlbGV0ZSIsIm5vdGlmaWNhdGlvbnMiLCJwdXNoX25vdGlmaWNhdGlvbnMiXSwidXNlcl9mbGFncyI6MCwiaGFzaF91dWlkIjoiYWU3M2MyZGUtZGRhNS00MWZhLWExNzAtOGVkYjQ1ZDlmZWQxIiwiYXBpX2RvbWFpbiI6ImFwaS1jLmtvbW1vLmNvbSJ9.KIhzWazN8QOJgE53KCX_zJTHDhLmEE_Znc92XuoPZHXfSnul2tsNbqAfF8YiuxWS9RUj0sBQKIScQ0Wv2jeQs7rbEjO3VeoTt2QQAcvSG2ZUkA3JS456uuBMpSuMNs1VkFf8rTqP2PbcKquGdKwhlbSAYCXPyw1G5WSeT5YF5LXfSj3ZCPp1bU37tiw3actyLVOfDOPYVxSC3zm5e973CScSl2a-zp-emllag5TPa43f5vdR0wYwmBxDcePyGK6OtQVk400Br41c__0oknbc42DsPJENQ9_G3jmCuSVtRcpbJEJLnh715-RIhsLeWpbRxcGbmS6gOfNlSVxbdkpQNg"}`,
          "Content-Type": "application/json"
        },
        timeout: 1e4
        // 10 segundos timeout
      }
    );
    console.log("Respuesta de Kommo:", {
      status: response.status,
      statusText: response.statusText,
      dataKeys: Object.keys(response.data || {})
    });
    let leadId = null;
    if (response.data && Array.isArray(response.data) && response.data.length > 0) {
      leadId = response.data[0].id;
    } else if (response.data && response.data._embedded && response.data._embedded.leads) {
      leadId = response.data._embedded.leads[0].id;
    }
    return new Response(JSON.stringify({
      success: true,
      leadId,
      message: "Lead creado exitosamente en Kommo"
    }), {
      status: 200,
      headers: { "Content-Type": "application/json" }
    });
  } catch (error) {
    console.error("=== ERROR EN API CONTACT ===");
    console.error("Error completo:", {
      message: error.message,
      stack: error.stack,
      name: error.name,
      code: error.code
    });
    let errorMessage = "Error al enviar el formulario";
    let errorDetails = {
      type: "unknown",
      message: error.message
    };
    if (error.response) {
      console.error("Error de respuesta HTTP:", {
        status: error.response.status,
        statusText: error.response.statusText,
        data: error.response.data,
        headers: error.response.headers
      });
      errorMessage = `Error ${error.response.status}: ${error.response.statusText}`;
      errorDetails = {
        type: "http_response",
        status: error.response.status,
        statusText: error.response.statusText,
        data: error.response.data
      };
    } else if (error.request) {
      console.error("Error de request:", error.request);
      errorMessage = "Error de conexión con Kommo";
      errorDetails = {
        type: "network",
        message: "No se pudo conectar con Kommo"
      };
    } else if (error.code === "ENOTFOUND") {
      errorMessage = "Error de DNS - no se pudo resolver el dominio";
      errorDetails = {
        type: "dns",
        message: error.message
      };
    } else if (error.code === "ETIMEDOUT") {
      errorMessage = "Timeout - la solicitud tardó demasiado";
      errorDetails = {
        type: "timeout",
        message: error.message
      };
    }
    console.error("Enviando respuesta de error:", { errorMessage, errorDetails });
    return new Response(JSON.stringify({
      success: false,
      error: errorMessage,
      details: errorDetails,
      timestamp: (/* @__PURE__ */ new Date()).toISOString()
    }), {
      status: 500,
      headers: { "Content-Type": "application/json" }
    });
  }
}

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  POST
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
