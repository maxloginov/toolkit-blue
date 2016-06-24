// daterangepicker - works, fully functional
global.moment = require('moment'); // date parsing and manipulation library required in daterangepicker
require('bootstrap-daterangepicker');
require('bootstrap-daterangepicker/daterangepicker.css');
process.env.NODE_ENV !== 'production' && console.log('- daterangepicker loaded');
