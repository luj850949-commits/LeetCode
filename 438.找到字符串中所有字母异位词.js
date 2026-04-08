/*
 * @lc app=leetcode.cn id=438 lang=javascript
 *
 * [438] 找到字符串中所有字母异位词
 */

// @lc code=start
/**
 * @param {string} s
 * @param {string} p
 * @return {number[]}
 */
var findAnagrams = function(s, p) {
  const sArr = new Array(26).fill(0)
  const pArr = new Array(26).fill(0)
  let arr = []

  if(s.length < p.length) return arr

  for(let i = 0; i < p.length; i++) {
    sArr[s[i].charCodeAt() - 'a'.charCodeAt()]++
    pArr[p[i].charCodeAt() - 'a'.charCodeAt()]++
  }

  if(sArr.toString() === pArr.toString()) arr.push(0)

  for(let i = p.length; i < s.length; i++) {
    sArr[s[i - p.length].charCodeAt() - 'a'.charCodeAt()]--
    sArr[s[i].charCodeAt() - 'a'.charCodeAt()]++
    if(sArr.toString() === pArr.toString()) arr.push(i - p.length + 1)
  }

  return arr
};
// @lc code=end

module.exports = findAnagrams