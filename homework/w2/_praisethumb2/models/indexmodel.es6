import rp from 'request-promise';
class indexModel{
    constructor(ctx){
        this.ctx=ctx;
    }
    updateNum(){
        const options = {
            uri: 'http://localhost/praise.php',
           method:'GET'
        }
        return new Promise((resolve,reject)=>{
          rp(options).then(function(result){
              const info=JSON.parse(result);
              if(info){
                  resolve({data:info.result});
              }else{
                  reject({});
              }
              console.log(info);
          })
        })
    }
}
export default indexModel