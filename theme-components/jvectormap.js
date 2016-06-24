// jvectormap - works, fully functional
require('./jquery.js');
require('jvectormap');
require('jvectormap/jquery-jvectormap.css');
require('../src/vendor/jquery-jvectormap-world-mill-en.js');
require('../src/vendor/jquery-jvectormap-us-aea-en.js');
require('../src/vendor/jquery-jvectormap-uk-mill-en.js');
require('../src/vendor/jquery-jvectormap-au-mill.js');
require('../src/vendor/jquery-jvectormap-us-il-chicago-mill-en.js');
require('../src/vendor/jquery-jvectormap-ca-lcc.js');
require('../src/vendor/jquery-jvectormap-de-mill.js');
require('../src/vendor/jquery-jvectormap-in-mill.js');
require('../src/vendor/jquery-jvectormap-asia-mill.js');
process.env.NODE_ENV !== 'production' && console.log('- jvectormap loaded');
