// datatables for bootstrap - works, fully functional
require('./jquery.js');
require('datatables.net');
require('datatables.net-bs');
require('datatables.net-bs/css/dataTables.bootstrap.css');
process.env.NODE_ENV !== 'production' && console.log('- datatables loaded');

// Some possible js for PDF making
//<script src="assets/plugins/datatables/pdfmake.min.js"></script>
//<script src="assets/plugins/datatables/vfs_fonts.js"></script>

// Some possible js for reading and creating ZIP archives
//<script src="assets/plugins/datatables/jszip.min.js"></script>
