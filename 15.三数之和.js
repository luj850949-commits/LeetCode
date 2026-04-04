/*
 * @lc app=leetcode.cn id=15 lang=javascript
 *
 * [15] 三数之和
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var threeSum = function(nums) {
  let fin = []
  nums = nums.sort((a, b) => a - b)

  for(let i = 0; i < nums.length; i++) {
    if(i === 0 || nums[i] !== nums[i - 1]) {
      let t = nums.length - 1
      for(let n = i + 1; n < nums.length; n++) {
        if(n === i + 1 || nums[n] !== nums[n - 1]) {
          for(;t > n && nums[n] + nums[t] >= 0 - nums[i]; t--) {
            if(t === nums.length - 1 || nums[t] !== nums[t+1]) {
              if(nums[i] + nums[n] + nums[t] === 0) {
                fin.push([nums[i], nums[n], nums[t]])
              }
            }
          }
        }
      }
    }
  }

  return fin
};
// @lc code=end

module.exports = threeSum