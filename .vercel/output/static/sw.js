const CACHE_NAME = 'colinas-v1';
const urlsToCache = [
  '/',
  '/contact',
  '/aboutus',
  '/faq',
  '/funservices',
  '/burning',
  '/optional',
  '/ponline',
  '/preneed',
  '/necesidad-inmediata',
  '/fonts/Gilroy-Light.woff',
  '/fonts/Gilroy-Extrabold.woff',
  '/images/logo.webp',
  '/favicon.svg',
  '/styles/global.css'
];

// Install event
self.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then((cache) => {
        return cache.addAll(urlsToCache.map(url => new Request(url, {cache: 'reload'})));
      })
      .catch((error) => {
        console.log('Cache install failed:', error);
      })
  );
  self.skipWaiting();
});

// Activate event
self.addEventListener('activate', (event) => {
  event.waitUntil(
    caches.keys().then((cacheNames) => {
      return Promise.all(
        cacheNames.map((cacheName) => {
          if (cacheName !== CACHE_NAME) {
            return caches.delete(cacheName);
          }
        })
      );
    })
  );
  self.clients.claim();
});

// Fetch event
self.addEventListener('fetch', (event) => {
  const { request } = event;
  const url = new URL(request.url);
  
  // Skip non-GET requests
  if (request.method !== 'GET') {
    return;
  }
  
  // Skip external requests and Vercel analytics
  if (url.origin !== location.origin || url.pathname.includes('_vercel')) {
    return;
  }
  
  // Skip API requests
  if (url.pathname.startsWith('/api/')) {
    return;
  }
  
  // Use cache first for static assets
  if (url.pathname.match(/\.(js|css|png|jpg|jpeg|gif|webp|svg|woff|woff2|ico)$/)) {
    event.respondWith(cacheFirst(request));
  } else {
    // Use network first for pages
    event.respondWith(networkFirst(request));
  }
});

// Cache First strategy
async function cacheFirst(request) {
  try {
    const cache = await caches.open(CACHE_NAME);
    const cached = await cache.match(request);
    
    if (cached) {
      return cached;
    }
    
    const response = await fetch(request);
    if (response.ok && response.status < 400) {
      cache.put(request, response.clone());
    }
    return response;
  } catch (error) {
    console.log('Cache First failed for:', request.url, error);
    // Return a basic offline response for failed requests
    return new Response('Resource not available offline', { 
      status: 503,
      statusText: 'Service Unavailable',
      headers: { 'Content-Type': 'text/plain' }
    });
  }
}

// Network First strategy
async function networkFirst(request) {
  try {
    const response = await fetch(request);
    if (response.ok && response.status < 400) {
      const cache = await caches.open(CACHE_NAME);
      cache.put(request, response.clone());
    }
    return response;
  } catch (error) {
    console.log('Network First failed for:', request.url, error);
    const cache = await caches.open(CACHE_NAME);
    const cached = await cache.match(request);
    if (cached) {
      return cached;
    }
    // Return a basic offline page
    return new Response('Page not available offline', { 
      status: 503,
      statusText: 'Service Unavailable',
      headers: { 'Content-Type': 'text/plain' }
    });
  }
}