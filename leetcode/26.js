/**
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function (nums) {
  // left 指向不重复的最后一项
  // right 不断往后寻找不重复的项
  let left = 0, right = 1
  while (right < nums.length) {
    // 如果找到了不重复的项
    if (nums[left] !== nums[right]) {
      // 之前指向的是不重复的最后一项，现在多了一项，++后赋值
      left++
      nums[left] = nums[right]
    }
    right++
  }
  // 数组长度是下标 +1
  return left + 1
};