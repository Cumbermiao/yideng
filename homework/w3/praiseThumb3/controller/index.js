const methods = require('./methods')

const controller = {
    init(app,router){
        app.use(router(_=>{
            _.get('/index/index',methods.index())
            _.get('/index/update',methods.update())
        }))
    }
}
module.exports= controller 