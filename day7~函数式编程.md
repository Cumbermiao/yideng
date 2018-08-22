
## 函数式编程

### 纯函数
- 对于相同的输入，永远会得到相同的输出，而且何可观察的副作用，也不依赖外部环境的状态。
```
var xs =[1,2,3,4,5]
xs.slice(0,3)
xs.slice(0,3)
xs.slice(0,3)
//输出结果相同
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

### 函子
- 函数式编程的要点在于函子，一般情况下使用 of 方法生成一个函子，使用map生成一个使用fn处理过的函子。