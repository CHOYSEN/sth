/**
 * @param {number[]} nums
 * @return {number}
 */
var maxSubArray = function (nums) {
  // 假设数组只有一项
  let max = nums.shift()
  let sum = max
  for (const num of nums) {
    // 如果当前项大于当前项加和，说明当前项比之前的子序和都大，直接以它为起点
    if (num > sum + num) {
      sum = num
    } else {
      sum += num
    }
    max = Math.max(max, sum)
  }
  return max
};