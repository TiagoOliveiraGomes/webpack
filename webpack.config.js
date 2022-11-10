const webpack = require('webpack')

module.exports = {
    mode: 'production',
    entry: './src/main',
    output: {
        filename: 'main.js',
        path: __dirname + '/public'
    },
    module: {
        rules: [{
            test: /\.css$/,
            use: [
                'style-loader',
                'css-loader',
            ]
        }]
    }
}