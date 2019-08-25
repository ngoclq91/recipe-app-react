const path = require('path');
const webpack = require('webpack');

/** các thư viện dependencies sẽ được output ra file vendor */
const VENDOR_LIBS = ['react', 'react-dom'];

module.exports = {
    mode : 'development',
    optimization: {
        minimize: true
    },
    entry : {
        bundle : './src/index.js',
        vendor: VENDOR_LIBS
    },
    output: {
        path : path.join(__dirname, 'dist'),
        filename : '[name].js',
        publicPath: "/public/"
    },
    module: {
        rules: [
            {
                use: 'babel-loader',
                test: /\.js$/,
                exclude: '/node_modules'
            },
            {
                use: ['css-loader', 'style-loader'],
                test: /\.css$/
            }
        ]
    },
    optimization: {
        splitChunks: {
            name: 'vendor',
            chunks: "initial",
        }
    },
};
