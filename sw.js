self.addEventListener("install", (event) => {
  console.log("service worker installing...");
  event.waitUntil(
    caches.open("v1").then((cache) => {
      return cache.addAll([
        "index.html",
        "Inter.woff2",
        "favicon.ico",
        "styles.css",
      ]);
    })
  );
});

self.addEventListener("fetch", (event) => {
  console.log("service worker fetching...");
  event.respondWith(
    caches.match(event.request).then((response) => {
      return response || fetch(event.request);
    })
  );
});
