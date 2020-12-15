/* 
  插入排序
  从下标为 1 的元素开始遍历，判断是不是比上一个元素小
*/
function insertionSort(arr) {
  const clone = [...arr]

  for (let i = 1, temp, needle; i < clone.length; i++) {
    needle = i
    temp = clone[i]

    while (needle > 0 && clone[needle - 1] > temp) {
      clone[needle] = clone[needle - 1]
      needle--
    }
    clone[needle] = temp
  }
  return clone
}

export default insertionSort