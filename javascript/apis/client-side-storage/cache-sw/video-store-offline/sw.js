self.addEventListener("install", (e) => {
  e.waitUntil(
    caches.open("video-store").then(function (cache) {
      return cache.addAll([
        "/courses/mdn-learning-area/javascript/apis/client-side-storage/cache-sw/video-store-offline/",
        "/courses/mdn-learning-area/javascript/apis/client-side-storage/cache-sw/video-store-offline/index.html",
        "/courses/mdn-learning-area/javascript/apis/client-side-storage/cache-sw/video-store-offline/index.js",
        "/courses/mdn-learning-area/javascript/apis/client-side-storage/cache-sw/video-store-offline/style.css",
      ]);
    })
  );
});

self.addEventListener("fetch", (e) => {
  console.log(e.request.url);
  e.respondWith(
    caches.match(e.request).then((response) => response || fetch(e.request))
  );
});
