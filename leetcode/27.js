/**
 * @param {number[]} nums
 * @param {number} val
 * @return {number}
 */
var removeElement = function (nums, val) {
  // 重建的思想，先假定数组里的每个值都需要移除
  // left 指向不需要移除的最后一项
  let left = 0, right = 0
  while (right < nums.length) {
    // 不小心发现了一个不需要移除的元素
    if (nums[right] !== val) {
      // 重建 left 指向的这个位置
      nums[left] = nums[right]
      // left 位置已经是不需要移除的了，往后 +1 等待下一个
      left++
    }
    right++
  }
  return left
};