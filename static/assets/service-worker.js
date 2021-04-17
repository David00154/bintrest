// call Install Event
const cacheName = 'bintrestCache001'
const cacheAssets = ['js/main.js']

self.addEventListener('install', (e) => {
    e.waitUntil(
        caches
        .open(cacheName)
        .then(cache => {
            console.log('Service Worker: Caching Assets')
            cache.addAll(cacheAssets)
        })
        .then(() => self.skipWaiting())
    )
});

// call Activate Event

self.addEventListener('activate', (e) => {
    console.log('Service Worker Activate')
    // Remove Unwanted Cache
    e.waitUntil(
        caches.keys().then(cacheNames => {
            return Promise.all(
                cacheNames.map(cache => {
                    if(cache !== cacheName) {
                        console.log('Clearing Old Cache');
                        return caches.delete(cache)
                    }
                })
            )
        })
    )
});

self.addEventListener('fetch', (e) => {
    console.log('Service Worker: Fetching')
    e.respondWith(
        fetch(e.request)
        .catch(() => caches.match(e.request))
    )
});