class Functor {
    constructor(val) {
        this.value = val
    }
    // static of(val){
    //     return new this(val)
    // }
    //static 直接讲方法添加到类的构造函数constructor的对象上面。即是Function 实例Functor的属性。
    map(f) {
        return Functor.of(f(this.value))
    }

}
Functor.of = function (val) {
    return new this(val)
}

// var add2 = Functor.of(2).map(function (two) {
//     return two + 2;
// })



class Maybe extends Functor{
    map(f){
        console.log(this.value)
        return this.value?Maybe.of(f(this.value)):Maybe.of(null)
    }

}

Maybe.of(null).map(function(s){
    return s.toUpperCase()
})