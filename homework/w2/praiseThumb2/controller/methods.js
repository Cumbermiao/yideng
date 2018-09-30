const methods = {
    index(){
        return async (ctx,next)=>{
            ctx.body = await ctx.render('index.html',{
                title:'大拇指点赞'
            })
        }
    }
}
module.exports=methods