const path = require('path');
const webpack = require('webpack');
const LiveReloadPlugin = require('webpack-livereload-plugin');
const ExtractTextPlugin = require("extract-text-webpack-plugin");
const OptimizeCssAssetsPlugin = require('optimize-css-assets-webpack-plugin');
module.exports = {
    entry: {
        index: [
            path.join(__dirname, '../src/public/scripts/index.es6'),
            path.join(__dirname, '../src/public/scripts/indexadd.es6'),
        ],
        tag: [
            path.join(__dirname, '../src/public/scripts/tag.es6'),
        ]
    },
    output: {
        filename: 'public/scripts/[name]-[hash:5].js',
        path: path.join(__dirname, '../build')
    },
    module: {
        rules: [
          {
            test: /\.es6$/,
            exclude: /(node_modules|bower_components)/,
            use: {
              loader: 'babel-loader',
              options: {
                presets: ['env']
              }
            }
          },
          {
            test: /\.css$/,
            use: ExtractTextPlugin.extract({
              fallback: "style-loader",
              use: "css-loader"
            })
          }
        ]
      },
    plugins: [
        new webpack.DefinePlugin({
            'process.env.NODE_ENV': '"prod"',
        }),
        new LiveReloadPlugin({appendScriptTag:true}),
        new ExtractTextPlugin("public/css/[name]-[hash:5].css"),
        new webpack.optimize.UglifyJsPlugin({
            compress: {
              warnings: false,
              drop_console: false,
            }
          }),
          new OptimizeCssAssetsPlugin({
            assetNameRegExp: /\.css$/g,
            cssProcessor: require('cssnano'),
            cssProcessorPluginOptions: {
              preset: ['default', { discardComments: { removeAll: true } }],
            },
            canPrint: true
          })
    ]
};