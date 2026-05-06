/*
 * @lc app=leetcode.cn id=46 lang=javascript
 *
 * [46] 全排列
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var permute = function(nums) {
  let arr = []

  var per = function(nowNum) {
    if(nowNum === nums.length) {
      arr.push(nums.slice())
      return
    }
    for(let i = nowNum; i < nums.length; i++) {
      [nums[i], nums[nowNum]] = [nums[nowNum], nums[i]]
      per(nowNum + 1);
      [nums[i], nums[nowNum]] = [nums[nowNum], nums[i]]
    }
  }

  per(0)
  return arr
};
// @lc code=end

module.exports = permute