/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number}
 */
var sumNumbers = function (root) {
  let sum = 0
  function helper(node, num) {
    num += node.val.toString()
    node.left && helper(node.left, num)
    node.right && helper(node.right, num)
    if (!node.left && !node.right) {
      sum += +num
    }
  }
  root && helper(root, '')
  return sum
};