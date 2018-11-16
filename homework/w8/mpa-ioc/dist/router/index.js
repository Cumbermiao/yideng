module.exports = {
  init(app, router) {
    app.use(router(_ => {
      _.get('/', async ctx => {
        ctx.body = await ctx.render('index/index.html');
      });
    }));
  }

};