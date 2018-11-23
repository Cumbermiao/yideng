/**
 * @function reduce
 * @param {Function} reducer 实现累加的callback，作用于每一个元素，需要返回两个相加的值
 * @param initVal 第一次是初始值，后面为累加的值
 * @returns {Function}
 * @description 手动实现类似 reduce 的函数,由于使用的是 ... 扩展，所以 list 可以是 字符串 对象 数组
 *  TODO:
 * - [ ] initVal 只做了是否为真的判断，且第一次才是初始值，后面为累加的值，如果不为真如 NaN 会自动转成 0 
 */

const reduce = (reducer,initVal)=>{
  return list=>{
    let [head,...rest] = list;
    if(head === undefined) return;
    return reduce(reducer,reducer(initVal,head))(rest)
  }
}

/**
 * @function sum
 * @param {Array|String|Object} arr
 */
const sum = reduce((head,next)=>{return head+next},0);
sum([1,2,3,4]);//10
console.log(sum('string',' '))
