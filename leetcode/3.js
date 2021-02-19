/**
 * @param {string} s
 * @return {number}
 */
// 滑动窗口双指针
var lengthOfLongestSubstring = function (s) {
  let maxLength = 0

  let left = 0
  for (let right = 0; right < s.length; right++) {
    // 以字符串的 left 位置为起点，查找当前字符的索引
    // 因为 indexOf 方法找到第一个符合的就会返回，所以不用刻意截取字符串的右边
    const relativeIndex = s.indexOf(s[right], left)
    // 如果索引不等于当前位置，说明子字符串中已经存在当前的字符
    if (relativeIndex !== right) {
      // left 指针赋值为重复字符索引的下一位
      left = relativeIndex + 1
      // left 被重新赋值了，子字符串肯定小于之前，所以不需要对比长度
      continue
    }
    maxLength = Math.max(maxLength, right - left + 1)
  }
  return maxLength
}