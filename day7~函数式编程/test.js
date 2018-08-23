class Functor {
    constrouctor(val) {
        this.value = val
        console.log(this.value)
    }
    map(f) {
        return Functor.of(f(this.val))
    }
}
Functor.of = function (val) {
    return new Functor(val)
}

var add2 = Functor.of(2).map(function (two) {
    return two + 2;
});
console.log(add2)
