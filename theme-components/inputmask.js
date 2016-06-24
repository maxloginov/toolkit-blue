// inputmask on input fields - works, fully functional
require('./jquery.js');
require('jquery.browser');                                                      // implements jQuery.browser method and others (generalization of detect.js) USED IN BOOTSTRAP-INPUTMASK
require('../src/vendor/bootstrap-inputmask.min.js');
process.env.NODE_ENV !== 'production' && console.log('- inputmask loaded');
