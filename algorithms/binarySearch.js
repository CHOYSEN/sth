function binarySearch(arr, key) {
  let start = 0
  let end = arr.length - 1

  while (end - start >= 0) {
    let middle = Math.floor((start + end) / 2)
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