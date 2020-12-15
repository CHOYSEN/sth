/* 
  选择排序
  选一个最小的放在前面
*/
function selectionSort(arr) {
  const clone = [...arr]
  const len = clone.length

  for (let i = 0, min, temp; i < len - 1; i++) {
    min = i
    for (let j = min + 1; j < len; j++) {
      clone[j] < clone[min] && (min = j)
    }
    temp = clone[i]
    clone[i] = clone[min]
    clone[min] = temp
  }
  return clone
}

export default selectionSort