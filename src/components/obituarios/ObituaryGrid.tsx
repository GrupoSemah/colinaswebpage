import { useState, useEffect } from 'react';

interface Obituario {
  id: number;
  difunto: string;
  fecha: string;
  hora: string;
  servicio: string;
  ubicacion: string;
}

export default function ObituaryGrid() {
  const [obituarios, setObituarios] = useState<Obituario[]>([]);
  const [filteredObituarios, setFilteredObituarios] = useState<Obituario[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [visibleCount, setVisibleCount] = useState(6);

  useEffect(() => {
    fetchObituarios();
  }, []); // Solo ejecutar una vez al montar el componente

  useEffect(() => {
    // Escuchar evento de filtrado combinado
    const handleFilter = (event: CustomEvent) => {
      const { searchText, date } = event.detail;
      filterObituarios(searchText, date);
    };
    
    window.addEventListener('filterObituarios', handleFilter as EventListener);
    
    return () => {
      window.removeEventListener('filterObituarios', handleFilter as EventListener);
    };
  }, [obituarios]); // Este efecto sí depende de obituarios para el filtrado

  const fetchObituarios = async () => {
    try {
      setLoading(true);
      const response = await fetch('/api/obituarios');
      const data = await response.json();
      
      if (data.success) {
        setObituarios(data.obituarios);
        setFilteredObituarios(data.obituarios);
      } else {
        setError(data.error || 'Error al cargar obituarios');
      }
    } catch (err) {
      setError('Error de conexión al cargar obituarios');
      console.error('Error fetching obituarios:', err);
    } finally {
      setLoading(false);
    }
  };

  const filterObituarios = (searchText: string, selectedDate: string) => {
    let filtered = [...obituarios];

    // Filtrar por texto de búsqueda (nombre, servicio, ubicación)
    if (searchText) {
      filtered = filtered.filter(obit => {
        const searchLower = searchText.toLowerCase();
        return (
          obit.difunto.toLowerCase().includes(searchLower) ||
          obit.servicio.toLowerCase().includes(searchLower) ||
          obit.ubicacion.toLowerCase().includes(searchLower)
        );
      });
    }

    // Filtrar por fecha
    if (selectedDate) {
      // Convertir fecha seleccionada (YYYY-MM-DD) a formato DD/MM/YYYY
      const [year, month, day] = selectedDate.split('-');
      const formattedDate = `${day}/${month}/${year}`;
      
      filtered = filtered.filter(obit => {
        // Comparar con el formato de fecha del sheet (DD/MM/YYYY)
        return obit.fecha.includes(formattedDate) || 
               obit.fecha.includes(`${day}/${month}`) ||
               obit.fecha === formattedDate;
      });
    }

    setFilteredObituarios(filtered);
    setVisibleCount(6); // Reset visible count al filtrar
  };

  const loadMore = () => {
    setVisibleCount(prev => prev + 6);
  };

  if (loading) {
    return (
      <section className="py-16 bg-white">
        <div className="container mx-auto px-6">
          <div className="flex justify-center items-center min-h-[400px]">
            <div className="text-center">
              <div className="w-16 h-16 border-4 border-green-primary border-t-transparent rounded-full animate-spin mx-auto mb-4"></div>
              <p className="text-dark-gray text-lg">Cargando obituarios...</p>
            </div>
          </div>
        </div>
      </section>
    );
  }

  if (error) {
    return (
      <section className="py-16 bg-white">
        <div className="container mx-auto px-6">
          <div className="max-w-2xl mx-auto text-center">
            <div className="bg-red-50 border border-red-200 rounded-2xl p-8">
              <svg className="w-16 h-16 text-red-500 mx-auto mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              <h3 className="text-xl font-bold text-red-700 mb-2">Error al cargar obituarios</h3>
              <p className="text-red-600">{error}</p>
              <button 
                onClick={fetchObituarios}
                className="mt-6 bg-green-primary text-white px-6 py-2 rounded-lg hover:bg-green-dark transition-colors"
              >
                Reintentar
              </button>
            </div>
          </div>
        </div>
      </section>
    );
  }

  if (filteredObituarios.length === 0) {
    return (
      <section className="py-16 bg-white">
        <div className="container mx-auto px-6">
          <div className="max-w-2xl mx-auto text-center">
            <div className="bg-light-gray/20 rounded-2xl p-12">
              <svg className="w-20 h-20 text-gray-accessible mx-auto mb-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.172 16.172a4 4 0 015.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              <h3 className="text-2xl font-bold text-dark-gray mb-4">No se encontraron obituarios</h3>
              <p className="text-gray-accessible mb-6">
                No hay obituarios registrados para la fecha seleccionada.
              </p>
              <button 
                onClick={() => {
                  setFilteredObituarios(obituarios);
                  setVisibleCount(6);
                }}
                className="bg-green-primary text-white px-8 py-3 rounded-lg hover:bg-green-dark transition-colors"
              >
                Ver todos los obituarios
              </button>
            </div>
          </div>
        </div>
      </section>
    );
  }

  const visibleObituarios = filteredObituarios.slice(0, visibleCount);
  const hasMore = visibleCount < filteredObituarios.length;

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-6">
        {/* Grid de obituarios */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6 max-w-6xl mx-auto mb-12">
          {visibleObituarios.map((obituario) => (
            <div 
              key={obituario.id}
              className="bg-white rounded-2xl shadow-md hover:shadow-xl transition-shadow duration-300 p-6 border border-light-gray/30"
            >
              {/* Header con icono y nombre */}
              <div className="flex items-center gap-3 mb-4">
                <div className="w-12 h-12 bg-green-primary rounded-full flex items-center justify-center flex-shrink-0">
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-dark-gray flex-1">
                  {obituario.difunto}
                </h3>
              </div>

              {/* Tipo de servicio */}
              <div className="bg-green-primary/10 rounded-lg px-4 py-2 mb-4 text-center">
                <p className="text-dark-gray font-semibold">
                  {obituario.servicio}
                </p>
              </div>

              {/* Detalles del servicio */}
              <div className="space-y-3">
                {/* Fecha */}
                <div className="flex items-center gap-3 text-dark-gray/80">
                  <svg className="w-5 h-5 text-green-dark flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                  </svg>
                  <span className="text-base">{obituario.fecha}</span>
                </div>

                {/* Hora */}
                <div className="flex items-center gap-3 text-dark-gray/80">
                  <svg className="w-5 h-5 text-green-dark flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  <span className="text-base">{obituario.hora}</span>
                </div>

                {/* Ubicación */}
                <div className="flex items-center gap-3 text-dark-gray/80">
                  <svg className="w-5 h-5 text-green-dark flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                  <span className="text-base">{obituario.ubicacion}</span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Botón Ver más */}
        {hasMore && (
          <div className="flex justify-center">
            <button 
              onClick={loadMore}
              className="bg-green-primary text-white font-semibold px-12 py-4 rounded-xl hover:bg-green-dark transition-colors duration-300 text-lg"
            >
              Ver más
            </button>
          </div>
        )}
      </div>
    </section>
  );
}
