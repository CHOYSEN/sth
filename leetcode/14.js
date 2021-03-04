/**
 * @param {string[]} strs
 * @return {string}
 */
var longestCommonPrefix = function (strs) {
  if (!strs.length) {
    return ''
  }

  let prefix = ''
  // 取第一项作为基准
  const firstStr = strs[0]
  for (let i = 0; i < firstStr.length; i++) {
    const letter = firstStr[i]
    for (let j = 1; j < strs.length; j++) {
      if (letter !== strs[j][i]) {
        return prefix
      }
    }
    prefix += letter
  }
  return prefix
}