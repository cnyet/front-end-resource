/**
 * 删除链表的倒数第 N 个结点 - 给你一个链表，删除链表的倒数第 n 个结点，并且返回链表的头结点
 * 思路：删除链表元素必须知道该元素的前一个元素
 * 1. 为了保证每个节点都有前节点，给第一个节点定义一个0值节点
 * 2. 先计算链表的长度
 * 3. 由于添加了一个元素，length - n + 1就是删除的元素
 */
function ListNode(val, next) {
  this.val = (val === undefined ? 0 : val)
  this.next = (next === undefined ? null : next)
}

var removeNthFromEnd = function(head, n) {
  var dummy = new ListNode(0, head); // head节点的前节点
  var cur = dummy; // 定义一个链表元素的变量
  for (var i = 1; i < getLength(head) - n + 1; i++) {
    cur = cur.next;
  }
  cur.next = cur.next.next;
  return dummy.next;
};

function getLength (head) {
  var count = 0;
  while (head !== null) {
    count++;
    head = head.next;
  }
  return count;
}

// head = [1,2,3,4,5], n = 2 => [1,2,3,5]