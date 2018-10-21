const {resolve} = require('path')
const cleanPlugin = require('clean-webpack-plugin')
const htmlPlugin = require('html-webpack-plugin')
const miniCssExtractPlugin = require('mini-css-extract-plugin')
const OptimizeCssAssetsPlugin = require('optimize-css-assets-webpack-plugin')
const progressPlugin = require('progress-bar-webpack-plugin')
const argv = require('yargs').argv

// console.log('argv',argv)
const _build = argv.mode == 'production'
module.exports = {
  entry: {
    main: './src/main.js'
  },
  output: {
    filename: '[name]-[chunkHash:5].js',
    publicPath: '/',
  // path:resolve(__dirname,'./dist')
  },
  module: {
    rules: [
      {test: /\.js/,loader: 'babel-loader'},
      {test: /\.css/,use: [
        //   miniCssExtractPlugin.loader,
        "style-loader",
          {
            loader: 'css-loader',
            options: {
              modules: true,
              localIdentName: '[path]__[name]__[local]'
            }
          }
      ]}, {
        test: /\.(jpe?g|png|gif|svg)$/i,
        use: [
          'file-loader',
          'url-loader?limit=10000',
        //   'img-loader'
        ]
      }

    ]
  },
  optimization: {
    splitChunks: {
      cacheGroups: {
        // styles: {
        //   name: 'styles',
        //   test: /\.css$/,
        //   chunks: 'all',
        //   enforce: true
        // }

      }
    },
    runtimeChunk: {
      name: 'runtime'
    }
  },
  plugins: _build ?
    [
      new cleanPlugin('dist'),
      new htmlPlugin({
        title: 'webpack4 template',
        filename: 'index.html',
        template: './src/index.html',
        minify: {
          removeComments: _build,
          collapseWhitespace: _build
        }
      }),
    //   new miniCssExtractPlugin({
    //     filename: '[name]_[contenthash:5].css',
    //     chunkFilename: '[name]_[contenthash:5].css'
    //   }),
    //   new OptimizeCssAssetsPlugin({
    //     assetNameRegExp: /\.optimize\.css$/g,
    //     cssProcessor: require('cssnano'),
    //     cssProcessorPluginOptions: {
    //       preset: ['default', { discardComments: { removeAll: true } }]
    //     },
    //     canPrint: true
    //   }),
    //   new progressPlugin()
    ] : []
}
