'use strict';

// import 'systemjs'
// import $ from 'jquery'
SystemJS.import('./build/index.js').then(function (obj) {
    jquery.extend({
        press: new Press(dom, count),
        thumb: new Thumb(dom, count)
    });
    var div = document.getElementById('button');
    var press = new Thumb(div, 10);
    press.init();
});