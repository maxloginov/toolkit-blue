// Chartist - works with minor issues
global.Chartist = require('chartist');
require('chartist/dist/chartist.css');
require('../vendor/chartist-plugin-tooltip.min.js'); // глючит, если на странице с графиками использовать зум
process.env.NODE_ENV !== 'production' && console.log('- chartist loaded');
