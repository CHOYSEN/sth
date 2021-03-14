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
 * @return {number[]}
 */
var preorderTraversal = function (root) {
  const result = []
  const stack = root ? [root] : []
  while (stack.length) {
    const item = stack.pop()
    result.push(item.val)
    item.right && stack.push(item.right)
    item.left && stack.push(item.left)
  }
  return result
};