const _ = require('./lodash')


//1 通过局部调用（partial apply）移除所有参数
var words = function(str) {
    return split(' ', str);
  };


// var split = function(str,splitword){
//     return str.split(splitword)
// }
// var curried = _.curry(split)
// var strSplit = curried('a b c d e f')
// var strSplitWithWord = strSplit(' ')
// console.log(strSplitWithWord)

//1a 使用 `map` 创建一个新的 `words` 函数，使之能够操作字符串数组
var arrWords = function(arr){
    return arr.map(words)
}
var arrWords = _.compose(arrWords,words)
var a1=words('')
