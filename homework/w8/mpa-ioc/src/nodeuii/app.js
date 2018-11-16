const koa = require('koa')
const serve = require('koa-static')
const render = require('koa-swig')
// const router = require('koa-simple-router')
const { asClass, createContainer } = require('awilix')
const { loadControllers, scopePerRequest }  = require('awilix-koa')
const co = require('co')
const config = require('./config')
const routes = require('./router')

const app = new koa()
const container = createContainer();
app.use(scopePerRequest(container))
app.use(loadControllers('router/index2.js'))
// console.log('laoding controller')
app.context.render = co.wrap(render({
    root: config.viewDir,
    autoescape: true,
    cache: 'memory', // disable, set to false
    ext: 'html',
    writeBody: false
}))
if(false){
    console.log(1111)
}
app.use(serve(config.staticDir))
// routes.init(app,router)
app.listen(config.port,()=>{
    console.log(`listening at ${config.port}!!!!!!!`)
})