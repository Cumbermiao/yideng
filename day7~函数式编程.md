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
xs.slice(0,3)
//输出结果相同
```
## 函子
- 函子是函数式编程里面最重要的数据类型，也是基本的运算单位和功能单位
- 函数式编程的要点在于函子，一般情况下使用 of 方法生成一个函子，使用map生成一个使用fn处理过的函子。
```
Class Functor{
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
```

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

