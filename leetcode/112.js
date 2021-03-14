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
 * @param {number} targetSum
 * @return {boolean}
 */
var hasPathSum = function (root, targetSum) {
  let hasPath = false
  function traverse(node, sum) {
    sum += node.val
    if (!node.left && !node.right && sum === targetSum) {
      hasPath = true
      return
    }
    node.left && traverse(node.left, sum)
    node.right && traverse(node.right, sum)
  }
  root && traverse(root, 0)
  return hasPath
};