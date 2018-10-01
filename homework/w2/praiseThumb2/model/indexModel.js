const rp = require('request-promise')
var options = {
    uri: 'http://localhost/praise/praise2.php',
    json: true // Automatically parses the JSON string in the response
};

class IndexModel {
    update(){
        return new Promise((resolve,reject)=>{
            rp(options).then((res)=>{
                console.log(res)
                resolve(res)
            }).catch((err)=>{
                reject(err)
            })
        })
    }
}

module.exports = IndexModel