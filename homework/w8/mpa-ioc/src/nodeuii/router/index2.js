const { route, GET, POST, before }= require('awilix-koa')

@route('/')
class IndexController{
    constructor(indexService){
        this.indexService = indexService
    }
    @GET()
    async IndexAction(ctx){
        ctx.body = ctx.render('/index/index.html')
    }
}

module.exports = IndexController