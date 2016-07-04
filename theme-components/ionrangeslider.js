// inputmask on input fields - works, fully functional
require('./jquery.js');
require('ion-rangeslider');
require('ion-rangeslider/css/ion.rangeSlider.css');
!function($) {
    "use strict";
    $.fn.slider && $('[data-plugin="range-slider"]').slider({});
}(window.jQuery);
process.env.NODE_ENV !== 'production' && console.log('- ionrangeslider loaded');
