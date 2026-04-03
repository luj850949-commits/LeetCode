/*
 * @lc app=leetcode.cn id=125 lang=javascript
 *
 * [125] 验证回文串
 */

// @lc code=start
/**
 * @param {string} s
 * @return {boolean}
 */
var isPalindrome = function(s) {
  s = s.toLowerCase()
  const strRule = /[^0-9a-zA-Z]/g
  s = s.replace(strRule, '')
  let isOK = true

  for(let fir = 0, fin = s.length - 1; fir < fin && isOK; fir++, fin--) {
    isOK = s[fir] === s[fin] ? true : false
  }
  return isOK
};
// @lc code=end

module.exports = isPalindrome