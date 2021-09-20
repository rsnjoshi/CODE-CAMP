const path = require('path')
const webpack = require('webpack')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const exclude = /node_modules/

const CSS_FOLDER = path.join(__dirname, '/src/assets/css')
const CSS_FILENAME = 'styles'

module.exports = {
    entry: {
        main: [
            './src/js/app.js',
            path.join(CSS_FOLDER, 'styles.scss'),
        ]
    },
    output:{
        path: path.resolve(__dirname, 'dist'),
        filename: 'bundle.js'
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                use: [
                    {
                        loader: 'babel-loader',
                        options: {
                            presets: ['@babel/preset-env'],
                            compact: true,
                        }
                    }
                ],
                exclude,
            },
            {
                test: /\.pug$/,
                loader: 'pug-loader',
                exclude
            },
            {
                test: /\.scss$/,
                use: [
                    {
                        loader: MiniCssExtractPlugin.loader
                    },
                    {
                        loader: 'css-loader',
                        options: {
                            importLoaders: 2,
                            url: false,
                        }
                    },
                    'postcss-loader',
                    'sass-loader',
                ]
            },

        ]
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: 'src/index.html'
        }),
        new MiniCssExtractPlugin({
            filename: `${CSS_FILENAME}.css`,
            chunkFilename: `${CSS_FILENAME}.css`,
        }),
        new webpack.ProvidePlugin({
            $: 'jquery',
            jQuery: 'jquery',
            _: 'lodash',
        })
    ],
}