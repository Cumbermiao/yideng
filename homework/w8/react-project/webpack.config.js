/*eslint-env node*/
const path = require("path");
const htmlWebpackPlugin = require("html-webpack-plugin");
const webpack = require("webpack");
const { GenerateSW } = require("workbox-webpack-plugin");
module.exports = {
  entry: path.resolve(__dirname, "./src/index.js"),
  output: {
    path: path.resolve(__dirname, "./dist"),
    filename: "bundle.js",
    publicPath: "/"
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        use: {
          loader: "babel-loader",
          options: {
            presets: ["@babel/env", "@babel/preset-react"]
          }
        },
        exclude: /node_modules/
      },
      {
        test:/\.(css|scss)$/,
        loader:'style-loader!css-loader!sass-loader'
      }
    ]
  },
  resolve:{
    alias:{
      "@":path.resolve(__dirname,'./src')
    },
    extensions:['.jsx','.js','.scss']
  },
  devServer: {
    // contentBase: path.join(__dirname, "dist"),
    compress: true,
    port: 8080,
    hot: true,
    host: "localhost"
  },
  profile: true,
  plugins: [
    new htmlWebpackPlugin({
      filename: "index.html",
      template: "index.html"
    }),
    new webpack.HotModuleReplacementPlugin(),
    new GenerateSW({
      swDest:"workbox-sw.js",
      // importWorkboxFrom:"local",
    })
  ]
};
