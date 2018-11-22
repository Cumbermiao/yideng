# serviceWorker

> 参考 https://github.com/asyalas/blog/blob/master/2018/blog/PWA%E4%BB%8E%E5%85%A5%E9%97%A8%E5%88%B0%E6%94%BE%E5%BC%83.md

## 浏览器支持

- ie 不支持
- edge 17 及以上
- chrome、ff、safari

## 前提条件

- 依赖 https 环境，调试时可以使用 localhost 和 127.0.0.1
- 缓存机制是依赖 Cache API 实现的
- 依赖 HTML5 fetch API
- 依赖 Promise

## API

### 注册

#### serviceWorker.register(file,{scope:'/a/b'})

- register 注册 serviceWorker，参数 1 是要缓存的文件，参数 2 的 scope 表示 serviceWorker 线程捕获 fetch 事件的路径，/a/b 表示只获取 /a/b 开头的 fetch。
- 可以在 chrome://inspect/#service-workers 或者 Application 中查看 service 注册是否成功。
- 注册失败原因： 不是 https 环境、 file 的路径不对、 file 在其他 origin 的源里面。
- 注意：要在 js 的主线程中注册。

```js
//存储 ServerWorkerRegisteration 对象；
var swRegisteration = null;
//判断浏览器是否支持
if ("serviceWorker" in navigator) {
  window.addEventListener("load", function() {
    navigator.serviceWorker
      .register("/index.js", { scope: "/a/b" })
      .then(function(registration) {
        swRegisteration = registration;
        // 注册成功
        console.log(
          "ServiceWorker registration successful with scope: ",
          registration.scope
        );
      })
      .catch(function(err) {
        // 注册失败:(
        console.log("ServiceWorker registration failed: ", err);
      });
  });
}
```

### 被注册文件监听 install 和 activate 事件

- serviceWorker 注册成功之后，浏览器会安装并且激活它，此时被注册的文件就能接收到 install 和 activate 事件。
- 如果 install 事件失败， activate 事件将不会执行。
- this 指向的是 serviceWorker 对象。

```js
this.addEventListener("install", function(e) {
  console.log("install 成功");
  // 如果监听到了 service worker 已经安装成功的话，就会调用 event.waitUntil 回调函数
  e.waitUntil(
    // 安装成功后操作 CacheStorage 缓存，使用之前需要先通过 caches.open() 打开对应缓存空间。
    caches.open("my-test-cache-v1").then(function(cache) {
      // 通过 cache 缓存对象的 addAll 方法添加 precache 缓存
      return cache.addAll([
        "/",
        "/index.html",
        "/main.css",
        "/main.js",
        "/image.jpg"
      ]);
    })
  );
});

this.addEventListener("activate", function(e) {
  console.log("activate 激活成功");
  //更新缓存资源操作
});
```

- 实现 serviceWorker 自动更新

### 监听 fetch push 事件

- fetch 事件：当缓存的文件中发起 http 请求时，serviceWorker 能够捕获到 fetch 事件，在 fetch 事件中我们可以判断 serviceWorker 中如果有对应的缓存直接返回 serviceWorker 的内容，如果没有再发起 http 请求，并更新缓存。
- push 事件：是当 serviceWorker 推送时触发的事件。

```js
// 监听 service worker 的 install 事件，初始缓存
this.addEventListener("install", function(event) {
  // 如果监听到了 service worker 已经安装成功的话，就会调用 event.waitUntil 回调函数
  event.waitUntil(
    // 安装成功后操作 CacheStorage 缓存，使用之前需要先通过 caches.open() 打开对应缓存空间。
    caches.open("my-test-cache-v1").then(function(cache) {
      // 通过 cache 缓存对象的 addAll 方法添加 precache 缓存
      return cache.addAll([
        "/",
        "/index.html",
        "/main.css",
        "/main.js",
        "/image.jpg"
      ]);
    })
  );
});
// 监听 service worker 的 fetch 事件,拦截fetch请求,缓存资源
this.addEventListener("fetch", function(event) {
  event.respondWith(
    caches.match(event.request).then(function(response) {
      // 来来来，代理可以搞一些代理的事情

      // 如果 Service Worker 有自己的返回，就直接返回，减少一次 http 请求
      if (response) {
        return response;
      }

      // 如果 service worker 没有返回，那就得直接请求真实远程服务
      var request = event.request.clone(); // 把原始请求拷过来
      return fetch(request).then(function(httpRes) {
        // http请求的返回已被抓到，可以处置了。

        // 请求失败了，直接返回失败的结果就好了。。
        if (!httpRes || httpRes.status !== 200) {
          return httpRes;
        }

        // 请求成功的话，将请求缓存起来。
        var responseClone = httpRes.clone();
        caches.open("my-test-cache-v1").then(function(cache) {
          cache.put(event.request, responseClone);
        });

        return httpRes;
      });
    })
  );
});
// 自动更新缓存
// 监听 service worker 的 install 事件,安装阶段跳过等待，直接进入 active
self.addEventListener("install", function(event) {
  event.waitUntil(self.skipWaiting());
});
// 监听 service worker 的 activate 事件,更新客户端,清理旧版本
self.addEventListener("activate", function(event) {
  event.waitUntil(
    Promise.all([
      // 更新客户端
      self.clients.claim(),

      // 清理旧版本
      caches.keys().then(function(cacheList) {
        return Promise.all(
          cacheList.map(function(cacheName) {
            if (cacheName !== "my-test-cache-v1") {
              return caches.delete(cacheName);
            }
          })
        );
      })
    ])
  );
});
```

## ServiceWorkerRegistration

### unregister

> 注销缓存的文件

```js
swRegisteration
  .unregister()
  .then(() => {
    console.log("unregister success");
  })
  .catch(err => {
    console.log("err", err);
  });
```

### update

> 更新缓存的文件

```js
navigator.serviceWorker
  .register("./worker.js", { scope: "serviceworker-simple" })
  .then(registration => {
    swRegistration = registration;
    swRegistration.update();
    console.log("register success");
    swRegistration.onupdatefound = () => {
      console.log("更新 fonund");
      const installingWorker = registration.installing;
      installingWorker.onstatechange = () => {
        if (installingWorker.state === "installed") {
          if (navigator.serviceWorker.controller) {
            console.log("New content is available; please refresh.");
          } else {
            console.log("Content is cached for offline use.");
          }
        }
      };
    };
  });
```
