/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var addTwoNumbers = function (l1, l2) {
  let newList = new ListNode()
  const dummy = newList

  // 余数
  let remainder = 0
  while (l1 || l2) {
    const num1 = l1?.val ?? 0
    const num2 = l2?.val ?? 0

    let sum = num1 + num2 + remainder
    remainder = 0

    if (sum >= 10) {
      sum -= 10
      remainder = 1
    }
    newList.next = new ListNode(sum)

    l1 = l1?.next
    l2 = l2?.next
    newList = newList.next
  }
  // 如果还有余数
  remainder && (newList.next = new ListNode(remainder))
  return dummy.next
}