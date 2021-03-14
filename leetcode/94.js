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
var inorderTraversal = function (root) {
  if (!root) {
    return []
  }

  // 记录已遍历过的左节点
  const seen = new Set()
  const stack = [root], result = []
  while (stack.length) {
    // 取栈顶
    const item = stack[stack.length - 1]
    // 如果还有左子节点且这个子节点是新的，推入栈中处理
    if (item.left && !seen.has(item.left)) {
      seen.add(item.left)
      stack.push(item.left)
    } else {
      // 要么是没有左子节点，要么是已经处理完了
      // 推出栈顶
      stack.pop()
      result.push(item.val)
      // 如果有右子节点，推入栈中处理
      item.right && stack.push(item.right)
    }
  }
  return result
};