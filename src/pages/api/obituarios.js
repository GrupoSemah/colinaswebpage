export async function GET() {
  try {
    const SHEET_ID = '1MYTtCjm-FFA1sEGSP536kCkcIISs50dzpqxvO2WVh2Y';
    const SHEET_NAME = 'Obituario';
    const API_KEY = import.meta.env.GOOGLE_SHEETS_API_KEY;

    if (!API_KEY) {
      console.error('Google Sheets API Key no configurada');
      return new Response(JSON.stringify({ 
        success: false, 
        error: 'API Key no configurada',
        obituarios: []
      }), {
        status: 500,
        headers: { 'Content-Type': 'application/json' }
      });
    }

    // Encode el nombre de la hoja para URL y especificar rango desde columna B
    const encodedSheetName = encodeURIComponent(SHEET_NAME);
    const range = `${encodedSheetName}!B:F`; // Leer solo columnas B a F (Difunto, Fecha, Hora, Servicio, Ubicacion)
    const url = `https://sheets.googleapis.com/v4/spreadsheets/${SHEET_ID}/values/${range}?key=${API_KEY}`;
    
    const response = await fetch(url);
    
    if (!response.ok) {
      let errorMessage = `Error ${response.status}: ${response.statusText}`;
      
      if (response.status === 400) {
        errorMessage = 'Error 400: Verifica que la API Key sea válida y que el nombre de la hoja sea correcto';
      } else if (response.status === 403) {
        errorMessage = 'Error 403: Verifica que el Google Sheet sea público o que la API Key tenga permisos';
      } else if (response.status === 404) {
        errorMessage = 'Error 404: No se encontró el Google Sheet o la hoja especificada';
      }
      
      throw new Error(errorMessage);
    }

    const data = await response.json();
    const rows = data.values || [];

    if (rows.length === 0) {
      return new Response(JSON.stringify({ 
        success: true, 
        obituarios: [],
        message: 'No hay datos en el Google Sheet'
      }), {
        status: 200,
        headers: { 
          'Content-Type': 'application/json',
          'Cache-Control': 'public, max-age=300' // Cache 5 minutos
        }
      });
    }

    // Saltar la primera fila (encabezados) y procesar
    const allObituarios = rows.slice(1).map((row, index) => {
      // Al leer rango B:F, los índices son: 0 (Difunto), 1 (Fecha), 2 (Hora), 3 (Servicio), 4 (Ubicacion)
      return {
        id: index + 1,
        difunto: row[0] || '', // Columna B (índice 0 en el rango B:F)
        fecha: row[1] || '',   // Columna C (índice 1 en el rango B:F)
        hora: row[2] || '',    // Columna D (índice 2 en el rango B:F)
        servicio: row[3] || '', // Columna E (índice 3 en el rango B:F)
        ubicacion: row[4] || '' // Columna F (índice 4 en el rango B:F)
      };
    }).filter(obituario => obituario.difunto); // Filtrar filas vacías
    
    // Invertir para mostrar los últimos primero y reasignar IDs
    const obituarios = allObituarios.reverse().map((obit, index) => ({
      ...obit,
      id: index + 1 // Reasignar ID después de invertir
    }));

    return new Response(JSON.stringify({ 
      success: true, 
      obituarios,
      total: obituarios.length
    }), {
      status: 200,
      headers: { 
        'Content-Type': 'application/json',
        'Cache-Control': 'public, max-age=300' // Cache 5 minutos
      }
    });

  } catch (error) {
    console.error('Error en API de obituarios:', error);
    
    return new Response(JSON.stringify({ 
      success: false, 
      error: error.message,
      obituarios: []
    }), {
      status: 500,
      headers: { 'Content-Type': 'application/json' }
    });
  }
}
