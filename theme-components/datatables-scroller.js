// scroller plugin for datatables for bootstrap - works, fully functional
require('./jquery.js');
require('./datatables.js');
require('jquery.scrollto');                                                     // jQuery plugin - Lightweight, cross-browser and highly customizable animated scrolling with jQuery (используется в datatables.scroller.min.js)
require('datatables.net-scroller');
require('datatables.net-scroller-bs/css/scroller.bootstrap.css');
process.env.NODE_ENV !== 'production' && console.log('- datatables-scroller loaded');
