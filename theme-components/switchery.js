// switchery (turns checkboxes into iOS-style switches) - works, fully functional
require('./jquery.js');
require('script-loader');
require('script!switchery-npm/index.js');
require('switchery-npm/index.css');
!function($){
    "use strict";
    if (typeof(Switchery)!='undefined') {
        $('[data-plugin="switchery"]').each(function (idx, obj) {
            new Switchery($(this)[0], $(this).data());
        });
    }
}(window.jQuery);
process.env.NODE_ENV !== 'production' && console.log('- switchery loaded');
