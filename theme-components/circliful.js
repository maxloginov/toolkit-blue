// circliful - works, fully functional
require('./jquery.js');
require('../vendor/jquery.circliful.js');
require('../vendor/jquery.circliful.css');
!function($){
    "use strict";
    $('[data-plugin="circliful"]').each(function(idx, obj) {
       $(this).circliful();
    });
}(window.jQuery);
process.env.NODE_ENV !== 'production' && console.log('- circliful loaded');
