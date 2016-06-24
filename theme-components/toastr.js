// toastr - works, fully functional
require('./jquery.js');
global.toastr = require('toastr');
require('toastr/toastr.less');
process.env.NODE_ENV !== 'production' && console.log('- toastr loaded');
