const {app,router } = require('./main')

router.onReady(()=>{
  app.$mount('#app')
})