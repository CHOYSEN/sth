function quickSort(arr) {
  const len = arr.length
  if (len <= 1) {
    return arr
  }

  const pivot = arr[0]
  const left = [], right = [], middle = [pivot]
  for (let i = 1; i < len; i++) {
    const item = arr[i]
    if (pivot > item) {
      left.push(item)
    } else if (pivot < item) {
      right.push(item)
    } else {
      middle.push(item)
    }
  }

  return [...quickSort(left), ...middle, ...quickSort(right)]
}

export default quickSort