const htmlWebpackPlugin = require('html-webpack-plugin')
const extractCssPlugin = require('mini-css-extract-plugin')
const copyPlugin = require('copy-webpack-plugin')
const path = require('path')
const glob = require('glob');
const htmlAfterPlugin = require('./plugs/htmlAfterPlugin')
const entryHelper = require('./helpers/entryHelp')

let files = glob.sync('./src/webapp/views/**/*.js')
let {
    entry,
    arr
} = entryHelper(files);
let htmls = arr.map((options) => {
    return new htmlWebpackPlugin(options)
})
module.exports = {
    entry,
    output: {
        path: path.resolve(__dirname, './dist/assets'),
        filename: 'js/[name][contentHash:5].js',
        publicPath: '/'
    },
    module: {
        rules: [{
                test: /\.js$/,
                loader: 'babel-loader'
            },
            {
                test: /\.css$/,
                use: [{
                        loader: extractCssPlugin.loader,
                    },
                    'css-loader'
                ]
            }
        ]
    },
    plugins: [
        new copyPlugin([{
            from: 'src/webapp/views/components/',
            to: '../views/components',
            toType: 'dir'
        }, {
            from: 'src/webapp/views/common/',
            to: '../views/common',
            toType: 'dir'
        }], {
            
        }),
        // new copyPlugin([{
        //     from: 'src/webapp/views/components/',
        //     to: '../views/componets',
        //     transformPath(targetPath, absolutepath) {
        //         console.log('target',targetPath)
        //     }
        // }, ]),
        ...htmls,
        new htmlAfterPlugin(),
        new extractCssPlugin({
            filename: "css/[name].css",
            chunkFilename: "[id].css"
        }),
    ]
}