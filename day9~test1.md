1. 函数提升在各浏览器中的表现，{}的词法作用域

2. 闭包返回的函数中，如果用了 eval，浏览器不知道eval中有没有上层函数的变量引用，所以就不会回收里面的变量。
  但是如果使用了 window.eval,标准浏览器中会将window.eval里面的变量提升到全局中（各浏览器表现不一致）。
IE6/7/8中，eval和window.eval一样，写在自定义函数内是局部闭包，否则是全局闭包。
IE9/Firefox/Safari/Chrome/Opera中，eval同以上IE6/7/8，window.eval即使写在自定义函数内使用的也是全局闭包。

3. 给变量赋值为null，是在下一次 GC(Garbage Collection)时，将其释放。WeakMap会立即释放。
4. 1.===1.0 1..a==new Number("1.0").a js中整形不是对象，浮点才是对象
