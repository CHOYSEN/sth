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
var maxDepth = function (root) {
  let max = 0
  function helper(node, depth) {
    depth++
    max = Math.max(max, depth)
    node.left && helper(node.left, depth)
    node.right && helper(node.right, depth)
  }
  root && helper(root, 0)
  return max
};