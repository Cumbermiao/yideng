### karma

- 使用npm或者yarn（推荐）安装 karma。

- 使用 karma init 初始项目，选择测试框架为jasmine，是否需要requirejs，选择无头浏览器为Phantomjs，选择哪些文件为测试文件，选择哪些文件需要测试，是否检测文件变化并重新测试，最终生成 karma.conf.js 。

- 根据karma的官网查看相关配置选项，使用无头浏览器时，要设置 singleRun为true。防止node一直被占用，无法进行其他操作。

- 安装 karma-jasmine, jasmine-core 书写测试用例。安装 phantom karma-phantomjs-launcher无头浏览器。
- 可以使用 karma-coverage 检查覆盖率。


### backstop
- 安装 backstopjs ,使用 backstop init 初始化 配置json。

### mocha

### E2E Selenium-driver nightwatch f2etest rize