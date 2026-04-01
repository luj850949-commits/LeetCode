/*
 * @lc app=leetcode.cn id=349 lang=javascript
 *
 * [349] 两个数组的交集
 */

// @lc code=start
/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
var intersection = function(nums1, nums2) {
  const map = new Map()
  const nums3 = []

  for(let i = 0; i < nums1.length; i++) {
    if(!map.has(nums1[i])) map.set(nums1[i], true)
  }
  for(let i = 0; i < nums2.length; i++) {
    if(map.has(nums2[i])){
      nums3.push(nums2[i])
      map.delete(nums2[i])
    }
  }

  return nums3
};
// @lc code=end

module.exports = intersection