/*
 * @lc app=leetcode.cn id=387 lang=javascript
 *
 * [387] 字符串中的第一个唯一字符
 */

// @lc code=start
/**
 * @param {string} s
 * @return {number}
 */
var firstUniqChar = function(s) {
  const map = new Map()
  const finMap = new Map()

  for (let i = 0; i < s.length; i++) {
    if(map.has(s[i])){
      finMap.has(s[i]) ? finMap.delete(s[i]) : true
    }else{
      map.set(s[i], true)
      finMap.set(s[i], i)
    }
  }
  
  return finMap.size ? finMap.values().next().value : -1 
};
// @lc code=end

module.exports = firstUniqChar