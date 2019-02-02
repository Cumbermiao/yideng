/**
 * @description 对数组使用对象标记的方式来记录对应元素的最后一次出现的位置
 *
 */

var arr = [1, 11, 23, 22, 22, 44, 23];

function MaxLen(arr) {
  //maxLen 重复的个数
  var lastPosition = {},
    maxLen = 0,
    index = 0;
  for (var i = 0; i < arr.length; i++) {
    var ele = arr[i];
    if (lastPosition[ele] !== undefined && lastPosition[ele] < i) {
      //如果出现重复，index为当前重复元素的索引
      index = i;
      maxLen++;
    }
    lastPosition[ele] = i;
  }
  return (arr.length - maxLen)
}

