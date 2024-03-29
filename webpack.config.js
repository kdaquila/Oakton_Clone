const path = require('path');
const {CleanWebpackPlugin} = require('clean-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    mode: 'development',
    entry: {
        app: './src/index.js',
        react: 'react-hot-loader/patch',
    },
    output: {
        filename: '[name].bundle.js',
        path: path.resolve(__dirname, 'dist'),
    },
    module: {
        rules: [
            // css
            {
                test: /\.css$/,
                use: [
                    'style-loader',
                    {loader: 'css-loader', options: {modules: {localIndentName: '[path][name]__[local]--[hash:base64:5]'}}}
                ]
            },
            // scss
            {
                test: /\.s[ac]ss$/i,
                use: [
                    'style-loader',
                    {
                        loader: 'css-loader',
                        options: {modules: {localIdentName: '[local]--[hash:base64:5]'}},
                    },
                    'sass-loader',
                ]
            },
            // images
            {
                test: /\.(png|svg|jpg|gif)$/,
                use: ['file-loader']
            },
            // babel
            {
                test: /\.(js|jsx)$/,
                use: 'babel-loader',
                exclude: /node_modules/
            }

        ]
    },
    plugins: [
        new CleanWebpackPlugin(),
        new HtmlWebpackPlugin({
            title: "Oakton",
            template: "./src/index.html",
        })
    ],
    resolve: {
        extensions: ['.js', '.jsx'],
        alias: {
            'react-dom': '@hot-loader/react-dom'
        }
    },
    devtool: 'inline-source-map',
    devServer: {
        contentBase: './dist',
    }
};