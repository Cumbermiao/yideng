const indexModel = require('../model/indexModel')
const methods = {
    index() {
        return async (ctx, next) => {
            ctx.body = await ctx.render('index.html', {
                title: '大拇指点赞'
            })
        }
    },
    update() {
        return async (ctx, next) => {
            const model = new indexModel()
            const res = await model.update()
            ctx.body = res;
        }

    }
}
module.exports = methods