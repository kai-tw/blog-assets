const path = require("path");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const CopyWebpackPlugin = require('copy-webpack-plugin');

module.exports = {
    mode: "production",
    entry: {
        "main": path.resolve(__dirname, "./src/index.js"),
    },
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
        new MiniCssExtractPlugin(),
        new CopyWebpackPlugin({
            patterns: [
                { from: './src/img/favicon_io', to: './favicon_io' },
                { from: './src/img/icon', to: './img/icon' }
            ]
        })
    ],
};