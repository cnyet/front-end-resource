/**
 * 链表 - 是一种非连续的数据存储结构，每一个数据元上都包含了下一个数据的指针
 * 对链表的插入和删除的复杂度是O(1)
 */
// 输入：[2,4,3] [5,6,4]
// 输出：[7,0,8]
var addTwoNumbers = function(l1, l2) {
  let node = new ListNode('head');
  let temp = node, sum, n = 0;
  while (l1 || l2) {
    const n1 = l1 ? l1.val : 0;
    const n2 = l2 ? l2.val : 0;
    sum = n1 + n2 + n;
    temp.next = new ListNode(sum % 10);
    temp = temp.next;
    n = parseInt(sum / 10);
    if (l1) l1 = l1.next;
    if (l2) l2 = l2.next;
  }
  if (n > 0) temp.next = new ListNode(n);
  return node.next;
}

function ListNode(val) {
  this.val = val;
  this.next = null;
}