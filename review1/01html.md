## 同源策略
> 如果 协议、域名、端口不同，同源策略是不允许获取 Cookie、Storage、IndexedDB、DOM，也不可以 发送 ajax 请求。但是表单提交是不受影响的。

## 跨域
> 当协议、子域名、主域名、端口号中任意一个不相同时，都算作不同域。不同域之间相互请求资源，就算作“跨域”。
跨域并不是请求发不出去，请求能发出去，服务端能收到请求并正常返回结果，只是结果被==浏览器拦截了。==

## 跨域解决方法
### 1.jsonp
1. 在js中先定义一个函数 foo 
2. 使用 script 标签请求一个网址，并加上参数 callback=foo
3. 另一方接收到请求后，给foo加上参数并让其执行，如 foo({name:'tom'}) ,当前页面的的foo接收到参数并执行。
4. jsonp 只是 get 请求。

### 2.webSocket
1. webSocket 中的请求头可以设置 Origin 字段。
2. 服务器根据这个Origin字段，判断是否在白名单中，允许本次通信。

### 3. cors
> 整个CORS通信过程，都是浏览器自动完成，不需要用户参与。对于开发者来说，CORS通信与同源的AJAX通信没有差别，代码完全一样。只不过浏览器发现 ajax 请求跨域时，会自动添加一些附加的头信息，有时还会多出一次附加的请求。因此，实现CORS通信的关键是服务器。只要服务器实现了CORS接口，就可以跨源通信。
- CORS要求浏览器(>IE10)和服务器的同时支持，是跨域的根本解决方法，由浏览器自动完成。
- 只要在服务器中设置 Access-Control-Allow-Origin 允许跨域的地址，那么浏览器检测到响应头中的地址包含当前请求的地址，就不会拦截。
```
//允许任何网站跨域
Access-Control-Allow-Origin:*
//也可以设置跨域的方法
Access-Control-Allow-Methods:POST,GET
```

### 4. postMessage
>如果两个网页不同源，就无法拿到对方的DOM。典型的例子是iframe窗口和window.open方法打开的窗口，它们与父窗口无法通信。HTML5为了解决这个问题，引入了一个全新的API：跨文档通信 API（Cross-document messaging）。这个API为window对象新增了一个window.postMessage方法，允许跨窗口通信，不论这两个窗口是否同源。postMessage方法的第一个参数是具体的信息内容，第二个参数是接收消息的窗口的源（origin），即"协议 + 域名 + 端口"。也可以设为*，表示不限制域名，向所有窗口发送。
- 父窗口监听 message 事件，获取子窗口发送的数据,获取数据时有可能会有多个子窗口往父窗口发送数据，所以父窗口要做好判断。
- 子窗口使用 postMessage 往父窗口发送数据。
```js
// iframe的页面
window.addEventListener("message",function(e){
  //判断发送方的源
  if(e.origin !== 'http://www.baidu.com'){
    return
  }
  //接收到数据之后，给外层的window发送接收成功的消息
  e.source.postMessage('getMessage',e.origin)
})
```
```js
//外层window
window.onload = function(){
  var fra = window.iframes[0]
  var obj = {from:'localhost:8080',message:'send message'}
  fra.postMessage(JSON.stringfy(obj),'http://localhost:8081')

  window.addEventListener('message',e=>{
    console.log('81 receive message success')
  })
}
```

## cookie 共享
如果两个网页拥有相同的一级域名，如 www.baidu.com 、www.baike.baidu.com ，那么通过js 设置 document.domain=‘baidu.com’,那么两个网页就可以共享 Cookie。 另外，服务器也可以在 set-cookie 中设置 domain = .baidu.com ，来将cookie设置成一级域名共享。


## html语义化
- 在浏览器中 DOM 是比较珍贵的资源，如果html中的标签过多，浏览器在渲染的时候花费较长的时间，所以我们在平常可以多使用  before 和 after 伪类将一个元素拆成多个元素。

- html中 使用语义化标签有助于seo，网页结构的维护。
- 常见结构应为 header->nav 、main->h1/section/aside、footer
- 其他常见结构：ol/ul->li  、table->(caption)|(thead->tr->th)| (tbody->tr->td)。
- 其他语义化标签：p、strong、code、article。