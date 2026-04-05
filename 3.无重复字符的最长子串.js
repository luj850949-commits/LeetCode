/*
 * @lc app=leetcode.cn id=3 lang=javascript
 *
 * [3] 无重复字符的最长子串
 */

// @lc code=start
/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function(s) {
  let max = 1
  let now = 1
  const map = new Map()
  map.set(s[0], true)

  if(s.length === 0){
    max = 0
  }else if(s.length !== 1) {
    for(let fir = 0, sec = 1; fir < s.length && sec < s.length; fir++) {
      while(!map.has(s[sec]) && sec < s.length) {
        map.set(s[sec], true)
        now++
        max = max > now ? max : now
        sec++
      }
      map.delete(s[fir])
      now--
    }
  }

  return max
};
// @lc code=end

module.exports = lengthOfLongestSubstring