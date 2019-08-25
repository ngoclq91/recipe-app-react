const path = require('path');

module.exports = {
    mode : 'development',
    optimization: {
        minimize: true
    },
    entry : {
        bundle : './src/index.js'
    },
    output: {
        filename : 'bundle.js',
        path : path.join(__dirname, 'dist')
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
    }
};
