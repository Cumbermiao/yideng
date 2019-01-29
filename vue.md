## vue 双向绑定
### 监听器 Observer：使用defineProperty监听所有属性的变化
### 订阅者 Watcher：接收属性变化并执行相关函数
### 解析器 Compile：解析器，将数据更新到视图上

#### 订阅器 Dep：收集订阅者
- 在get里面判断该属性是否需要订阅，如果要则使用 Dep.addSub 添加订阅者
```
function Dep(){
    this.subs=[]//存放订阅者
}
Dep.prototype={
    addSub:function(watcher){
        this.subs.push(watcher)
    },
    notify:function(){
        this.subs.forEach((watcher)=>{
            watcher.update()
        })
    }
}
```
#### 订阅者
```
function Watcher(vm,exp,cb){
    this.cb=cb
    this.vm=vm
    this.exp = exp
    this.value = this.get()
}
Watcher.prototype = {
    update:function(){
        this.run()
    },
    run:function(){
        var value = this.vm.data[this.exp]
        var oldVal = this.value
        this.cb.call(this.vm,value,oldVal)
    },
    get:function(){
        Dep.target = this;
        var value = this.vm.data[this.exp]
        Dep.target = null
        return value
    }
}
```
## SSR
### 思路
- 主要思路就是上面的例子，更加全面一点就需要添加 router 和 store。
- router 也是需要通过工厂函数进行多次实例化，获取当前请求的 url ，客户端加载完组件之后将 vue 实例经过 createRenderer 处理后返回给后台。
- app.js 导出一个 返回 app,router,store 工厂函数。用于注入给 client 和 server。
- server 导出一个函数，接收参数 ctx， 函数获取 ctx 之后，往 vue 实例的 router push 当前的 url，router.onReady 里找到该路由需要的 component ，component 内容如果需要使用 dispatch 触发 action 来请求 http，要写在 component 的 asyncData 里面

### 简单实例
- 使用 vue-server-renderer 的 createRenderer() 方法渲染 vue 实例为 html。
- 后台获取 渲染后的 html 进行拼接返回响应。
```js
const koa = require("koa");
const Router = require("koa-router");
const Vue = require('vue')
const renderer = require("vue-server-renderer").createRenderer();
const app = new koa();
let router = new Router();
router.get("*", (ctx, next) => {
  console.log('get')
  const app = new Vue({
    data: {
      url: ctx.url
    },
    template: `<div>访问的 URL 是： {{ url }}</div>`
  });

  renderer.renderToString(app, (err, html) => {
    if (err) {
      ctx.body=err
      return;
    }
    ctx.body = (`
      <!DOCTYPE html>
      <html lang="en">
        <head><title>Hello</title></head>
        <body>${html}</body>
      </html>
    `);
  });
});

app.use(router.routes()).use(router.allowedMethods());
app.listen(3000,()=>{
  console.log("listening at 3000")
})
```

