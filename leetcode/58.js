/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLastWord = function (s) {
  // 分割后剔除空字符串和单空格
  const arr = s.split(' ').filter(item => item && item !== ' ')
  // 数组长度为 0 说明没有单词
  return arr.length ? arr[arr.length - 1].length : 0
};