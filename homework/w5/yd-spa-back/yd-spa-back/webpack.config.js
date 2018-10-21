const HtmlWebpackPlugin = require('html-webpack-plugin');
const argv = require('yargs-parser')(process.argv.slice(2));
// console.log("得到的参数",argv.mode);
const merge = require("webpack-merge");
const _mode = argv.mode || "development";
const _modeflag = (_mode == "production" ? true : false);
const _mergeConfig = require(`./config/webpack.${_mode}.js`);
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const WebpackBuildNotifierPlugin = require('webpack-build-notifier');
const setTitle = require('node-bash-title');
const ProgressBarPlugin = require('progress-bar-webpack-plugin');
const SpeedMeasurePlugin = require("speed-measure-webpack-plugin");
const smp = new SpeedMeasurePlugin();
const CleanWebpackPlugin = require('clean-webpack-plugin');
const InlineManifestWebpackPlugin = require("inline-manifest-webpack-plugin");
// var setIterm2Badge = require('set-iterm2-badge');
// setIterm2Badge(_mode);
setTitle('🍻  老袁的' + _mode);
const {
    resolve
} = require("path");
const loading = {
    //css-doodle loading
    html: "加载中...." //加载文件内容
}
let webpackConfig = {
    module: {
        rules: [{
            test: /\.(gif|png|jpe?g|svg)$/i,
            use: [
                'file-loader',
                {
                    loader: 'image-webpack-loader',
                    options: {
                        pngquant: {
                            quality: '65-90',
                            speed: 4
                        }
                    }
                },
            ],
        }, {
            test: /\.(png|jpg|gif|ttf|otf|svg)$/i,
            use: [{
                loader: 'url-loader',
                options: {
                    limit: 10 * 1024
                }
            }]
        }, {
            test: /\.css$/,
            use: [{
                loader: MiniCssExtractPlugin.loader
            }, {
                loader: 'css-loader',
                options: {
                    modules: true,
                    localIdentName: '[name]__[local]--[hash:base64:5]'
                }
            }]
        }]
    },
    // watch: !_modeflag,
    // watchOptions:{
    //     poll:1000,
    //     aggregateTimeout:500,
    //     ignored:/node_modules/
    // },
    devServer: {
        before(app) {
            app.get("/api/test", (req, res) => {
                res.json({
                    code: 200,
                    message: "Hello World"
                });
            });
        }
    },
    optimization: {
        noEmitOnErrors: false,
        //namedChunks
        //moduleIds
        splitChunks: {
            cacheGroups: {
                commons: {
                    chunks: 'initial',
                    name: "common",
                    minChunks: 2,
                    maxInitialRequests: 5,
                    minSize: 0
                }
            }
        },
        runtimeChunk: {
            name: "runtime"
        }
    },
    plugins: [
        new WebpackBuildNotifierPlugin({
            title: "webpack配置结果",
            logo: resolve("./favicon.png"),
            suppressSuccess: true
        }),
        // new CleanWebpackPlugin(["dist"]),
        new HtmlWebpackPlugin({
            filename: 'index.html',
            template: 'src/index.html',
            //template: 'src/index.js',
            loading,
            minify: {
                removeComments: _modeflag,
                collapseWhitespace: _modeflag
            }
        }),
        new MiniCssExtractPlugin({
            filename: _modeflag ? "styles/[name].[contenthash:5].css" : "styles/[name].css",
            chunkFilename: _modeflag ? "styles/[id].[contenthash:5].css" : "styles/[id].css"
        }),
        new ProgressBarPlugin(),
        //new InlineManifestWebpackPlugin("runtime")
    ]
}

module.exports = smp.wrap(merge(_mergeConfig, webpackConfig));