var path = require('path')
var webpack = require('webpack')
const merge = require("webpack-merge")
const ssrPlugin = require('vue-ssr-webpack-plugin')
const htmlWebpackPlugin = require('html-webpack-plugin')
const VueSSRClientPlugin = require('vue-server-renderer/client-plugin')
const nodeExternals = require('webpack-node-externals')
var env = process.env.NODE_ENV;
var conf;
if(env==='server'){
  conf = {
    entry:'./src/entry-server.js',
    output:{
      filename:'entry-server.js',
      libraryTarget: 'commonjs2'
    },
    target:"node",
    // externals: Object.keys(require('./package.json').dependencies),
    externals: nodeExternals({
      whitelist: /\.css$/
    }),
    plugins:[new ssrPlugin()]
  }
}
var config = {
  entry: './src/entry-client.js',
  output: {
    path: path.resolve(__dirname, './dist'),
    publicPath: '/dist/',
    filename: 'entry-client.js'
  },
  module: {
    rules: [
      {
        test: /\.css$/,
        use: [
          'vue-style-loader',
          'css-loader'
        ],
      },      {
        test: /\.vue$/,
        loader: 'vue-loader',
        options: {
          loaders: {
          }
          // other vue-loader options go here
        }
      },
      {
        test: /\.js$/,
        loader: 'babel-loader',
        exclude: /node_modules/
      },
      {
        test: /\.(png|jpg|gif|svg)$/,
        loader: 'file-loader',
        options: {
          name: '[name].[ext]?[hash]'
        }
      }
    ]
  },
  resolve: {
    alias: {
      'vue$': 'vue/dist/vue.esm.js'
    },
    extensions: ['*', '.js', '.vue', '.json']
  },
  devServer: {
    historyApiFallback: true,
    noInfo: true,
    overlay: true
  },
  performance: {
    hints: false
  },
  devtool: '#eval-source-map',
  plugins:env=='client'?[new htmlWebpackPlugin(),new VueSSRClientPlugin()]:[]
}
module.exports = merge({},config,conf)

if (process.env.NODE_ENV === 'production') {
  module.exports.devtool = '#source-map'
  // http://vue-loader.vuejs.org/en/workflow/production.html
  module.exports.plugins = (module.exports.plugins || []).concat([
    new webpack.DefinePlugin({
      'process.env': {
        NODE_ENV: '"production"'
      }
    }),
    new webpack.optimize.UglifyJsPlugin({
      sourceMap: true,
      compress: {
        warnings: false
      }
    }),
    new webpack.LoaderOptionsPlugin({
      minimize: true
    })
  ])
}
