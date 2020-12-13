/* 
  冒泡排序
  遍历所有值，大的往后挪
*/
function bubbleSort(arr) {
  const clone = [...arr]

  const len = clone.length
  for (let i = 0; i < len - 1; i++) {
    let isSwap = false
    for (let j = 0; j < len - 1 - i; j++) {
      const next = j + 1
      if (clone[j] > clone[next]) {
        const temp = clone[next]
        clone[next] = clone[j]
        clone[j] = temp
        isSwap = true
      }
    }
    if (!isSwap) {
      // 如果这一轮都没有调换位置，说明数组已经有序了
      break
    }
  }
  return clone
}

export default bubbleSort