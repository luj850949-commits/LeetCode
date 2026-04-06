/*
 * @lc app=leetcode.cn id=11 lang=javascript
 *
 * [11] 盛最多水的容器
 */

// @lc code=start
/**
 * @param {number[]} height
 * @return {number}
 */
var maxArea = function(height) {
  let beg = 0
  let end = height.length - 1
  let max = 0

  while(beg < end) {
    const now = (end - beg) * Math.min(height[beg], height[end])
    max = Math.max(max, now)
    if(height[beg] < height[end]) beg++
    else end--
  }

  return max
};
// @lc code=end

module.exports = maxArea