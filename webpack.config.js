const path = require('path')
const HtmlWebpackPlugin = require("html-webpack-plugin")
const { template } = require('lodash')
const { run } = require('envinfo')
const { load } = require('mime')

module.exports = {
    entry: "./src/main.js",
    mode: "development",
    output:{
        filename: "index.js",
        path: path.resolve(__dirname,"dist"),
        clean: true,
    },
    plugins: [new HtmlWebpackPlugin({
        template: "./src/main.html",
    }
    )],
    module:{
        rules:[
            {
                test: /\.(ttf|svg)$/i,
                type: "asset/resource"
            },
            {
                test: /\.css$/i,
                use: ["style-loader","css-loader"],
            },
            {
                test: /\.html$/i,
                loader: "html-loader"
            }
        ],
    },
}