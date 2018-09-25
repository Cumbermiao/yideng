## 持续集成
1. 持续集成是通过平台串联各个开发环节，实现和沉淀工作自动化的方法
2. 先上代码和代码仓库不同步，影响迭代和团队写协作
3. 静态资源发布依赖人工，浪费开发人力。
4. 缺少自动化测试，产品质量得不到保障。
5. 文件简单修改上线，需要技术介入。

### 统一代码仓库通过分支管理合并主干SVN
### 自动化构建工具，编译、部署、测试、监控、本机开发上线环境。FIS3/Webpack/jdists/package.json/chai/supertest/mocha/selenium-webdriver
### 持续集成平台。Jenkins、Travis
### 部署工具。 rsync、shelljs、yargs。


## 统一代码仓库
### 基于分支开发，开发完成合并到Master主干，同时打Tag标记方便回滚代码。
### 合成步骤
1. svn checkout svn地址 --username 用户名
2. svn branch 分支名
3. svn merge 主干svn地址 分支svn地址
4. Beyond Compare -> svn resolved
5. svn copy 主干svn地址 /tags/2017

## 前端工程化（微前端）
- 自动化编译
- 前端模块化(type=modules)
- 定位静态资源(静态资源会被缓存，相同文件名的内容发生变化检测不到-> ?v=1.0.1,使用参数告诉浏览器文件内容发生变化，其他文件也有版本号，各文件版本号不易控制 -> 使用 md5 改变文件名（diff算法修改少量代码）)
- 前端开发组件化:x-tag(web component:custom elements、html imports、html templates、shadow dom)
```
<body>
    <script>
        class ButtonHelloElement extends HTMLButtonElement{
            constructor(){
                super()
                this.addEventListener('click',()=>{
                    alert('hello')
                })
            }
        }
        customElements.define('button-hello',ButtonHelloElement,{
            extends:'button'
        })
    </script>

    <button is='button-hello'></button>
</body>
```
- 自动化部署测试配合版本库
- 自动化性能优化

## 自动化构建
- 自动化运营平台
- 自动化雪碧图
- 自动化离线打包
- 自动化控制缓存级别
- 自动化处理 Inline
- 自动化根据网速分发版本资源
- 自动化运营平台
## 解放劳动力更多的自动化