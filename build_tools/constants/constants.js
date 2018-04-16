const Path 		= require('path');
const Constants = {};

Constants.ROOT_DIR           = Path.resolve( __dirname, '../../' );
Constants.SRC_DIR            = Path.resolve(  Constants.ROOT_DIR, 'src/' );
Constants.DIST_DIR           = Path.resolve(  Constants.ROOT_DIR, 'dist/' );
Constants.TEMPLATES_DIR      = Path.resolve(  Constants.SRC_DIR, 'templates/' );
Constants.ENTRY_FILE         = Path.resolve( Constants.SRC_DIR, 'index.js' );
Constants.DIST_JS_FILENAME   = 'js/index.min.js';
Constants.DIST_CSS_OUTPUT    = 'css/index.min.css';
Constants.DEV_TOOL           = 'inline-source-map';
Constants.DEV_WATCH          = true;
Constants.DEV_OPEN           = true;
Constants.DEV_HOT            = true;


module.exports = Constants;

