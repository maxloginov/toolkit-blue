// jquery-knob - works, fully functional
require('./jquery.js');
require('jquery-knob');
!function($) {
    "use strict";
    $('[data-plugin="knob"]').each(function(idx, obj) {
       $(this).knob();
    });
}(window.jQuery);
process.env.NODE_ENV !== 'production' && console.log('- knob loaded');
