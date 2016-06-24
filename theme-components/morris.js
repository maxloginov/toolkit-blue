// Morris charts - works, fully functional
global.Raphael = require('raphael');
require('morris.js/morris.js');
require('morris.js/less/morris.core.less');
process.env.NODE_ENV !== 'production' && console.log('- morris loaded');
