const koa = require("koa");
const Router = require("koa-router");
const Vue = require('vue')
const renderer = require("vue-server-renderer").createRenderer();
const app = new koa();
let router = new Router();
import createApp from './entry-server'
router.get("*", (ctx, next) => {
  // console.log(ctx.url)
  // const app = new Vue({
  //   data: {
  //     url: ctx.url
  //   },
  //   template: `<div>访问的 URL 是： {{ url }}</div>`
  // });

  // renderer.renderToString(app, (err, html) => {
  //   if (err) {
  //     ctx.body=err
  //     return;
  //   }
  //   ctx.body = (`
  //     <!DOCTYPE html>
  //     <html lang="en">
  //       <head><title>Hello</title></head>
  //       <body>${html}</body>
  //     </html>
  //   `);
  // });

  createApp(ctx).then((res)=>{
    let app = res;
    renderer.renderToString(app,(err,html)=>{
      if(err){
        ctx.body=err;
        return;
      }
      ctx.body = html;
    })
  }).catch((err)=>{
    console.log('err',err)
  })
});

app.use(router.routes()).use(router.allowedMethods());
app.listen(3000,()=>{
  console.log("listening at 3000")
})