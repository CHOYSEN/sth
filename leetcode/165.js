/**
 * @param {string} version1
 * @param {string} version2
 * @return {number}
 */
var compareVersion = function (version1, version2) {
  const arr1 = version1.split('.')
  const arr2 = version2.split('.')

  while (arr1.length || arr2.length) {
    const t1 = Number(arr1.shift() ?? 0)
    const t2 = Number(arr2.shift() ?? 0)
    if (t1 === t2) {
      continue
    }
    return t1 > t2 ? 1 : -1
  }
  return 0
};