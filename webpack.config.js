const path = require('path');
const HTMLWebpackPlugin = require('html-webpack-plugin');

/** các thư viện dependencies sẽ được output ra file vendor */
const VENDOR_LIBS = ['react', 'react-dom'];

module.exports = {
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
    plugins: [
        new HTMLWebpackPlugin({
            template: "src/index.html"
        })
    ],
    stats: { children: false },
    optimization: {
        splitChunks: {
            name: 'vendor',
            chunks: "initial",
        }
    },
};
