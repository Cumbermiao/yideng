### e2e 测试在deepin中使用了 2.8 chromedriver 报错 
- UnhandledPromiseRejectionWarning: WebDriverError: unknown error: Runtime.executionContextCreated has invalid 'context': {"auxData":{"frameId":"FFCE2CF09E094F09DE95097816ED50F4","isDefault":true},"id":1,"name":"","origin":"://"}  (Session info: chrome=68.0.3440.84)  (Driver info: chromedriver=2.8.240825,platform=Linux 4.15.0-29deepin-generic x86_64)

### 使用 karma时，要注意node 的版本不能超过 6.x ，否则会出现  No provider for "framework:jasmine"! (Resolving: framework:jasmine) 的错误。