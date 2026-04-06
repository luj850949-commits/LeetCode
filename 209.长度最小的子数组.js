/*
 * @lc app=leetcode.cn id=209 lang=javascript
 *
 * [209] 长度最小的子数组
 */

// @lc code=start
/**
 * @param {number} target
 * @param {number[]} nums
 * @return {number}
 */
var minSubArrayLen = function(target, nums) {
  let sum = 0
  let lang = 1000000000
  let beg = 0
  let end = 0
  
  while(beg < nums.length && beg <= end) {
    while(sum < target && end < nums.length) {
      sum += nums[end]
      end++
    }
    if(end === nums.length && sum < target) break
    else {
      lang = lang < end - beg ? lang : end - beg
      sum -= nums[beg]
      beg++
    }
  }

  return lang === 1000000000 ? 0 : lang
};
// @lc code=end

module.exports = minSubArrayLen