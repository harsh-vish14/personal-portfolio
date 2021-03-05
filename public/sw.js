const filesToCache = [
  'images/titleImage.png',
  'icons/React_js.svg',
  'icons/html.svg',
  'icons/Javascript.svg',
  'icons/nodejs.svg',
  'icons/express.svg',
  'icons/css.svg',
  'icons/json.svg',
  'icons/sass.svg',
  'icons/vscode.svg',
  'icons/dimension.svg',
  'icons/photoshop.svg',
  'icons/adobexd.svg',
  'icons/github.svg',
  'icons/twitter.svg',
  'icons/instagram.svg',
  'style.css',
  'cursore.js',
  'https://cdn.jsdelivr.net/npm/@popperjs/core@2.6.0/dist/umd/popper.min.js',
  'https://cdn.jsdelivr.net/npm/bootstrap@5.0.0-beta2/dist/js/bootstrap.min.js',
  'https://cdn.jsdelivr.net/npm/bootstrap@5.0.0-beta2/dist/css/bootstrap.min.css'
];

const staticCacheName = 'pages-cache-v1';

self.addEventListener('install', event => {
  console.log('Attempting to install service worker and cache static assets');
  event.waitUntil(
    caches.open(staticCacheName)
    .then(cache => {
      return cache.addAll(filesToCache);
    })
  );
});

self.addEventListener('fetch', event => {
  console.log('Fetch event for ', event.request.url);
  event.respondWith(
    caches.match(event.request)
    .then(response => {
      if (response) {
        console.log('Found ', event.request.url, ' in cache');
        return response;
      }
      console.log('Network request for ', event.request.url);
      return fetch(event.request)

      // TODO 4 - Add fetched files to the cache

    }).catch(error => {

      // TODO 6 - Respond with custom offline page

    })
  );
});