## 范畴论
### 范畴：满足某种变形关系的所有对象。
- 范畴是一个集合
- 变形关系是函数
- 范畴论是集合论更上层的抽象，简单的理解就是"集合 + 函数"。理论上通过函数，就可以从范畴的一个成员，算出其他所有成员。
- 范畴可以当做成容器，里面包含了值和函数。

## 函数式编程

### 函数的合成与柯里化
- 函数的合成应该满足交换律和合成律。所以要求函数必须要“纯”。
- 使用函数的柯里化可以传递结合的函数所需要的参数。

### 纯函数
- 对于相同的输入，永远会得到相同的输出，而且何可观察的副作用，也不依赖外部环境的状态。
```
var xs =[1,2,3,4,5]
xs.slice(0,3)
xs.slice(0,3)
//输出结果相同
```
#### 纯函数的主要应用之一就是缓存
```
// 简单实现momize
var memoize = function(f) {
    var cache = {};
  
    return function() {
        console.log(cache,arguments)
      var arg_str = JSON.stringify(arguments);
      cache[arg_str] = cache[arg_str] || f.apply(f, arguments);
      return cache[arg_str];
    };
  };
  
  var double = memoize(function(x){return 2*x})
  var double4 = double(4)
  var double42 = double(4)//再次执行该函数时，memoize中缓存了参数为4的结果，会从cache中取值。
```
#### 由于异步结果是不纯的，我们可以缓存异步的执行函数，将其变成纯函数。
## 函子
- 函子是函数式编程里面最重要的数据类型，也是基本的运算单位和功能单位。
- 函子首先他是一个容器，他有范畴， 特殊的在于他可以作用于范畴里每一个值，将一个容器转换成另一个容器。作用于每一个值就是靠的map方法。
- 函数式编程的要点在于函子，一般情况下使用 of 方法生成一个函子，使用map生成一个使用fn处理过的函子。
```
class Functor{
    constrouctor(val){
        this.value = val
    }
    map(f){
        return Functor.of(f(this.val))
    }
}
Functor.of =function(val){
    return new Functor(val)
}

//使用
Functor.of(2).map(function(item)=>{
    return item+10
})
```

### Maybe 函子
- Maybe函子用于处理函子传入的val为空，导致报错
```
class Maybe extends Functor{
    map(f){
        return this.value?this.of(f(this.value)):this.of(null)
    }
}

### 递归优化：尾递归
- 递归会存储大量的变量，占用过多的cpu甚至导致栈溢出。
```
function sum(x){
    if(x===1){
        return 1
    }else{
        return sum(x-1)+x
    }
}

//尾递归
function sum(x,total){
    if(x===1)return 1+total
    else{
        return sum(x-1,x+total)
    }
}
```

