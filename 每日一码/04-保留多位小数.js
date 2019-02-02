/**
 * @description 保留多位小数
 * @param num {number,string} 操作的数字
 * @param len {number} 保留的位数,最后一位四舍五入
 * 2019-2-2
 */

function keepDigits(num,len){
  typeof num === 'string'&&(num-=0);
  if(num===NaN){
    console.error(`${num} is not a number!!!`);
    return;
  }
  if(typeof len !== 'number' || len<0){
    console.error(`${len} should be a number and greater than 0!!!`);
    return;
  }
  return Number(`${Math.round(`${num}e${len}`)}e-${len}`)
}
