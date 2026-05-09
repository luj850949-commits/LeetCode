/*
 * @lc app=leetcode.cn id=47 lang=javascript
 *
 * [47] 全排列 II
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var permuteUnique = function(nums) {
  nums.sort((a, b) => a - b)
  let arr = []

  var per = function(nowNum) {
    if(nowNum === nums.length) {
      arr.push(nums.slice())
      return
    }

    const used = new Set()
    for(let i = nowNum; i < nums.length; i++) {
      if(used.has(nums[i])) continue
      used.add(nums[i]);
      [nums[i], nums[nowNum]] = [nums[nowNum], nums[i]]
      per(nowNum + 1);
      [nums[i], nums[nowNum]] = [nums[nowNum], nums[i]]
    }
  }

  per(0)
  return arr
};
// @lc code=end

module.exports = permuteUnique