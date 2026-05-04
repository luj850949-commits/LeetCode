/*
 * @lc app=leetcode.cn id=78 lang=javascript
 *
 * [78] 子集
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var subsets = function(nums) {
  let now = []
  let arr = []

  for(let i = 0; i < (1 << nums.length); i++) {
    for(let t = 0; t < nums.length; t++) {
      if(i & (1 << t)) {
        now.push(nums[t])
      }
    }
    arr.push(now)
    now = []
  }

  return arr
};
// @lc code=end

module.exports = subsets