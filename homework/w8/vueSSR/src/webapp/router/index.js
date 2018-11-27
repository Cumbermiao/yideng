import Router from 'vue-router';
import App from '../App.vue'
import Test from '../pages/Test/Test.vue'

const router = new Router({
  routes:[
    {path:'/',component:App},
    {path:'/test',component:Test}
  ]
});

export default router;