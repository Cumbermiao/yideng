~

```
var jQuery  = (function(window,undefined){
    var jQuery=function(){
        return new jQuery.fn.init();
    }
    jQuery.fn  = jQuery.prototype ={
        init:function(){},
        extend:function(){}
    }
    jQuery.fn.init.prototype = jQuery.fn;
    return jQuery;
})(window)

jQuery.fn.extend//对原型链进行操作

jQuery.extend //添加到静态方法

```

1. ie浏览器可以给undefined fu hi。

2. 实现js的chong ai,使用闭包
```
function addMethod(obj,name,fn){
    var old = object[name]
    object[name]=function(){
        if(fn.length==arguments.length){
            return fn.apply(this.arguments)
        }else if(typeof old == 'function'){
            return old.apply(this,arguments)
        }
    }
}
var people={}
addMethod(people,'find',function(){
    console.log(0)
})
addMethod(people,'find',function(a){
    console.log(1)
})
addMethod(people,'find',function(a,b){
    console.log(2)
})
```
3. 链式调用 return this；连贯接口：1,链式调用 2，命令查询媒体 3，参数映射
4. js使用erjin hi
```
var s[1,2]
var length = s.length>>>0//向右补0

var a=true
a&&test()
a||test2()

//if(a)test()
//else test2()

```
5. jquery 的选 e 器 si~~le
6. hooks/勾 ~i/～i 典
7. $.ready:DOMContentloaded
8. css穿透