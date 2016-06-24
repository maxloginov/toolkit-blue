// multiselect - works, fully functional
require('./jquery.js');
require('multiselect');
require('multiselect/css/multi-select.css');
!function($) {
    "use strict";
    if (typeof($().multiSelect)!='undefined') {
        if($('[data-plugin="multiselect"]').length > 0)
            $('[data-plugin="multiselect"]').multiSelect($(this).data());
    }
}(window.jQuery);
process.env.NODE_ENV !== 'production' && console.log('- multiselect loaded');
