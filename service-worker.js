"use strict";var precacheConfig=[["/index.html","53cf11d044c055a164be86a8090e5239"],["/static/css/main.65027555.css","41e5e45b9b5d9ecaa09b72c11eed3386"],["/static/js/main.d1fd2288.js","c5057f41bc5721efb649c656b316a5ea"],["/static/media/Union-Regular.130e9cd6.woff","130e9cd60549f14af7fd7c2940b9d327"],["/static/media/Union-Regular.62c5bdcd.woff2","62c5bdcd662af869ed8590760b961692"],["/static/media/ads.47d71e32.jpg","47d71e3269b79bd55e4bded9b075a89d"],["/static/media/custom-dashboard.79841a42.jpg","79841a42f97dcefec269c5cd07e119fe"],["/static/media/dashboard.743bd0c3.jpg","743bd0c3c03857f0717c8be3cbf1b70b"],["/static/media/gamification.1198bdfc.jpg","1198bdfc4c1ebe1744565b0d2e581080"],["/static/media/header-3.45d15468.jpg","45d154683701558b05f63e6bd83681b3"],["/static/media/levels.f137ce80.jpg","f137ce807cfb09d44e6905b227b2afc0"],["/static/media/mobile.82d2ccc1.jpg","82d2ccc1bf451fe60ebb80377a059b5f"],["/static/media/teams-1.1090e9fc.jpg","1090e9fc8607666dcba702c34fc04a87"],["/static/media/teams-2.b57544fc.jpg","b57544fca88fb9741cab92e425236b0d"],["/static/media/ui-kit.8cd4248b.jpg","8cd4248bfcdcbd8fba805ac7a2ba0e4e"],["/static/media/video-1.7e0c30b1.mp4","7e0c30b1cefb9b9589a71ec26fec1323"]],cacheName="sw-precache-v3-sw-precache-webpack-plugin-"+(self.registration?self.registration.scope:""),ignoreUrlParametersMatching=[/^utm_/],addDirectoryIndex=function(e,t){var a=new URL(e);return"/"===a.pathname.slice(-1)&&(a.pathname+=t),a.toString()},cleanResponse=function(t){return t.redirected?("body"in t?Promise.resolve(t.body):t.blob()).then(function(e){return new Response(e,{headers:t.headers,status:t.status,statusText:t.statusText})}):Promise.resolve(t)},createCacheKey=function(e,t,a,n){var c=new URL(e);return n&&c.pathname.match(n)||(c.search+=(c.search?"&":"")+encodeURIComponent(t)+"="+encodeURIComponent(a)),c.toString()},isPathWhitelisted=function(e,t){if(0===e.length)return!0;var a=new URL(t).pathname;return e.some(function(e){return a.match(e)})},stripIgnoredUrlParameters=function(e,a){var t=new URL(e);return t.hash="",t.search=t.search.slice(1).split("&").map(function(e){return e.split("=")}).filter(function(t){return a.every(function(e){return!e.test(t[0])})}).map(function(e){return e.join("=")}).join("&"),t.toString()},hashParamName="_sw-precache",urlsToCacheKeys=new Map(precacheConfig.map(function(e){var t=e[0],a=e[1],n=new URL(t,self.location),c=createCacheKey(n,hashParamName,a,/\.\w{8}\./);return[n.toString(),c]}));function setOfCachedUrls(e){return e.keys().then(function(e){return e.map(function(e){return e.url})}).then(function(e){return new Set(e)})}self.addEventListener("install",function(e){e.waitUntil(caches.open(cacheName).then(function(n){return setOfCachedUrls(n).then(function(a){return Promise.all(Array.from(urlsToCacheKeys.values()).map(function(t){if(!a.has(t)){var e=new Request(t,{credentials:"same-origin"});return fetch(e).then(function(e){if(!e.ok)throw new Error("Request for "+t+" returned a response with status "+e.status);return cleanResponse(e).then(function(e){return n.put(t,e)})})}}))})}).then(function(){return self.skipWaiting()}))}),self.addEventListener("activate",function(e){var a=new Set(urlsToCacheKeys.values());e.waitUntil(caches.open(cacheName).then(function(t){return t.keys().then(function(e){return Promise.all(e.map(function(e){if(!a.has(e.url))return t.delete(e)}))})}).then(function(){return self.clients.claim()}))}),self.addEventListener("fetch",function(t){if("GET"===t.request.method){var e,a=stripIgnoredUrlParameters(t.request.url,ignoreUrlParametersMatching),n="index.html";(e=urlsToCacheKeys.has(a))||(a=addDirectoryIndex(a,n),e=urlsToCacheKeys.has(a));var c="/index.html";!e&&"navigate"===t.request.mode&&isPathWhitelisted(["^(?!\\/__).*"],t.request.url)&&(a=new URL(c,self.location).toString(),e=urlsToCacheKeys.has(a)),e&&t.respondWith(caches.open(cacheName).then(function(e){return e.match(urlsToCacheKeys.get(a)).then(function(e){if(e)return e;throw Error("The cached response that was expected is missing.")})}).catch(function(e){return console.warn('Couldn\'t serve response for "%s" from cache: %O',t.request.url,e),fetch(t.request)}))}});