// TODO: Need to initialize requirements
require('./jquery.js');

!function($) {
    "use strict";

    //pie
    $('[data-plugin="peity-pie"]').each(function(idx, obj) {
        var colors = $(this).attr('data-colors')?$(this).attr('data-colors').split(","):[];
        var width = $(this).attr('data-width')?$(this).attr('data-width'):20; //default is 20
        var height = $(this).attr('data-height')?$(this).attr('data-height'):20; //default is 20
        $(this).peity("pie", {
            fill: colors,
            width: width,
            height: height
        });
    });

    //donut
     $('[data-plugin="peity-donut"]').each(function(idx, obj) {
        var colors = $(this).attr('data-colors')?$(this).attr('data-colors').split(","):[];
        var width = $(this).attr('data-width')?$(this).attr('data-width'):20; //default is 20
        var height = $(this).attr('data-height')?$(this).attr('data-height'):20; //default is 20
        $(this).peity("donut", {
            fill: colors,
            width: width,
            height: height
        });
    });
     $('[data-plugin="peity-donut-alt"]').each(function(idx, obj) {
        $(this).peity("donut");
    });

     // line
     $('[data-plugin="peity-line"]').each(function(idx, obj) {
        $(this).peity("line", $(this).data());
     });

     // bar
     $('[data-plugin="peity-bar"]').each(function(idx, obj) {
        var colors = $(this).attr('data-colors')?$(this).attr('data-colors').split(","):[];
        var width = $(this).attr('data-width')?$(this).attr('data-width'):20; //default is 20
        var height = $(this).attr('data-height')?$(this).attr('data-height'):20; //default is 20
        $(this).peity("bar", {
            fill: colors,
            width: width,
            height: height
        });
     });
}(window.jQuery);
process.env.NODE_ENV !== 'production' && console.log('- peity not implemented yet');
