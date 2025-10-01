import type { APIRoute } from 'astro';

const pages = [
  '',
  'pre-necesidad',
  'necesidad-inmediata',
  'servicios-funerarios',
  'servicios-nichos-cremacion-y-osarios',
  'servicios-lotes',
  'servicios-opcionales',
  'obituarios',
  'pagos-en-linea',
  'preguntas-frecuentes',
  'nosotros',
  'agendar-cita'
];

export const GET: APIRoute = () => {
  const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  ${pages.map(page => `
  <url>
    <loc>https://www.colinasdelapaz.com/${page}</loc>
    <lastmod>${new Date().toISOString().split('T')[0]}</lastmod>
    <changefreq>monthly</changefreq>
    <priority>${page === '' ? '1.0' : '0.8'}</priority>
  </url>`).join('')}
</urlset>`;

  return new Response(sitemap, {
    headers: {
      'Content-Type': 'application/xml',
    },
  });
};
