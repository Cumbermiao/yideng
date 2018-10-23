# 解析

## todo 
- file-loader+url-loader 使用，打出的图片的内容是 js。

## output的 hash 、publicPath

- hash 是当前webpack打包版本的hash；
- chunkHash ：是属于当前chunk的hash，当前chunk中只要有一个文件发送变化，打包后chunk就好改变（即使是改变的文件使用的是 contentHash）；
- contentHash ：是每个文件独有的hash，只有当自己内容变化是才会生成新的 hash。

- 对于做浏览器缓存来说，不希望一个 chunk 里面的一个文件改变，就要重新缓存整个chunk里面的文件，所以可以使用 contentHash，但是如果该文件较小，则浪费http请求，可以合并到其他文件里。一般来说，一个js的大小在30k左右。

- publicPath : 是打包之后的文件公共路径，如果要去静态资源如 css，js 等，前面会自动加上该路径。

```js
output: {
    filename: '[name]-[chunkHash:5].js',
    publicPath: '/',
}
```

## css-loader 的 localIdentName

- 如果css中使用新特性 局部变量， 那么需要在 options 中开启 modules ，还可以设置类名的规则 localIdentName

```js
import style from './hello.css'

const hello = "Hello world";
document.getElementById('app').innerHTML=`<h3 class="title ${style.bg}">Hello World</h3>'`//css-loader:localIndent

export default hello;
```

```js
{test: /\.css/,use: [
    'style-loader',
    {
    loader: 'css-loader',
    options: {
        modules: true,
        localIdentName: '[path]__[name]__[local]'
    }
    }
]}
```

## 懒加载 @babel/plugin-syntax-dynamic-import

- 对于不是当前页面特别重要的可以使用懒加载的方式，防止阻塞其他重要文件
- 如果使用 babel-loader 编译，可能需要 @babel/plugin-syntax-dynamic-import 插件，根据babel版本配置。

```js
import(/*webpackChunkName:"async"*/'./components/async').then((res)=>{
    console.log('res')
    res.default()
})
```

## optimization

- 待完善
- splitChunks 提取公共代码， webpack 默认文件大小要超过 30k 才会分离出来。
- 提取 runtime 代码为单独文件, 会将webpack的核心环境打成单独的文件。
```js
runtimeChunk: {
    name: 'runtime'
}
```

##　mini-css-extract-plugin

- 将css提取成 css 文件。
- 要注意可能和 optmization 可能会重复

```js
{test: /\.css/,use: [
    miniCssExtractPlugin.loader,
    {
    loader: 'css-loader',
    options: {
        modules: true,
        localIdentName: '[path]__[name]__[local]'
    }
    }
]}
```

```js
new miniCssExtractPlugin({
    filename: '[name]_[contenthash:5].css',
    chunkFilename: '[name]_[contenthash:5].css'
}),
```

## html-webpack-plugin

- 获取开发环境的html，打包时自动生成，并注入对应的资源。
- template 可以是js文件，该文件最后返回 html 内容，一般可以用模板。

```js
new HtmlWebpackPlugin({
    filename: 'index.html',
    template: 'src/index.html',
    //template: 'src/index.js',
    loading,
    minify: {
        removeComments: _modeflag,//删除注释
        collapseWhitespace: _modeflag//合并空格
    }
}),
```

## clean-webpack-plugin

- 每次打包时，自动删除上次打包的目录。
