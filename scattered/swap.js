function swap([x, y]) {
  return [y, x]
}

function swap(arr) {
  return [arr[1], arr[0]]
}

function swap(arr) {
  arr[1] += arr[0]
  arr[0] = arr[1] - arr[0]
  arr[1] -= arr[0]
  return arr
}

function swap(arr) {
  arr.unshift(arr.pop())
  return arr
}

function swap(arr) {
  arr.push(arr.shift())
  return arr
}

function swap(arr) {
  arr.push(arr.splice(0, 1)[0])
  return arr
}

function swap(arr) {
  arr.unshift(arr.splice(1, 1)[0])
  return arr
}