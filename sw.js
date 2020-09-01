// Files to cache
var cacheName = 'workforce';
var appShellFiles = ['index.html'];

// var gamesImages = [];
// for (var i = 0; i < games.length; i++) {
//   gamesImages.push('data/img/' + games[i].slug + '.jpg');
// }
// var contentToCache = appShellFiles.concat(gamesImages);

// Installing Service Worker
self.addEventListener('install', function (e) {
  console.log('[Service Worker] Install');
  e.waitUntil(
    caches.open(cacheName).then(function (cache) {
      console.log('[Service Worker] Caching all: app shell and content');
      console.log(appShellFiles);
      return cache.addAll(appShellFiles);
    })
  );
});

// Fetching content using Service Worker
self.addEventListener('fetch', function (e) {
  e.respondWith(
    caches.match(e.request).then(function (r) {
      console.log('[Service Worker] resource in cache: ' + e.request.url);
      return (
        // below code used to be ||.  it meant use cache first.
        // I changed to && to get the network update first.
        r &&
        fetch(e.request).then(function (response) {
          return caches.open(cacheName).then(function (cache) {
            console.log(
              '[Service Worker] Caching new resource: ' + e.request.url
            );
            cache.put(e.request, response.clone());
            return response;
          });
        })
      );
    })
  );
});
