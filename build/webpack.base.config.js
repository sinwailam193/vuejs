const webpack = require("webpack");
const vueConfig = require("./vue-loader.config");
const ExtractTextPlugin = require("extract-text-webpack-plugin");
const FriendlyErrorsPlugin = require("friendly-errors-webpack-plugin");
const OptimizeCssAssetsPlugin = require("optimize-css-assets-webpack-plugin");

const isProd = process.env.NODE_ENV === "production";
const directory = __dirname.replace("build", "");

module.exports = {
    devtool: isProd
    ? false
    : "#cheap-module-source-map",
    output: {
        path: `${directory}/dist`,
        publicPath: "/dist/",
        filename: "[name].[chunkhash].js"
    },
    resolve: {
        extensions: [".js", ".vue", ".json"],
        alias: {
            dist: `${directory}/dist`,
            vue$: "vue/dist/vue.esm.js",
            "@": `${directory}/src`
        }
    },
    module: {
        noParse: /es6-promise\.js$/, // avoid webpack shimming process
        rules: [
            {
                test: /\.vue$/,
                loader: "vue-loader",
                options: vueConfig
            },
            {
                test: /\.js$/,
                loader: "babel-loader",
                exclude: /node_modules/
            },
            {
                test: /\.(png|jpg|gif|svg)$/,
                loader: "url-loader",
                options: {
                    limit: 10000,
                    name: "[name].[ext]?[hash]"
                }
            },
            {
                test: /\.css$/,
                use: isProd ? ExtractTextPlugin.extract({
                    use: "vue-style-loader",
                    fallback: "css-loader"
                }) : ["vue-style-loader", "css-loader"]
            }
        ]
    },
    performance: {
        maxEntrypointSize: 300000,
        hints: isProd ? "warning" : false
    },
    plugins: isProd
    ? [
        new webpack.optimize.UglifyJsPlugin({
            compress: { warnings: false }
        }),
        new ExtractTextPlugin({
            filename: "main.[chunkhash].css"
        }),
        new OptimizeCssAssetsPlugin({
            assetNameRegExp: /\.css$/
        })
    ]
    : [
        new FriendlyErrorsPlugin()
    ]
};
