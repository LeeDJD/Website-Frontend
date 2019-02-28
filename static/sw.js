importScripts('/_nuxt/workbox.4c4f5ca6.js')

workbox.precaching.precacheAndRoute([
  {
    "url": "/_nuxt/2f3fcc63e7f2feb37d56.js",
    "revision": "9b2eb938ffebb2ad144d51535e50114c"
  },
  {
    "url": "/_nuxt/3d5e4de1b3ad35092b51.js",
    "revision": "af8b197f92db3112d50e1e5b69b3c833"
  },
  {
    "url": "/_nuxt/698af4a2d9c72285ff45.js",
    "revision": "7e21d51bae3d74b072923820f5a3658a"
  },
  {
    "url": "/_nuxt/a7c15b889a2e88f7b2d4.js",
    "revision": "6a809f32073756a22c824fc5e9496b7c"
  }
], {
  "cacheId": "frontend",
  "directoryIndex": "/",
  "cleanUrls": false
})

workbox.clientsClaim()
workbox.skipWaiting()

workbox.routing.registerRoute(new RegExp('/_nuxt/.*'), workbox.strategies.cacheFirst({}), 'GET')

workbox.routing.registerRoute(new RegExp('/.*'), workbox.strategies.networkFirst({}), 'GET')
