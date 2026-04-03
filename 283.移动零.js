/*
 * @lc app=leetcode.cn id=283 lang=javascript
 *
 * [283] 移动零
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var moveZeroes = function(nums) {
  let slow = 0

  for(let fast = 0; fast < nums.length; fast++) {
    if(nums[fast] !== 0) {
      nums[slow] = nums[fast]
      slow++
    }
  }
  for(; slow < nums.length; slow++) {
    nums[slow] = 0
  }

  return nums
};
// @lc code=end

module.exports = moveZeroes