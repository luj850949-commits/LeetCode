/*
 * @lc app=leetcode.cn id=101 lang=javascript
 *
 * [101] 对称二叉树
 */

// 1. 节点构造函数 (LeetCode 官方定义)
function TreeNode(val, left, right) {
  this.val = (val === undefined ? 0 : val);
  this.left = (left === undefined ? null : left);
  this.right = (right === undefined ? null : right);
}

// 2. 数组转二叉树工具 (模拟 LeetCode 后台行为)
function arrayToTree(arr) {
  if (!arr || arr.length === 0) return null;
  
  const root = new TreeNode(arr[0]);
  const queue = [root]; // 借助队列按层构建
  let i = 1;
  
  while (i < arr.length) {
      const curr = queue.shift();
      
      // 构建左子节点
      if (arr[i] !== null && arr[i] !== undefined) {
          curr.left = new TreeNode(arr[i]);
          queue.push(curr.left);
      }
      i++;
      
      // 构建右子节点
      if (i < arr.length && arr[i] !== null && arr[i] !== undefined) {
          curr.right = new TreeNode(arr[i]);
          queue.push(curr.right);
      }
      i++;
  }
  return root;
}

function treeToArray(root) {
  if (!root) return [];
  
  const result = [];
  const queue = [root];
  
  while (queue.length > 0) {
      const curr = queue.shift();
      if (curr !== null) {
          result.push(curr.val);
          queue.push(curr.left);
          queue.push(curr.right);
      } else {
          result.push(null);
      }
  }
  
  // 剔除数组末尾多余的 null，完美还原 LeetCode 格式
  while (result[result.length - 1] === null) {
      result.pop();
  }
  
  return result;
}

// @lc code=start
/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {boolean}
 */
var child = function(p, q) {
  if(!p && !q) return true
  else if(!p || !q) return false
  else return p.val === q.val && child(p.left, q.right) && child(p.right, q.left)
}
var isSymmetric = function(root) {
  return child(root.left, root.right)
};
// @lc code=end

module.exports = { TreeNode, arrayToTree, isSymmetric }