import Vue from "vue";
import App from "./App.vue";
import createRouter from "./router";
var router = createRouter();
var app = new Vue({
  el: "#app",
  router,
  render: h => h(App)
});
console.log('router',router)
export { app, router };
