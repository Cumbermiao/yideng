## EC execution context 执行上下文:[VO,scope[VO,GO.VO],this:undefined]
## ECS execution context stack 执行栈
## VO variable object 变量对象:[形参，函数，变量] （按顺序优先）
## AO Active Object 活动对象：在函数执行时赋值后的VO:[arguments,VO声明的变量]
## GO global context 全局上下文:[VO,scope[VO],this:window]
## scope chain  作用域链


浏览器执行js时，首先会创建一个 GO 并将其压入到 ECS 的栈底，当执行到一个函数时，会给函数创建一个 EC 并压入到 ECS 中 ，EC 中有 scoped 属性，该属性包含了当前的 VO 以及 父级作用域的 VO 所以能够获取父级的变量；当改函数执行完毕时，该函数的 EC 会被弹出 ECS。
在创建 VO 时，按照 形参>函数声明>变量声明 的顺序声明变量，初始值都为 undefined，当函数执行时，为 EC 的 this 赋值，为变量赋值，获取实参，形成变量对象的就是 AO。

## 异步队列
> js中的异步队列分为 宏队列和微队列，宏队列包含 setTimeout, setInterval, setImmediate, I/O, UI rendering；微队列包含  process.nextTick, Promises, Object.observe, MutationObserver。
- Mutation Observer（变动观察器）是监视DOM变动的接口。当DOM对象树发生任何变动时，Mutation Observer会得到通知。
- Object.observe 已经废弃。

- 在每一次事件循环中，macrotasks 只会提取一个任务执行，而 microtask 会一直提取，直到 microtasks 队列清空。而事件循环每次只会入栈一个 macrotask ，主线程执行完该任务后又会先检查 microtasks 队列并完成里面的所有任务后再执行 macrotask
