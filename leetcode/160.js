/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * @param {ListNode} headA
 * @param {ListNode} headB
 * @return {ListNode}
 */
var getIntersectionNode = function (headA, headB) {
  const set = new Set()
  while (headA || headB) {
    if (headA) {
      if (set.has(headA)) {
        return headA
      } else {
        set.add(headA)
      }
    }
    if (headB) {
      if (set.has(headB)) {
        return headB
      } else {
        set.add(headB)
      }
    }
    headA = headA?.next
    headB = headB?.next
  }
};