## day1
### list

#### css攻击
- [x] css攻击：background:url(js); 伪类中的content:url(js)，eg ::content;css中所有可以使用 url的元素； color:expression(js); jstopng;
//使用url进行css执行js的方式，在ie及chrome并未执行，console中也没有提示。
//expression 在ie7上可以执行

####使用postMessage，iframe 进行不同源的窗口通信。
- 

- [x] crossorigin 协商跨域，当设置其为 anonymous时，requestHeader中会带上 Origin。

- [ ] 使用 img 的src中添加参数，将用户的信息提交给后台。后台通过定时任务，分析log。
