import axios from 'axios';
export { renderers } from '../../renderers.mjs';

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
  try {
    const formData = await request.json();
    const incomingLeadData = [{
      source_name: "Formulario Web Colinas de la Paz",
      source_uid: `web_form_${Date.now()}_${Math.random().toString(36).substr(2, 9)}`,
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
    const response = await axios.post(
      `https://${"colinasdelapaz"}.kommo.com/api/v4/leads/unsorted/forms`,
      incomingLeadData,
      {
        headers: {
          "Authorization": `Bearer ${"eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiIsImp0aSI6Ijc0YzBjOWQ0YTA2MGY2NzUyYWE0MzVlMGQ0NTk5NjczMDM3MTliYzgyMjJhYjAxOTc0ZmNlNjAyYTZiODhmZWE3OWUwNTEzYzE2ODFhMGEzIn0.eyJhdWQiOiI4MjM0Yjc2Yy1lYTMyLTRmNmYtYjU4Zi01MGUwYjAzZDI5MDQiLCJqdGkiOiI3NGMwYzlkNGEwNjBmNjc1MmFhNDM1ZTBkNDU5OTY3MzAzNzE5YmM4MjIyYWIwMTk3NGZjZTYwMmE2Yjg4ZmVhNzllMDUxM2MxNjgxYTBhMyIsImlhdCI6MTc1NjkxNjMwNSwibmJmIjoxNzU2OTE2MzA1LCJleHAiOjE4OTMzNjk2MDAsInN1YiI6IjEyNTc1MjgzIiwiZ3JhbnRfdHlwZSI6IiIsImFjY291bnRfaWQiOjM0MDQ5NzQzLCJiYXNlX2RvbWFpbiI6ImtvbW1vLmNvbSIsInZlcnNpb24iOjIsInNjb3BlcyI6WyJjcm0iLCJmaWxlcyIsImZpbGVzX2RlbGV0ZSIsIm5vdGlmaWNhdGlvbnMiLCJwdXNoX25vdGlmaWNhdGlvbnMiXSwidXNlcl9mbGFncyI6MCwiaGFzaF91dWlkIjoiYWU3M2MyZGUtZGRhNS00MWZhLWExNzAtOGVkYjQ1ZDlmZWQxIiwiYXBpX2RvbWFpbiI6ImFwaS1jLmtvbW1vLmNvbSJ9.KIhzWazN8QOJgE53KCX_zJTHDhLmEE_Znc92XuoPZHXfSnul2tsNbqAfF8YiuxWS9RUj0sBQKIScQ0Wv2jeQs7rbEjO3VeoTt2QQAcvSG2ZUkA3JS456uuBMpSuMNs1VkFf8rTqP2PbcKquGdKwhlbSAYCXPyw1G5WSeT5YF5LXfSj3ZCPp1bU37tiw3actyLVOfDOPYVxSC3zm5e973CScSl2a-zp-emllag5TPa43f5vdR0wYwmBxDcePyGK6OtQVk400Br41c__0oknbc42DsPJENQ9_G3jmCuSVtRcpbJEJLnh715-RIhsLeWpbRxcGbmS6gOfNlSVxbdkpQNg"}`,
          "Content-Type": "application/json"
        }
      }
    );
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
    return new Response(JSON.stringify({
      success: false,
      error: "Error al enviar el formulario"
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
