/* 
  归并排序
  不断递归把数组分成两份再进行合并
*/
function mergeSort(arr) {
  const clone = [...arr]
  const len = clone.length
  if (len <= 1) {
    return clone
  }

  const mid = Math.floor(len / 2)
  const left = clone.slice(0, mid)
  const right = clone.slice(mid)

  return merge(mergeSort(left), mergeSort(right))
}

function merge(left, right) {
  const result = []

  let less = null
  while (left.length && right.length) {
    less = left[0] < right[0] ? left.shift() : right.shift()
    result.push(less)
  }

  // 剩余项放在 result 后面
  return [...result, ...left, ...right]
}

export default mergeSort