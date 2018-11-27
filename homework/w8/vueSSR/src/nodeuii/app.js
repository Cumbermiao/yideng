const Koa = require("koa");
const { Lifetime, createContainer } = require("awilix");
const { loadControllers, scopePerRequest } = require("awilix-koa");

const app = new Koa();
const container = createContainer();

container.loadModules([__dirname + "/service/*.js"], {
  formatName: "camelCase",
  resolverOptions: {
    lifetime: Lifetime.SCOPED
  }
});
app.use(scopePerRequest(container));

app.use(loadControllers("./routes/*.js", { cwd: __dirname }));

app.listen(3000,()=>{
  console.log("at port 3000")
});
