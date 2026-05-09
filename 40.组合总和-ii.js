/*
 * @lc app=leetcode.cn id=40 lang=javascript
 *
 * [40] 组合总和 II
 */

// @lc code=start
/**
 * @param {number[]} candidates
 * @param {number} target
 * @return {number[][]}
 */
var combinationSum2 = function(candidates, target) {
  candidates.sort((a, b) => a - b)
  let arr = []

  var com = function(nowNum, nowTar, nowArr) {
    if(nowTar === target) {
      arr.push(nowArr.slice())
      return
    }
    if(nowTar > target || nowNum === candidates.length) {
      return
    }

    for(let i = nowNum; i < candidates.length; i++) {
      if(i > nowNum && candidates[i] === candidates[i - 1]) continue
      nowArr.push(candidates[i])
      com(i + 1, nowTar + candidates[i], nowArr)
      nowArr.pop()
    }
  }

  com(0, 0, [])
  return arr
};
// @lc code=end

module.exports = combinationSum2