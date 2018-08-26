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


//Maybe 对传入的参数判断
class Maybe extends Functor {
    map(f) {
        return Maybe.isNothing() ? Maybe.of(null): Maybe.of(f(this.value)) 
    }

}
Maybe.isNothing = function(){
    return (this.value==null||this.value==undefined)
}
Maybe.of= function(){
    return new Maybe(this.value)
}
// Maybe.of(null).map(function(s){
//     return s.toUpperCase()
// })


// Either  常用功能：1 if...else 判断 2 提供默认值 3 错误处理
class Either extends Functor {
    constructor(left, right) {
        super()
        this.left = left
        this.right = right
    }

    map(f){
        return this.right?Either.of(this.left,f(this.right)):Either.of(f(this.left),this.right)
    }

    static of(left,right){
        return new Either(left,right)
    }
}

//if...else
// var add1 = function(x){
//     return x+1
// }
// console.log(Either.of(1,10).map(add1))
//错误判断


// var check = age=> age>10
// console.log(check(19))

// 使用 _.compose() 重写下面这个函数。提示：_.prop() 是 curry 函数
var isLastInStock = function(cars) {
    var last_car = _.last(cars);
    return _.prop('in_stock', last_car);
};

// var isLastInStock = _.compose(_.prop('in_stock'),_.last)
// isLastInStock(cars)


function ss(){
    var a=1
switch(a==null?3:a){
    case 1:
        return function(){
            console.log(1111)
        };
    case 3:
    return function(){
        console.log(3333)
    };
    case 4:
        return function(){
            console.log(4444)
        };
    return function(){
        console.log("其他")
    };
}
}
var res=ss()()