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
  let sum = nums[0] || 0
  let min = 10000000000
  let isOK = false
  let now = 1

  for(let fir = 0, sec = 1; fir < nums.length && fir < sec; fir++) {
    while(sum < target && sec < nums.length) {
      sum += nums[sec]
      sec++
      now++
    }
    if(sum >= target){
      isOK = true
      min = min > now ? now : min
      now --
      sum = sum - nums[fir]
    }
  }

  return isOK ? min : 0
};
// @lc code=end

module.exports = minSubArrayLen