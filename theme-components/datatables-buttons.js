// buttons plugin for datatables for bootstrap - works, fully functional
require('./jquery.js');
require('./datatables.js');
require('datatables.net-buttons');
require('datatables.net-buttons/js/buttons.html5.js');
require('datatables.net-buttons/js/buttons.print.js');
require('datatables.net-buttons-bs');
require('datatables.net-buttons-bs/css/buttons.bootstrap.css');
process.env.NODE_ENV !== 'production' && console.log('- datatables-buttons loaded');
