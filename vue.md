## vue 双向绑定
### 监听器 Observer：使用defineProperty监听所有属性的变化
### 订阅者 Watcher：接收属性变化并执行相关函数
### 解析器 Compile：解析器，将数据更新到视图上

#### 订阅器 Dep：收集订阅者
- 在get里面判断该属性是否需要订阅，如果要则使用 Dep.addSub 添加订阅者
```
function Dep(){
    this.subs=[]//存放订阅者
}
Dep.prototype={
    addSub:function(watcher){
        this.subs.push(watcher)
    },
    notify:function(){
        this.subs.forEach((watcher)=>{
            watcher.update()
        })
    }
}
```
#### 订阅者
```
function Watcher(vm,exp,cb){
    this.cb=cb
    this.vm=vm
    this.exp = exp
    this.value = this.get()
}
Watcher.prototype = {
    update:function(){
        this.run()
    },
    run:function(){
        var value = this.vm.data[this.exp]
        var oldVal = this.value
        this.cb.call(this.vm,value,oldVal)
    },
    get:function(){
        Dep.target = this;
        var value = this.vm.data[this.exp]
        Dep.target = null
        return value
    }
}
```
