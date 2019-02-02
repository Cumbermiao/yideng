/**
 * @description 
 * 2019-01-31
 */

/**
 * 基础语法 
 * new Proxy(obj,handler)
 * @param obj {Object} 需要代理的对象
 * @param handler {Object} 对代理对象obj的自定义代理操作，详细代理操作查看mdn
 *  */
let base = {
  name:'base',
  age: 10,
  sex: 'female'
}

/**
 * set 参数
 * @param target {Object} 代理的对象，即 base
 * @param property {string} 属性名称，key 值
 * @param value 设置的值
 * @param receiver {Proxy} 一般为 proxy 对象本身，即 p1 
 */
let p1 = new Proxy(base,{
  //通过代理模式，在赋给 base 之前可以对设置的值可以进行处理或者验证等操作
  set:(target, property, value, receiver)=>{
    if(property==='age'){
      if(typeof value === 'number'){
        target[property] = value
      }
    }
  },


  //具体参数意义同上， 少了 value 参数
  //通过代理模式，访问代理对象 p1 的属性，p1自动转发到 base ， 可以对能访问的数据进行限制
  get:(target, property, receiver)=>{
    if(property in target){
      if(property === 'age'){
        return 'secret'
      }
      return target[property]
    }
  }
})

p1.age = 20 
console.log(p1.age)

/**
 * proxy 也可以用来代理类， 因为 prototype 也是一个对象， 我们可以代理拦截 prototype 上的属性。
 * 在 react 中，所有的组件都是类，其所有的方法都是定义在 prototype 上的，我们可以尝试代理组件方法的调用。
 */
