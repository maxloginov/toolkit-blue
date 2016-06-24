// fixedheader plugin for datatables for bootstrap - works, fully functional
require('./jquery.js');
require('./datatables.js');
require('datatables.net-fixedheader');
require('datatables.net-fixedheader-bs/css/fixedHeader.bootstrap.css');
process.env.NODE_ENV !== 'production' && console.log('- datatables-fixedheader loaded');
