const webapck = require("webpack");
const path = require("path");
const merge = require("webpack-merge");
const VueLoaderPlugin = require('vue-loader/lib/plugin')
let env = process.env.NODE_ENV;
const Serverconf = require("./conf/webpack.server");
const clientConf = {
  entry: path.resolve(__dirname, "./src/webapp/koa.js")
};
let defaultOpt = {
  entry: path.resolve(__dirname, "./app.js"),
  output: {
    filename: "app.js",
    path: path.resolve(__dirname, "./dist")
  },
  module: {
    rules: [
      {
        test: /\.ts$/,
        use: {
          loader: "ts-loader"
        }
      },
      { test: /\.vue$/, loader: "vue-loader" },
      {
        test: /\.js$/,
        loader: "babel-loader",
        
      }
    ]
  },
  plugins:[
    new VueLoaderPlugin()
  ],
  target: 'node'
};
let config = merge({}, defaultOpt, env == "client" ? clientConf : Serverconf);
console.log(config.module.rules)
module.exports = config;
