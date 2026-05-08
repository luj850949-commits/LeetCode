/*
 * @lc app=leetcode.cn id=90 lang=javascript
 *
 * [90] 子集 II
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var subsetsWithDup = function(nums) {
  nums.sort((a, b) => a - b)
  let arr = []

  var sub = function(nowNum, nowArr) {
    arr.push(nowArr.slice())

    for(let i = nowNum; i < nums.length; i++) {
      if(i > nowNum && nums[i] === nums[i - 1]) continue
      nowArr.push(nums[i])
      sub(i + 1, nowArr)
      // 回溯
      nowArr.pop()
    }
  }

  sub(0, [])
  return arr
};
// @lc code=end

module.exports = subsetsWithDup