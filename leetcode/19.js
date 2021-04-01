/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} n
 * @return {ListNode}
 */
var removeNthFromEnd = function (head, n) {
  const preHead = new ListNode(null, head)

  // 让右指针先走 n 步
  let right = preHead
  while (n--) {
    right = right.next
  }

  // 再一起走直到右指针到尽头
  let left = preHead
  while (right.next) {
    left = left.next
    right = right.next
  }

  // 找到倒数第 n+1 个节点，删掉下一个
  left.next = left.next.next
  return preHead.next
};