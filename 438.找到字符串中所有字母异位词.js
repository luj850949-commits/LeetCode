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
  let finArr = []
  let dif = 0

  if(s.length < p.length) return finArr

  for(let i = 0; i < p.length; i++) {
    sArr[s[i].charCodeAt() - 'a'.charCodeAt()]++
    sArr[p[i].charCodeAt() - 'a'.charCodeAt()]--
  }

  for(let i = 0; i < 26; i++) {
    if(sArr[i] !== 0) dif++
  }

  if(dif === 0) finArr.push(0)

  for(let i = 0; i < s.length - p.length; i++) {
    // 滑动窗口左端点，将要移除，如果等于1的话，移除后刚好为0
    if(sArr[s[i].charCodeAt() - 'a'.charCodeAt()] === 1) {
      dif--
    } else if(sArr[s[i].charCodeAt() - 'a'.charCodeAt()] === 0) {
      // 滑动窗口左端点，将要移除，如果等于0的话，移除后不为0
      dif++
    }
    sArr[s[i].charCodeAt() - 'a'.charCodeAt()]--
    
    // 滑动窗口右端点，将要添加，如果等于-1的话，添加后刚好为0
    if(sArr[s[i + p.length].charCodeAt() - 'a'.charCodeAt()] === -1) {
      dif--
    } else if(sArr[s[i + p.length].charCodeAt() - 'a'.charCodeAt()] === 0) {
      // 滑动窗口右端点，将要添加，如果等于0的话，添加后不为0
      dif++
    }
    sArr[s[i + p.length].charCodeAt() - 'a'.charCodeAt()]++

    if(dif === 0) finArr.push(i + 1)
  }

  return finArr
};
// @lc code=end

module.exports = findAnagrams