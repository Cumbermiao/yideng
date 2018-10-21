import {
    sync
} from "./components/sync/index.js";

import(/* webpackChunkName: "async-banner" */"./components/banner/index.js").then(_=>{
    _.default.init();
});
sync();

// import Vue from 'vue'
// import App from './App'
// import router from './router'

// Vue.config.productionTip = false

// /* eslint-disable no-new */
// new Vue({
//   el: '#app',
//   router,
//   components: { App },
//   template: '<App/>'
// })