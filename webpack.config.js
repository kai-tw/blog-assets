const path = require("path");
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const CopyWebpackPlugin = require('copy-webpack-plugin');

module.exports = {
    mode: "production",
    context: path.resolve(__dirname, 'src'),
    entry: './index.js',
    output: {
        filename: "[name].js",
        path: path.resolve(__dirname, "dist")
    },
    resolve: {
        alias: {
            "@node_modules": path.resolve(__dirname, "node_modules"),
            "@src": path.resolve(__dirname, "src"),
            "@img": path.resolve(__dirname, "src/img"),
        },
    },
    module: {
        rules: [
            {
                test: /\.(s[ac])|(c)ss$/i,
                use: [MiniCssExtractPlugin.loader, "css-loader", "sass-loader"]
            }
        ],
    },
    plugins: [
        new HtmlWebpackPlugin({
            filename: 'index.html',
            template: 'index.html',
            viewport: 'width=device-width, initial-scale=1.0',
            minify: true,
        }),
        new MiniCssExtractPlugin(),
        new CopyWebpackPlugin({
            patterns: [
                { from: 'img/favicon_io', to: './favicon_io' },
                { from: 'img/icon', to: './img/icon' }
            ]
        })
    ],
};