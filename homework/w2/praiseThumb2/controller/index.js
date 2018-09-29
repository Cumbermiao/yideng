const methods = require('./methods')
console.log(methods)
const controller = {
    init(app,router){
        app.use(router(_=>{
            _.get('/index/index',methods.index())
        }))
    }
}
module.exports= controller 