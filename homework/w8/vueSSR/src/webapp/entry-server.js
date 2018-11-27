import  createApp from "./app";

export default function(context){
  console.log('createApp',createApp)
  return new Promise((resolve, reject) => {
    const { app, router } = createApp();
    const url = context.url;
    router.push(url);
    router.onReady(() => {
      const matchedComponents = router.getMatchedComponents();
      if(!matchedComponents||!matchedComponents.length){
        return reject({code:404})
      }
      resolve(app);
    });
  });
};
