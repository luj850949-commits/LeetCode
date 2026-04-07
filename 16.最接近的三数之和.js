/*
 * @lc app=leetcode.cn id=16 lang=javascript
 *
 * [16] 最接近的三数之和
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var threeSumClosest = function(nums, target) {
  nums = nums.sort((a, b) => a - b)
  let sum = 0
  let near = 100000

  for(let fir = 0; fir < nums.length; fir++) {
    let sec = fir + 1
    let thr = nums.length - 1
    while(sec < thr) {
      const nowSum = nums[fir] + nums[sec] + nums[thr]
      const nowNear = nowSum < target ? target - nowSum : nowSum - target
      near = near < nowNear ? near : nowNear
      sum = near < nowNear ? sum : nowSum
      nowSum < target ? sec++ : thr--
    }
  }

  return sum
};
// @lc code=end

module.exports = threeSumClosest