const CACHE_NAME = 'PORTFOLIO_CACHE-v2';

self.addEventListener('install', function(){
    //Guardar archivos iniciales

    caches.open('CACHE_NAME').then(function(cache){
        cache.addAll(['/index.html', '/dist/javascript/bundle.js', '../public/img/1.jpg']);
    })
});


self.addEventListener('activate', function(ev){
   ev.waitUntil(
    caches.keys().then(function(cacheNames){
        let promises = cacheNames.forEach(cacheName => {
            if(CACHE_NAME !== cacheName) return caches.delete(cacheName);
        });
        
        return Promise.all(promises)
      })
   );
});

self.addEventListener('fetch', function(ev){
    ev.respondWith(
        caches.match(ev.request)
        .then(function(response){

            return response || fetch(ev.request);
        }).catch(function(){
            if(ev.request.mode == "navigate")
              return caches.match(ev.request);
        })
    );
})