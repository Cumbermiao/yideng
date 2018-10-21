const path = require('path')
const optimizeCss = require('optimize-css-assets-webpack-plugin')
const htmlWebpackPlugin = require('html-webpack-plugin')
const ExtractTextPlugin = require("extract-text-webpack-plugin");


const BUILD = process.env.NODE_ENV=='production'
console.log(process.NODE_ENV)
module.exports = {
    entry:path.resolve(__dirname,'./public/js/index.js'),
    output:{
        path:path.resolve(__dirname,'./dist'),
        filename:'[name]-[hash:5].js'
    },
    devServer: {
        // contentBase: path.join(__dirname, ''),
        compress: true,
        publicPath:'./dist',
        port: 8081
      },
    module:{
        rules:[
            {
                test:/\.js/,
                use:['babel-loader']
            },
            {
                test:/\.css/,
                use: ExtractTextPlugin.extract({
                    fallback: "style-loader",
                    use: "css-loader"
                  })
            }
        ]
    },
    plugins:[
        new htmlWebpackPlugin(),
        new ExtractTextPlugin("dist.css")
    ]
}