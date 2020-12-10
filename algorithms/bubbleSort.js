function bubbleSort(arr) {
  const clone = [...arr]

  const len = clone.length
  for (let i = 0; i < len - 1; i++) {
    let isSwap = false
    for (let j = 0; j < len - 1 - i; j++) {
      if (clone[j] > clone[j + 1]) {
        const temp = clone[j + 1]
        clone[j + 1] = clone[j]
        clone[j] = temp
        isSwap = true
      }
    }
    if (!isSwap) {
      break
    }
  }
  return clone
}

export default bubbleSort