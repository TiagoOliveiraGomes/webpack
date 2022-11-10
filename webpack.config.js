const webpack = require('webpack')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')

module.exports = {
    mode: 'production',
    entry: './src/main',
    output: {
        filename: 'main.js',
        path: __dirname + '/public'
    },
    plugins: [
        new MiniCssExtractPlugin({
            filename: "style.css"
        })
    ],
    module: {
        rules: [{
            test: /\.css$/,
            use: [
                MiniCssExtractPlugin.loader,
                // 'style-loader',
                'css-loader',
            ]
        }]
    }
}