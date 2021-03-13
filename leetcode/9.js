/**
 * @param {number} x
 * @return {boolean}
 */
var isPalindrome = function (x) {
  return Number(x.toString().split('').reverse().join('')) === x
}