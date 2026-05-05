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
  let arr = []
  let now = []

  var sub = function(nowNum) {
    if(nowNum === nums.length) {
      arr.push(now.slice())
      return
    }
    now.push(nums[nowNum])
    sub(nowNum + 1)
    now.pop(now.length - 1)
    sub(nowNum + 1)
  }
  sub(0)

  return arr
};
// @lc code=end

module.exports = subsets