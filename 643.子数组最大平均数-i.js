/*
 * @lc app=leetcode.cn id=643 lang=javascript
 *
 * [643] 子数组最大平均数 I
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var findMaxAverage = function(nums, k) {
  let beg = 0
  let end = 0 + k
  let now = 0
  for(let i = 0; i < k; i++) {
    now += nums[i]
  }
  let max = now

  while(end < nums.length) {
    now -= nums[beg]
    now += nums[end]
    max = max > now ? max : now
    beg++
    end++
  }

  return max/k
};
// @lc code=end

module.exports = findMaxAverage