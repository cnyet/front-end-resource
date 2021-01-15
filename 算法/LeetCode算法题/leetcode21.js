/**
 * 合并两个有序链表 - 将两个升序链表合并为一个新的 升序 链表并返回。新链表是通过拼接给定的两个链表的所有节点组成的。
 * 解题思路：使用递归实现，两条链表有任何一条为空时结束，每一层都返回排好序的链表头，如果表1比表2小，将表1的next与排好序的链表连接
 */

输入：1->2->4, 1->3->4
输出：1->1->2->3->4->4

// 定义一个单链表结构
function ListNode(val) {
  this.val = (val===undefined ? 0 : val)
  this.next = (next===undefined ? null : next)
}

var mergeTwoList = function (li, l2) {
  if (l1 === null) {
    return l2;
  }
  if (l2 === null) {
    return l1;
  }
  if (l1.val < l2.val) {
    l1.next = mergeTwoList(l1.next, l2);
    return l1;
  } else {
    l2.next = mergeTwoList(l1, l2.next);
    return l2;
  }
}