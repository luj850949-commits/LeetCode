/*
 * @lc app=leetcode.cn id=14 lang=javascript
 *
 * [14] 最长公共前缀
 */

// @lc code=start
/**
 * @param {string[]} strs
 * @return {string}
 */
var longestCommonPrefix = function(strs) {
  let strSame = strs[0]

  for(let i = 1; i < strs.length && strSame !== ""; i++) {
    let strLength = 0
    for(let n = 0; n < strSame.length && n < strs[i].length; n++) {
      if(strSame[n] === strs[i][n]) {
        strLength++
      }else{
        break
      }
    }
    strSame = strSame.slice(0, strLength)
  }

  return strSame
};
// @lc code=end

module.exports = longestCommonPrefix