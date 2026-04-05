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

  for(let fir = 0; fir < nums.length; fir++) {
    if (fir === 0 || nums[fir] !== nums[fir - 1]) {
      let thr = nums.length - 1
      for(let sec = fir + 1; sec < thr; sec++) {
        if(sec === fir + 1 || nums[sec] !== nums[sec - 1]) {
          for(;thr > sec && nums[thr] >= (0 - nums[fir] - nums[sec]); thr--) {
            if(thr === (nums.length - 1) || nums[thr] !== nums[thr + 1]) {
              if(nums[fir] + nums[sec] + nums[thr] === 0) {
                fin.push([nums[fir], nums[sec], nums[thr]])
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