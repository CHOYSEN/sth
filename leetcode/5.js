/**
 * @param {string} s
 * @return {string}
 */
var longestPalindrome = function (s) {
  if (s.length < 2) {
    return s
  }

  let startIndex = 0
  let maxLength = 1
  function helper(left, right) {
    // 首先要保证不能超过字符串下标
    // 其次要保证字符串最左和最右相等（回文）
    while (left >= 0 && right < s.length && s[left] === s[right]) {
      // 当前回文子串的长度
      const currLen = right + 1 - left
      if (currLen > maxLength) {
        startIndex = left
        maxLength = currLen
      }
      left--
      right++
    }
  }

  for (let i = 0; i < s.length; i++) {
    // 保证 abbc 这种两个连起来的回文
    helper(i, i + 1)
    // 保证 babad 这种三个连起来的回文
    helper(i - 1, i + 1)
  }

  return s.substr(startIndex, maxLength)
}