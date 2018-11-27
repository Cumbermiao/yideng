awilix依赖控制反转来自动查找 service 和 router
- 在 service和router 中的 class 里， constructor中如果接收参数全部都是 awilix 的container.gradle 这种，可以理解为 constructor 中只传 service类
```js
class IndexService{
  constructor(){

  }
}
```