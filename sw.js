// Caches the app so it opens offline. Bump VERSION when you change files.
const VERSION = 'MeToo-v7';
const FILES = ['./', 'index.html', 'panic.html', 'guide.html', 'manifest.webmanifest', 'manifest-sos.webmanifest',
  'icon-180.png', 'icon-192.png', 'icon-512.png', 'icon-sos-180.png', 'icon-sos-192.png', 'icon-sos-512.png'];
self.addEventListener('install', e => { e.waitUntil(caches.open(VERSION).then(c => c.addAll(FILES))); self.skipWaiting(); });
self.addEventListener('activate', e => {
  e.waitUntil(caches.keys().then(ks => Promise.all(ks.filter(k => k !== VERSION).map(k => caches.delete(k)))));
  self.clients.claim();
});
self.addEventListener('fetch', e => {
  if (e.request.method !== 'GET') return;
  e.respondWith(fetch(e.request).then(r => { const copy = r.clone(); caches.open(VERSION).then(c => c.put(e.request, copy)); return r; })
    .catch(() => caches.match(e.request).then(r => r || caches.match('index.html'))));
});
