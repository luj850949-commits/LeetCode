/*
 * @lc app=leetcode.cn id=236 lang=javascript
 *
 * [236] 二叉树的最近公共祖先
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
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @param {TreeNode} p
 * @param {TreeNode} q
 * @return {TreeNode}
 */
var hasNum = function(root, p) {
  if(!root) return false
  else return root.val === p.val || hasNum(root.left, p) || hasNum(root.right, p)
}

var lowestCommonAncestor = function(root, p, q) {
  if(root.val === p.val || root.val === q.val) return root
  else {
    if(hasNum(root.left, p) && hasNum(root.left, q)) {
      return lowestCommonAncestor(root.left, p, q)
    }else if(hasNum(root.right, p) && hasNum(root.right, q)) {
      return lowestCommonAncestor(root.right, p, q)
    }else{
      return root
    }
  }
};
// @lc code=end

module.exports = { lowestCommonAncestor, arrayToTree }