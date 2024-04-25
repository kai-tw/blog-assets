const path = require("path");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

module.exports = {
    mode: "production",
    entry: "./src/index.js",
    output: {
        filename: "main.js",
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
    plugins: [new MiniCssExtractPlugin()],
};