/*
 * @lc app=leetcode.cn id=21 lang=javascript
 *
 * [21] 合并两个有序链表
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
    while (curr) {
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
 * @param {ListNode} list1
 * @param {ListNode} list2
 * @return {ListNode}
 */
var mergeTwoLists = function(list1, list2) {
  const list3 = new ListNode()
  let p = list3

  while(list1 || list2) {
    if(!list1) {
      p.next = list2
      break
    }
    if(!list2) {
      p.next = list1
      break
    }
    if(list1.val < list2.val) {
      p.next = list1
      p = p.next
      list1 = list1.next
    } else {
      p.next = list2
      p = p.next
      list2 = list2.next
    }
  }

  return list3.next
};
// @lc code=end

module.exports = {arrayToList, listToArray , mergeTwoLists}