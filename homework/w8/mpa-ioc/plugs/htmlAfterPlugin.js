const name = 'htmlAfterPlugin';
function assetHelp(source){
    let js =[],css=[];
    let dir={
        js:file=>{js.push(`<script src="${file}"></script>`)},
        css:file=>{css.push(`<link rel="stylesheet" href="${file}">`)}
    }
    dir.js(source.js)
    dir.css(source.css)
    js = js.join("")
    css = css.join("")
    return {js,css}
}
function htmlAfterPlugin(){};
htmlAfterPlugin.prototype.apply = function(compiler){
    // console.log('compilation',compiler.hooks)
    compiler.hooks.compilation.tap(name,compilation=>{
        compilation.hooks.htmlWebpackPluginAfterHtmlProcessing.tap(name,(source)=>{
            let {js,css}=assetHelp(source.assets)
            console.log('js',js,css,source.html)
            let _html = source.html
            _html=_html.replace('<!-- injectjs -->',js)
            _html=_html.replace('<!-- injectcss -->',css)
            _html=_html.replace(/components:/g,'../')
            _html=_html.replace(/common:/g,'../')
            source.html = _html
            console.log("source",source.html)

        })
    })
}

module.exports = htmlAfterPlugin