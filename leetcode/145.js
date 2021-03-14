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
var postorderTraversal = function (root) {
  const result = []
  const seen = new Set()
  const stack = root ? [root] : []
  while (stack.length) {
    const item = stack[stack.length - 1]
    if (item.left && !seen.has(item.left)) {
      seen.add(item.left)
      stack.push(item.left)
      continue
    }
    if (item.right && !seen.has(item.right)) {
      seen.add(item.right)
      stack.push(item.right)
      continue
    }
    stack.pop()
    result.push(item.val)
  }
  return result
};