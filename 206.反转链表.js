/*
 * @lc app=leetcode.cn id=206 lang=javascript
 *
 * [206] 反转链表
 */

// 官方 ListNode 构造函数
function ListNode(val, next) {
    this.val = (val === undefined ? 0 : val);
    this.next = (next === undefined ? null : next);
}

// 数组转链表
// 模拟 LeetCode 后台，把 [1, 2, 3] 变成真正的链表
function arrayToList(arr) {
    if (!arr || arr.length === 0) return null;
    
    let dummy = new ListNode(0); // 用一个哑节点当头节点
    let curr = dummy;
    
    for (let i = 0; i < arr.length; i++) {
        curr.next = new ListNode(arr[i]);
        curr = curr.next;
    }
    return dummy.next; // 返回真正的头节点
}

// 链表转数组
// 把做完题的链表，转回数组，方便 console.log 查看或者给 Jest 做比对
function listToArray(head) {
    let result = [];
    let curr = head;
    while (curr !== null) {
        result.push(curr.val);
        curr = curr.next;
    }
    return result;
}

// @lc code=start
/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var reverseList = function(head) {
  let p = head
  let last = null

  while(p){
    let nextP = p.next
    p.next = last
    last = p
    p = nextP
  }

  return last
};
// @lc code=end

module.exports = { reverseList, arrayToList, listToArray }