// import 'systemjs'
// import $ from 'jquery'
System.config({
    map: {
        jquery: '//code.jquery.com/jquery-2.1.4.min.js'
      }
})

SystemJS.import('./build/index.js').then((obj)=>{
    $.extend({
        press:new Press(dom,count),
        thumb:new Thumb(dom,count)
    })
    var div = document.getElementById('button')
    var press = new Thumb(div,10)
    press.init()

})