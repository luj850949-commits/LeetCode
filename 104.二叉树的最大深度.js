/*
 * @lc app=leetcode.cn id=104 lang=javascript
 *
 * [104] 二叉树的最大深度
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
 * @return {number}
 */
var maxDepth = function(root) {
  if(!root) return 0
  else return Math.max(maxDepth(root.left), maxDepth(root.right)) + 1
};
// @lc code=end

module.exports = { TreeNode, arrayToTree, maxDepth }