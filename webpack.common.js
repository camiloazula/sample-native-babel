var webpack = require("webpack");
var nsWebpack = require("nativescript-dev-webpack");
var sources = require("webpack-sources");
var path = require("path");
var CopyWebpackPlugin = require('copy-webpack-plugin');
var fs = require("fs");
var path = require("path");

module.exports = function(platform, destinationApp) {
    var entry = {};
    entry.bundle = "./" + nsWebpack.getEntryModule();
    entry.vendor = "./vendor";

    return {
        context: path.resolve("./app"),
        entry: entry,
        output: {
            pathinfo: true,
            path: path.resolve(destinationApp),
            filename: "[name].js",
            jsonpFunction: "nativescriptJsonp"
        },
        resolve: {
            extensions: [
                ".js",
                "." + platform + ".js",
            ],
            modules: [
                path.join(__dirname, "app"),
                path.join(__dirname, "node_modules/tns-core-modules"),
                path.join(__dirname, "node_modules"),
            ]
        },
        node: {
            //Disable node shims that conflict with NativeScript
            "http": false,
            "timers": false,
            "setImmediate": false,
        },
        module: {
            loaders: [
                {
                    test: /\.html$/,
                    loader: "html"
                },
                {
                    test: /\.js$/,
                    loader: 'babel',
                    exclude: /node_modules/
                },
                {
                    test: /\.scss$/,
                    loaders: [
                        'raw', 'resolve-url', 'sass'
                    ]
                },
            ]
        },
        plugins: [
            new webpack.optimize.CommonsChunkPlugin({
                name: ["vendor"]
            }),
            new webpack.DefinePlugin({
                global: 'global',
                __dirname: '__dirname',
                "global.TNS_WEBPACK": 'true',
            }),
            new CopyWebpackPlugin([
                { from: "**/*.css" },
                { from: "**/*.html" },
                { from: "**/*.xml", ignore: "App_Resources/**" },
            ]),
            new nsWebpack.GenerateBundleStarterPlugin([
                "./vendor",
                "./bundle",
            ]),
            new nsWebpack.NativeScriptJsonpPlugin(),
        ]
    };
};
