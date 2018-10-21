import hello from './components/helloWorld'
import(/*webpackChunkName:"async"*/'./components/async').then((res)=>{
    console.log('res',res)
    res.default()
})
console.log(hello)