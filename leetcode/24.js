/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var swapPairs = function (head) {
  const dummy = new ListNode(null, head)

  let prev = dummy
  while (head?.next) {
    // 下下个节点
    const nextOfNext = next.next
    // 让上一个指向自己的下一个
    prev.next = head.next
    // 让下一个指向自己
    head.next.next = head
    // 让自己指向下下个
    head.next = nextOfNext

    prev = head
    head = head.next
  }
  return dummy.next
};