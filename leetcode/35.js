/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var searchInsert = function (nums, target) {
  return [...nums, target].sort((x, y) => x - y).indexOf(target)
};