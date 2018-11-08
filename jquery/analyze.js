(function (window, undefined) {
    var document = window.document,
        navigator = window.navigator,
        location = window.location;

    var jQuery = (function () {
        var jQuery = function (selector, context) {
                // The jQuery object is actually just the init constructor 'enhanced'
                return new jQuery.fn.init(selector, context, rootjQuery);
            },
            // Map over jQuery/$ in case of overwrite
            _jQuery = window.jQuery,
            _$ = window.$,
            // The deferred used on DOM ready
            readyList,
            // The ready event handler
            DOMContentLoaded;

        // jQuery.fn = jQuery.prototype = {
        //     constructor:jQuery,
        //     ...methods
        // }
        // jQuery.fn.init.prototype = jQuery.fn
    })()

})(window)