// service-worker.js
var CACHE_NAME = 'video-cache';
var urlsToCache = [
    'https://mixdrop.is/e/mkvq4mqzue78gr',
    'https://another-video-link.com',
    'https://yet-another-video-link.com'
];

self.addEventListener('install', function(event) {
    event.waitUntil(
        caches.open(CACHE_NAME)
            .then(function(cache) {
                console.log('Cache abierta');
                return cache.addAll(urlsToCache);
            })
    );
});

self.addEventListener('fetch', function(event) {
    event.respondWith(
        caches.match(event.request)
            .then(function(response) {
                if (response) {
                    return response;
                }
                return fetch(event.request);
            })
    );
});
