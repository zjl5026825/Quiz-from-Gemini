const CACHE_NAME = 'quiz-v1';
const ASSETS = [
  './index.html',
  './question_data.js',
  './manifest.json'
];

// 安装时缓存资源
self.addEventListener('install', (e) => {
  e.waitUntil(
    caches.open(CACHE_NAME).then(cache => cache.addAll(ASSETS))
  );
});

// 拦截请求，优先使用缓存
self.addEventListener('fetch', (e) => {
  e.respondWith(
    caches.match(e.request).then(res => res || fetch(e.request))
  );
});