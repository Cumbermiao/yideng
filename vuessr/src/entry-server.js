import { app, router }  from  "./main";
export default context => {
  return new Promise((resolve, reject) => {
    let url = context.url
    router.push(context.url)
    router.onReady(() => {
      const matchedComponents = router.getMatchedComponents()
      if (!matchedComponents.length) {
        reject({ code: 404 })
      }
      // Promise.all(matchedComponents.map(component => {
      //   return component.preFetch
      // })).then(() => {
        resolve(app)
      // }).catch(reject)
    })
  })
}

// export default context => {
//   return new Promise((resolve, reject) => {
//     if (!context) {
//       console.log("no context");
//       return;
//     }
//     // console.log('create',typeof createApp,createApp)
//     // const { app, router } = createApp();
//     const url = context.url;
//     console.log("url", context);
//     router.push(context.url);
//     rrouter.onReady(() => {
//       const matchedComponents = router.getMatchedComponents();
//       // no matched routes
//       if (!matchedComponents.length) {
//         reject({ code: 404 });
//       }

//       Promise.all(
//         matchedComponents.map(component => {
//           return component.preFetch;
//         })
//       )
//         .then(() => {
//           console.log(`data pre-fetch: ${Date.now() - s}ms`);
//           resolve(app);
//         })
//         .catch(reject);
//     });
//   }).catch(err=>{
//     console.log('err',err)
//   })
// };
