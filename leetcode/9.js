/**
 * @param {string[]} strs
 * @return {string}
 */
var longestCommonPrefix = function (strs) {
  if (!strs.length) {
    return ''
  }

  let prefix = ''
  const first = strs[0]
  for (let i = 0; i < first.length; i++) {
    const letter = first[i]
    for (let j = 1; j < strs.length; j++) {
      if (strs[j][i] !== letter) {
        return prefix
      }
    }
    prefix += letter
  }
  return prefix
}