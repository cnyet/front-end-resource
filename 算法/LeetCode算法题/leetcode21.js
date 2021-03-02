/**
 * 合并两个有序链表 - 将两个升序链表合并为一个新的升序链表并返回。新链表是通过拼接给定的两个链表的所有节点组成的。
 * 解题思路：递归实现
 * 两条链表有任何一条为空时结束，每一层都返回排好序的链表头，如果表1比表2小，将表1的next与排好序的链表连接
 */

输入：1->2->4, 1->3->4
输出：1->1->2->3->4->4

// 定义一个单链表结构
function ListNode(val, next) {
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

/**
 * 在 O(n) 的时间代价以及 O(1) 的空间代价完成合并
 * 思路：新建一条目标链表，把两条链表添加到目标链表里
 * 1. 用一个变量保存合并后链表头部head，head没有值，next指向合并后的链表
 * 2. 依次比较两条链表的第一个元素值，把较小元素添加到next上
 * 3. 并把这条链表的第一个元素替换成下一个元素再跟另一条链表比较
 * 4. 依次比较
 */
const mergeTwoLists = function(l1, l2) {
  var head = new ListNode(); // 空链表的表头
  var cur = head; // cur 就是每次目标链表的最新位置
  // 遍历l1和l2
  while (l1 && l2) {
    // 当l1第一个元素值小于等于l2时
    if (l1.val <= l2.val) {
      // head.next指向这个元素
      cur.next = l1;
      // 为了l1下一次遍历，l1链表要向下一元素移动
      l1  = l1.next;
    } else {
      // 当l1第一个元素值大于l2时
      cur.next = l2;
      // 为了l2下一次遍历，l2链表要向下一个元素移动
      l2 = l2.next;
    }
    // 为了head下一次遍历，head也要向下一个元素移动
    cur = cur.next;
  }
  // 当l1和l2不等长时，将l1或l2剩下的元素直接添加到head.next后面
  cur.next = l1 !== null ? l1 : l2;
  // head.next指向合并后的链表
  return head.next;
}
