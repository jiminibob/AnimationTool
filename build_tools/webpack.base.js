const Webpack = require('webpack');
const Constants = require('./constants/constants');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {

    entry: {
        app: Constants.ENTRY_FILE,
    },
    output: {

        filename: Constants.DIST_JS_FILENAME,
        path: Constants.DIST_DIR

    },
    module: {
        rules: [

            { test: /\.css$/, use: ['style-loader', 'css-loader'] },
            { test: /\.scss$/, use: [{ loader: "style-loader" }, { loader: "css-loader" }, { loader: "sass-loader" }] },
            { test: /\.(png|svg|jpg|gif)$/, use: ['file-loader'] },
            { test: /\.(woff|woff2|eot|ttf|otf)$/, use: ['file-loader'] },
            {
                test: /\.js$/,
                exclude: [/node_modules/, /libs/],
                enforce: 'pre',
                use: {
                    loader: 'eslint-loader',
                    options:
                        {
                            cache: false,
                            quiet: false,
                            emitError: true,
                            emitWarning: true
                        }
                }
            },
            {

                test: /\.js$/,
                exclude: /(node_modules|bower_components)/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: ['react', 'env'],
                        plugins: ['transform-object-rest-spread']
                    }
                }

            }

        ]
    },

    resolve: {
        extensions: ['.js', '.jsx', '.json', '.css', '.scss', '.vue'],
        modules: [
            Constants.SRC_DIR + '/js',
            'libs',
            'node_modules'
        ],
        alias: {}
    },
    plugins: [
        new HtmlWebpackPlugin({
            title: 'index',
            template: Constants.TEMPLATES_DIR + '/index.ejs',
        })
    ]
};