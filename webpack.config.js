/**
* Autor: Andre Sieverding
* Copyright © 2019
*/

const path = require('path')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')

// Get node environment
const { NODE_ENV } = process.env
const isDev = NODE_ENV === 'development'
const env = isDev ? 'development' : 'production'

// Define webpack config
module.exports = {
    mode: env,
    entry: {
        app: ['./components/octicon/index.marko']
    },
    output: {
        filename: '[name].js',
        path: path.resolve(__dirname, 'dist')
    },
    resolve: {
        extensions: ['.marko']
    },
    module: {
        rules: [
            {
                test: /\.marko?$/,
                loader: '@marko/webpack/loader'
            },
            {
                test: /\.(sass|scss|css)$/,
                use: [
                    MiniCssExtractPlugin.loader,
                    'css-loader',
                    'sass-loader'
                ]
            },
            {
                test: /\.svg/,
                loader: 'svg-url-loader'
            }
        ]
    },
    plugins: [
        new MiniCssExtractPlugin({
            filename: '[name].css'
        })
    ]
}
