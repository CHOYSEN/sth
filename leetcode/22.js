/**
 * @param {number} n
 * @return {string[]}
 */
var generateParenthesis = function (n) {
  const result = []
  function helper(left, right, str) {
    // 如果字符串长度已经达到最长了，加到结果并停止递归
    if (str.length === n * 2) {
      result.push(str)
      return
    }
    // 如果左括号还有的话
    if (left > 0) {
      helper(left - 1, right, str + '(')
    }
    // 剩余的右括号一定不能小于等于剩余的左括号，不然就可能出现 ())
    if (right > left) {
      helper(left, right - 1, str + ')')
    }
  }
  helper(n, n, '')
  return result
};