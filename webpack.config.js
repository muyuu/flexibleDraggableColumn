const webpack = require('webpack');
const path = require('path');
const precss = require('precss');
const autoprefixer = require('autoprefixer');
const PostcssImport = require('postcss-import');

const src = path.resolve(__dirname, 'src');
const dist = path.resolve(__dirname, 'app');

const config = {

    // degub
    devtool: "source-map",

    // Configuration for dev server
    devServer: {
        contentBase: dist,
        port: 8080
    },

    // js files
    entry: `${src}/js/main.jsx`,
    output: {
        path: dist,
        filename: 'bundle.js'
    },

    resolve: {
        extensions: ['', '.js', '.jsx', '.css']
    },

    module: {
        rules: [
            {test: /\.(js|jsx)$/, use: 'babel-loader'}
        ],
        loaders: [
            {
                test: /.jsx?$/,
                loader: 'babel-loader',
                exclude: /node_modules/,
                query: {
                    presets: ['es2015', 'react']
                }
            },
            {
                test: /\.css$/,
                loaders: [
                    'style-loader',
                    'css-loader?importLoaders=1',
                    'postcss-loader'
                ]
            }
        ],
    },

    plugins: [
        new webpack.optimize.UglifyJsPlugin(),
    ],

    postcss: function(webpack) {
        return [
             PostcssImport({
                addDependencyTo: webpack
            }),
            autoprefixer,
            precss
        ];
    }
};

module.exports = config;
