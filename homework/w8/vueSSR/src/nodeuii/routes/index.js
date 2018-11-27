import { route, GET, POST, before } from "awilix-koa";

@route("/")
@route("/index.html")
class IndexController {
  constructor({ indexService }) {
    this.indexService = indexService;
  }
  @GET()
  //  indexAction(ctx, next) {
  //   let result;
  //   console.log("indexService",this.indexService)
  //   // this.indexService().getData().then(res => {
  //   //   result = res;
  //   //   ctx.body = result;
  //   // });
  //   try{
  //     result =  this.indexService.say()
  //     console.log(result,this.indexService.say)
  //   }catch(err){
  //     console.log('err',err)
  //   }
  //   ctx.body = 'heeloo';
  // }
   async indexAction(ctx, next) {
    const result = await this.indexService.getData();
    // const result =  this.indexService.say()
    ctx.body = result;
  }
}
export default IndexController;
