// Refugio: funciona sin internet. Cambia la versión al publicar cambios.
const VERSION = "refugio-v3";
const CORE = ["./", "index.html", "manifest.webmanifest", "apple-touch-icon.png", "icon-192.png", "icon-512.png", "icon-maskable-512.png", "qr.png"];

self.addEventListener("install", e => {
  e.waitUntil(caches.open(VERSION).then(c => c.addAll(CORE)).then(() => self.skipWaiting()));
});
self.addEventListener("activate", e => {
  e.waitUntil(caches.keys().then(ks => Promise.all(ks.filter(k => k !== VERSION).map(k => caches.delete(k)))).then(() => self.clients.claim()));
});
self.addEventListener("fetch", e => {
  const req = e.request;
  if (req.method !== "GET") return;
  // La app: primero la red (para recibir cambios), si no hay red, la copia guardada.
  if (req.mode === "navigate") {
    e.respondWith(fetch(req).then(r => { const c = r.clone(); caches.open(VERSION).then(x => x.put("index.html", c)); return r; })
      .catch(() => caches.match("index.html")));
    return;
  }
  // Íconos y tipografías: la copia guardada primero.
  e.respondWith(caches.match(req).then(hit => hit || fetch(req).then(r => {
    const c = r.clone(); caches.open(VERSION).then(x => x.put(req, c)); return r;
  })));
});
