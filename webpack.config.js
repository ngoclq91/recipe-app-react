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
        filename : '[name].[chunkhash].js',
        publicPath: "./",
    },
    devServer:{
        publicPath: "/", // バンドルされたファイルは、ブラウザのこのパスの下で利用可能になる。必ずdevServer.publicPathスラッシュで始まり、スラッシュで終わることを確認してください。
        host: '127.0.0.1',  // 使用するホストを指定。(localhost)
        port: 5000,
        open: true, // tự động mở ở browser khi run
        // mimeTypes: { 'text/html': ['phtml'] },
        disableHostCheck: true, // ホストチェックがバイパスされる。ホストをチェックしないアプリはDNS再バインド攻撃に対して脆弱であるため、推奨されない
        historyApiFallback: true,   // When using the HTML5 History API, the index.html page will likely have to be served in place of any 404 responses
        overlay: {
            warnings: true,
            errors: true
        },  // コンパイラーのエラーまたは警告がある場合、ブラウザーに全画面オーバーレイを表示
        stats: 'minimal',   // 表示するバンドル情報を正確に制御する
        inline: false,  // ライブリロードを処理するためにスクリプトがバンドルに挿入され、ビルドメッセージがブラウザコンソールに表示する。default = true : ko hiển thị
        compress: true, // 提供されているすべてのgzip圧縮を有効にする。
        contentBase: path.join(__dirname, '/')   // サーバーにコンテンツの提供元を伝える。devServer.publicPathバンドルの提供元を決定するために使用され、優先される。
        /*proxy: {  // 一部のURLのプロキシは、別のAPIバックエンド開発サーバーがあり、同じドメインでAPIリクエストを送信する場合に役立ちます。
            '/api': {
                target: 'https://other-server.example.com',
                secure: false
            }
        }*/
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
