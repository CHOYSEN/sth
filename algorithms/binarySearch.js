/* 
  二分查找
  取有序数组的中间值和目标值判断，不断缩小范围
*/
function binarySearch(arr, key) {
  let start = 0
  let end = arr.length - 1

  // 如果 start > end 说明数组里没有这个值
  while (start <= end) {
    const middle = Math.floor((start + end) / 2)
    if (key === arr[middle]) {
      return middle
    }
    if (key < arr[middle]) {
      end = middle - 1
    } else {
      start = middle + 1
    }
  }
  return -1
}

export default binarySearch