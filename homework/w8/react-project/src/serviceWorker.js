if("ServiceWorker" in navigator){
  ServiceWorker.register("/sw.js",{scope:"/"}).then((registeration)=>{});
}