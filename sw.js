const CACHE='lead-response-automation-v1-demo-pwa-v2';
const ASSETS=['./','./index.html','./sales.html','./styles.css','./app.mjs','./workflow-engine.mjs','./sandbox.settings.json','./privacy.html','./terms.html','./support.html','./manifest.webmanifest','./icon.svg','./icon-180.png'];
self.addEventListener('install',event=>event.waitUntil(caches.open(CACHE).then(cache=>cache.addAll(ASSETS)).then(()=>self.skipWaiting())));
self.addEventListener('activate',event=>event.waitUntil(self.clients.claim()));
self.addEventListener('fetch',event=>{if(event.request.method!=='GET')return;event.respondWith(fetch(event.request).then(response=>{const copy=response.clone();caches.open(CACHE).then(cache=>cache.put(event.request,copy));return response;}).catch(()=>caches.match(event.request)));});