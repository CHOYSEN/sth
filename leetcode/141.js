/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * @param {ListNode} head
 * @return {boolean}
 */
var hasCycle = function (head) {
  let slow = head
  let fast = head
  while (fast) {
    // 慢指针走一步
    slow = slow.next
    // 快指针走两步
    fast = fast.next?.next
    // 如果有环，迟早会相遇
    if (slow === fast) {
      return true
    }
  }
  return false
};