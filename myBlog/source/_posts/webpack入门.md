---
title: webpack入门
date: 2019-03-04 16:15:18
tags:
---
## webpack

### webpack 基础配置
#### webpack4 安装
> 如果给别人使用，项目中最好不要全局安装。
```
npm i webpack webpack-cli webpack-dev-server -S
```
#### 基础配置
```
module.exports = {
  entry: resolve(__dirname, './src/app.js'),
    output: {
        filename: 'bundle[hash:5].js',
        path: resolve(__dirname, './dist'),
    },
    devServer: {
        host: 'localhost',
        port: 8080,
        hot: true,
        compress: true
    },
    module: {
        rules: [],
    },
    plugins: [],
}
```

#### 使用 babel
```
npm i @babel/core @babel/preset-env
npm i @babel/polyfill
```
- 配置 .babelrc 或者 babel.config.js
```
{
  
}
```