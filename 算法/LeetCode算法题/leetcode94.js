/**
 * 二叉树的中序遍历 - 给定一个二叉树的根节点 root ，返回它的 中序 遍历
 * 思路：
 * 1. inorder(root) 表示当前遍历到root结点的结果
 * 2. 先递归遍历左子树，把左子树作为根节点，它的左子树为null，则返回将它的 val 添加到数组中
 * 3. 在遍历它的右子树，把它的右子树作为根节点，它的左子树为null，则返回将它的 val 添加到数组中
 * 4. 以此类推
 */
// 定义一个二叉树结构
function TreeNode(val, left, right) {
  this.val = (val===undefined ? 0 : val)
  this.left = (left===undefined ? null : left)
  this.right = (right===undefined ? null : right)
}

// root = [1,null,2,3] =》 [1,3,2]
var inorderTraversal = function(root) {
  var result = [];
  var onorder = (root) => {
    if (!root) {
      return;
    }
    inorder(root.left);
    result.push(root.val);
    inorder(root.right);
  }
  inorder(root);
  return result;
};