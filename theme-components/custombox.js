// custombox - works, fully functional
require('./jquery.js');
require('jquery.scrollto');                                                     // jQuery plugin - Lightweight, cross-browser and highly customizable animated scrolling with jQuery (используется в datatables.scroller.min.js, custombox, summernote, tinymce)
global.Custombox = require('custombox/src/js/custombox.js');
require('custombox/src/js/legacy.js');
require('custombox/src/css/custombox.css');
!function($) {
    "use strict";
    $('[data-plugin="custommodal"]').on('click', function(e) {
    	Custombox.open({
            target: $(this).attr("href"),
            effect: $(this).attr("data-animation"),
            overlaySpeed: $(this).attr("data-overlaySpeed"),
            overlayColor: $(this).attr("data-overlayColor")
        });
    	e.preventDefault();
    });
}(window.jQuery);
process.env.NODE_ENV !== 'production' && console.log('- custombox loaded');
