// Flot charts - works, fully functional
require('./jquery.js');
require('script-loader');
global.FlotChart = require('flot-charts');
require('flot-charts/jquery.flot.time.js');
require('script!flot-charts/jquery.flot.resize.js');
require('flot-charts/jquery.flot.pie.js');
require('flot-charts/jquery.flot.selection.js');
require('flot-charts/jquery.flot.stack.js');
require('flot-charts/jquery.flot.crosshair.js');
require('../src/vendor/jquery.flot.tooltip.min.js');
process.env.NODE_ENV !== 'production' && console.log('- flotcharts loaded');
