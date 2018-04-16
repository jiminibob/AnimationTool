const Webpack = require('webpack');
const Merge = require('webpack-merge');
const WebpackBase = require('./webpack.base.js');
const Constants = require('./constants/constants');
const HotModuleReplacement = new Webpack.HotModuleReplacementPlugin();

module.exports = Merge(WebpackBase, {
    devtool: Constants.DEV_TOOL,
    watch: Constants.DEV_WATCH,
    devServer:
        {
            contentBase: Constants.DIST_DIR,
            open: Constants.DEV_OPEN,
            hot: Constants.DEV_HOT,
            overlay: {
                warnings: true,
                errors: true
            }
        },
    plugins: [
        new Webpack.HotModuleReplacementPlugin()
    ]
}); 