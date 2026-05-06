/*
 * @lc app=leetcode.cn id=39 lang=javascript
 *
 * [39] 组合总和
 */

// @lc code=start
/**
 * @param {number[]} candidates
 * @param {number} target
 * @return {number[][]}
 */
var combinationSum = function(candidates, target) {
  let arr = []
  candidates.sort((a, b) => a - b)

  var com = function(nowNum, nowArr, nowTar) {
    if(nowTar === target) {
      arr.push(nowArr.slice())
      return
    }
    if(nowNum === candidates.length || nowTar > target) {
      return
    }

    // 不选择当前元素
    com(nowNum + 1, nowArr, nowTar)
    // 选择当前元素
    nowArr.push(candidates[nowNum])
    com(nowNum, nowArr, nowTar + candidates[nowNum])
    // 回溯
    nowArr.pop()
  }

  com(0, [], 0)
  return arr
};
// @lc code=end

module.exports = combinationSum