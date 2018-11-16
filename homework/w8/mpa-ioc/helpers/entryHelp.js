

function entryHelp(files){
    let regx = /([\w]+-[\w]+)(\.entry\.js)$/,entry={},arr=[];
    files.forEach((file)=>{
        if(regx.test(file)){
            let entryKey = RegExp.$1
            console.log("entryKey",entryKey)
            let [dir,name] = entryKey.split('-')
            entry[entryKey]=`./${file}`
            arr.push({
                filename:`../views/${dir}/${name}.html`,
                template:`./src/webapp/views/${dir}/${name}.html`,
                inject:false,
                chunks: ["runtime", "common", entryKey]
            })
        }
    })
    return {
        entry,arr
    }
}
module.exports = entryHelp