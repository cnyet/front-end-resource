/**
 * 两数相加 - 给出两个 非空 的链表用来表示两个非负的整数
 * 其中它们各自的位数是按照 逆序 的方式存储的，并且它们的每个节点只能存储一位数字
 * 我们将这两个数相加起来，则会返回一个新的链表来表示它们的和
 * 假设除了数字 0 之外，这两个数都不会以 0 开头
 * 链表 - 是一种非连续的数据存储结构，每一个数据元上都包含了下一个数据的指针
 * 例如：输入：[2,4,3] [5,6,4] 输出：[7,0,8]
 */
function addTwoNumbers (l1, l2) {
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

var arr1 = [2,4,3], arr2 = [5,6,4];
var res = addTwoNumbers(arr1, arr2);  // [7,0,8];
console.log(res);