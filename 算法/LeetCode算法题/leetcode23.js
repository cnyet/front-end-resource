/**
 * 合并K个排序链表，返回合并后的排序链表
 * 解题思路：转化为两个链表合并的问题
 * 1. 新建一个空链表
 * 2. 遍历k个排序链表，依次和目标链表合并
 */
// 输入：
// [
//   1 -> 4 -> 5,
//   1 -> 3 -> 4,
//   2 -> 6
// ]
// 输出：1 -> 1 -> 2 -> 3 -> 4 -> 4 -> 5 -> 6

// 定义一个单链表结构
function ListNode(val) {
  this.val = (val === undefined ? 0 : val)
  this.next = (next === undefined ? null : next)
}
// 合并两条链表
function mergeTwoLists (l1, l2) {
  var head = new ListNode(); // 空链表的表头，值为0，head.next就是合并的链表
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

var mergeKLists = function(lists) {
  var target = null;
  for (var i = 0; i < lists.length; i++) {
    // 循环遍历每条链表跟target合并
    target = mergeTwoLists(target, lists[i]);
  }
  return target;
};