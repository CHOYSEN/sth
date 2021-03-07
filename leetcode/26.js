/**
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function (nums) {
  let left = 0, right = 1
  while (right < nums.length) {
    if (nums[left] !== nums[right]) {
      left++
      nums[left] = nums[right]
    }
    right++
  }
  return left + 1
};