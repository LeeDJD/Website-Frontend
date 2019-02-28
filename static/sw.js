importScripts('/_nuxt/workbox.4c4f5ca6.js')

workbox.precaching.precacheAndRoute([
  {
    "url": "/_nuxt/587f2b5e3e46a6f2096b.js",
    "revision": "b82512809a66a5cde9d7707466c9e28d"
  },
  {
    "url": "/_nuxt/705b27026cda6253aa5f.js",
    "revision": "43d4e1f33fc12db77b8bc4770df4b95e"
  },
  {
    "url": "/_nuxt/b31c4292755deb93ac5d.js",
    "revision": "4d26e42074a88827accb223199ee9f28"
  },
  {
    "url": "/_nuxt/f3b081083683f6f15526.js",
    "revision": "e3d7a7587792f12961862a9c32338e24"
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
