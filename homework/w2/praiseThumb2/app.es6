import koa from 'koa';
import router from 'koa-simple-router'
const serve = require('koa-static');
const render = require('koa-swig')
const co = require('co')
const controller = require('./controller/index')
const config = require('./config/config')

const app = new koa();
app.context.render = co.wrap(render({
    root: config.viewDir,
    autoescape: true,
    cache: 'memory', // disable, set to false
    ext: 'html',
}))
controller.init(app,router)
app.use(serve(config.staticDir))

app.listen(3001, () => {
    console.log('listen 3001')
})