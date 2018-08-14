- with 会创建全局属性
```
var obj ={a:1}
with(obj){
    b = 10
}
alert(b)//10, with中由于obj没有b，b被声明到window中。
```
- if...else 变量声明提升
```
if(false){
    var a =10
}
alert(a) //undefined 
//if...else... 没有块级作用域，里面的变量还是会被提升声明
```
- let 使用的是 es5 中的块级作用域实现, es5中的块级作用域：with,try..,catch,eval
```
```
- 函数的声明提升在变量的声明之前，所以同名的函数会被变量覆盖。但是如果在同名变量赋值之前使用该变量，由于 变量的只是声明未赋值 所以解析时，变量的声明会被忽略，所以还是函数。
- vo ao
- es6暂时死区