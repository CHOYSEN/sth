/**
 * @param {number[]} nums
 * @return {number}
 */
var majorityElement = function (nums) {
  const map = new Map()
  const half = nums.length / 2

  for (const num of nums) {
    let counter = map.get(num) ?? 0
    counter++
    if (counter > half) {
      return num
    }
    map.set(num, counter)
  }
};