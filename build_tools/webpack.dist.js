const Merge = require('webpack-merge');
const WebpackBase = require('./webpack.base.js');
const Constants = require('./constants/constants');
const ExtractTextPlugin = require("extract-text-webpack-plugin");
const CleanWebpackPlugin = require('clean-webpack-plugin');
const UglifyJSPlugin = require('uglifyjs-webpack-plugin');

const extractSass = new ExtractTextPlugin({
    filename: Constants.DIST_CSS_OUTPUT,
    allChunks: true
});
const extractCSS = new ExtractTextPlugin({
    filename: Constants.DIST_CSS_OUTPUT,
    allChunks: true
});
const cssOptions = { minimize: true, sourceMap: true };

module.exports = Merge(WebpackBase, {

    module: {

        rules: [

            {
                test: /\.css$/,
                use: extractCSS.extract(
                    {
                        fallback: 'style-loader',
                        use: { loader: 'css-loader', options: cssOptions }
                    }
                )
            },
            {
                test: /\.scss$/,
                use: extractCSS.extract(
                    {
                        fallback: 'style-loader',
                        use: [
                            { loader: 'css-loader', options: cssOptions },
                            { loader: 'sass-loader', options: cssOptions }
                        ]
                    }
                )
            }

        ]

    },
    plugins: [
        new ExtractTextPlugin({
            filename: Constants.DIST_CSS_OUTPUT,
            allChunks: true
        }),
        extractSass,
        extractCSS,
        new UglifyJSPlugin()
    ]

});



