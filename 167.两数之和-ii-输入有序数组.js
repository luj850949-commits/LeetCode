/*
 * @lc app=leetcode.cn id=167 lang=javascript
 *
 * [167] 两数之和 II - 输入有序数组
 */

// @lc code=start
/**
 * @param {number[]} numbers
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(numbers, target) {
  // 双指针，一个头一个尾，大了尾左移，小了头右移，时间复杂度O(n)
  let beg = 0
  let end = numbers.length - 1
  let fin = []

  while(beg < end) {
    if(numbers[beg] + numbers[end] === target) {
      fin = [beg + 1, end + 1]
      break
    }else if(numbers[beg] + numbers[end] < target) {
      beg++
    }else{
      end--
    }
  }

  return fin
};
// @lc code=end

module.exports = twoSum