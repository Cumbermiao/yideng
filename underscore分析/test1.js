// const _ = require('./lodash')
const _ = require('./underscore')


//1 通过局部调用（partial apply）移除所有参数
// var words = function(str) {
//     return split(' ', str);
//   };


// var split = function(str,splitword){
//     return str.split(splitword)
// }
// var curried = _.curry(split)
// var strSplit = curried('a b c d e f')
// var strSplitWithWord = strSplit(' ')
// console.log(strSplitWithWord)

//1a 使用 `map` 创建一个新的 `words` 函数，使之能够操作字符串数组
// var arrWords = function(arr){
//     return arr.map(words)
// }
// var arrWords = _.compose(arrWords,words)
// var a1=words('')

//2 
// var shallowProperty = function (key) {
//     return function (obj) {
//         console.log(obj,arguments)
//         return obj == null ? void 0 : obj[key];
//     };
// };
// property = function (path) {
//     if (!_.isArray(path)) {
//         return shallowProperty(path);
//     }
//     return function (obj) {
//         return deepGet(obj, path);
//     };
// };
// pluck = function (obj, key) {
//     return obj.map(property(key));
// };

// var ages = pluck([{name:"plukname",age:12},{name:'jack',age:13},{name:"tom",age:21}],"age")
// console.log(ages)

//3 
// var list = [{name:'lsit',selected:false,visible:true},{name:'lsit2',selected:true,visible:true}]
// var ready = _.matches({selected: true, visible: true});
// var readyToGoList = _.filter(list, ready);
// console.log(readyToGoList)

//4
// var list =[10,123,32,13,33]
// console.log(_.max(list,1232))

//5
// console.log(_.sample([1, 2, 3, 4, 5, 6], 3))

//6 
var arr = [{name:'test1',age:1},{name:'test2',age:12,sex:'male'},{name:'test3',age:3},]
console.log(_.pluck(arr))