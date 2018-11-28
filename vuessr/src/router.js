import Router from 'vue-router'
import App from './App.vue'
import About from './about.vue'

export default function createRouter(){
  return new Router({
    routes:[
      {path:'/',component:App},
      {path:'/about',component:About},
    ]
  })
}