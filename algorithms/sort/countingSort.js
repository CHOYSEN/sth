/* 
  计数排序
  声明一个用于计数的数组，长度是未排序数组里的最大值加一
  遍历未排序数组，在计数数组里找到对应下标++
  遍历计数数组，计数器大于0说明有值，往结果数组里 push N 个 i
*/
function countingSort(arr, max) {
  const counterArr = new Array(max + 1).fill(0)

  for (let i = 0; i < arr.length; i++) {
    counterArr[arr[i]]++
  }

  let result = []
  for (let i = 0, temp; i <= max; i++) {
    if (counterArr[i] > 0) {
      temp = new Array(counterArr[i]).fill(i)
      result = [...result, ...temp]
    }
  }
  return result
}

export default countingSort