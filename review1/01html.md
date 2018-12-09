## 同源策略及规避
> 如果 协议、域名、端口不同，同源策略是不允许获取 Cookie、Storage、IndexedDB、DOM，也不可以 发送 ajax 请求。
规避同源策略：如果两个网页拥有相同的一级域名，如 www.baidu.com 、www.baike.baidu.com ，那么通过js 设置 document.domain=‘baidu.com’,那么两个网页就可以共享 Cookie。 另外，服务器也可以在 set-cookie 中设置 domain = .baidu.com ，来将cookie设置成一级域名共享。

受同源策略的影响，使用 iframe 和 window.open 打开的窗口 如果和 父窗口的网页不同源的话 ，两者之间时无法获取对方的DOM的，获取时都会报 跨域 的错误。目前可以通过片段标识符、window.name、	h5新增的window.postMessage（常用）。
此处主要介绍 postMessage，其他可以参考阮一峰的同源策略文章。
父窗口往子窗口发送消息  

 第一个参数是要传递的数据 ，第二个是接收窗口的地址：协议+域名+端口。
子窗口往父窗口发送消息，参数和上面类似。 


两者都可以通过 addEventListener('message',cb) 或者 onmessage 监听发送的事件。

Ajax 规避同源
ajax 只能给同源的网址发送请求。可以通过 jsonp、webSocket、CORS规避同源策略。

jsonp 
在js中先定义一个函数 foo 
使用 script 标签请求一个网址，并加上参数 callback=foo
另一方接收到请求后，给foo加上参数并让其执行，如 foo({name:'tom'}) ,当前页面的的foo接收到参数并执行。
jsonp 只是 get 请求。

webSocket
webSocket 中的请求头可以设置 Origin 字段。
服务器根据这个Origin字段，判断是否在白名单中，允许本次通信。

CORS
1.  CORS 可以发送任何类型的请求。IE版本不能低于10。
2. 详细使用参考 http://www.ruanyifeng.com/blog/2016/04/cors.html。

html语义化
在浏览器中 DOM 是比较珍贵的资源，如果html中的标签过多，浏览器在渲染的时候花费较长的时间，所以我们在平常可以多使用  before 和 after 伪类将一个元素拆成多个元素。
html中 使用语义化标签有助于seo，网页结构的维护。
常见结构应为 header->nav 、main->h1/section/aside、footer
其他常见结构：ol/ul->li  、table->(caption)|(thead->tr->th)| (tbody->tr->td)。
其他语义化标签：p、strong、code、article。