/*
 * @lc app=leetcode.cn id=1 lang=javascript
 *
 * [1] 两数之和
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
  const myMap = new Map()

  for(let i = 0; i < nums.length; i++) {
    if(myMap.has(target - nums[i])) {
      return [myMap.get(target - nums[i]), i]
    } else {
      myMap.set(nums[i], i)
    }
  }

  return []
};
// @lc code=end

module.exports = twoSum