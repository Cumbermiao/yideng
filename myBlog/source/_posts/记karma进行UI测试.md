---
title: 记karma进行UI测试
date: 2019-06-19 17:29:03
tags:
---

## Karma
> Karma is not a testing framework, nor an assertion library. Karma just launches an HTTP server, and generates the test runner HTML file you probably already know from your favourite testing framework. So for testing purposes you can use pretty much anything you like. 

Karma 既不是测试框架也不是断言库。

### install
> karma-chrome-launcher 需要配置代理下载无头浏览器
```bash
npm i karma -D
npm i karma-jasmine karma-chrome-launcher jasmine-core -D
```
#### package.json
```
"test": "node ./node_modules/karma/bin/karma start"
```
可以全局安装 `karma-cli` 就能直接使用 `karma`命令了。

### genrate config file
