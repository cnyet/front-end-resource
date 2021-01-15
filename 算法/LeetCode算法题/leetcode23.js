/**
 * 合并K个排序链表，返回合并后的排序链表
 * 解题思路：建一个容量为K的队列，
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

function mergeKLists(lists) {
  if (lists.length === 0) {
    return null;
  } else if (lists.length === 1) {
    return lists[0];
  } else {
    lists.forEach(item => {

    });
  }
}