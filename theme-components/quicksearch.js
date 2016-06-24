// quicksearch
require('./jquery.js');
require('script-loader');
require('script!jquery.quicksearch/dist/jquery.quicksearch.js');   // jQuery plugin - For filtering large data sets with user input
process.env.NODE_ENV !== 'production' && console.log('- quicksearch loaded');
