// responsive plugin for datatables for bootstrap - works, fully functional
require('./jquery.js');
require('./datatables.js');
require('datatables.net-responsive');
require('datatables.net-responsive-bs');
require('datatables.net-responsive-bs/css/responsive.bootstrap.css');
process.env.NODE_ENV !== 'production' && console.log('- datatables-responsive loaded');
