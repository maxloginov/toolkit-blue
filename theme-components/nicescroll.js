// jQuery plugin for nice scrollbars with a very similar ios/mobile style.
// It supports DIVs, IFrames, textarea, and document page (body) scrollbars
// Activates with CSS class 'nicescroll'
require('./jquery.js');
require('../vendor/jquery.nicescroll.js');
!function($){
    "use strict";
    //You can change the color of scroll bar here
    $.fn.niceScroll &&  $(".nicescroll").niceScroll({ cursorcolor: '#98a6ad',cursorwidth:'6px', cursorborderradius: '5px'});
}(window.jQuery);
process.env.NODE_ENV !== 'production' && console.log('- nicescroll loaded');
