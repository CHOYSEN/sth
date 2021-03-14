/**
 * @param {string[]} strs
 * @return {string[][]}
 */
var groupAnagrams = function (strs) {
  const dir = new Map()
  for (const item of strs) {
    const sorted = item.split('').sort().join('')
    if (!dir.has(sorted)) {
      dir.set(sorted, [item])
    } else {
      dir.get(sorted).push(item)
    }
  }
  // Map.prototype.values() 返回的不是数组类型
  return [...dir.values()]
};