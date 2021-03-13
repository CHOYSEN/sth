/**
 * @param {number} x
 * @return {number}
 */
var reverse = function (x) {
  // 记录原数字的正负号
  const signal = x < 0 ? -1 : 1
  // 转为正数方便分割后反转
  x = Math.abs(x)

  x = Number(x.toString().split('').reverse().join('')) * signal
  const max = 2 ** 31
  if (x < -max || x > max - 1) {
    x = 0
  }
  return x
}