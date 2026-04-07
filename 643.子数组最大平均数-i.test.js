const findMaxAverage = require('./643.子数组最大平均数-i');

describe('LeetCode: findMaxAverage 测试', () => {
  test('基础用例 1：常规情况（包含正负数）', () => {
      expect(findMaxAverage([1, 12, -5, -6, 50, 3], 4)).toBe(12.75);
  });

  test('基础用例 2：数组只有一个元素，k = 1', () => {
      expect(findMaxAverage([5], 1)).toBe(5);
  });

  test('边界用例 1：数组长度刚好等于 k', () => {
      expect(findMaxAverage([4, 2, 1, 3], 4)).toBe(2.5);
  });

  test('边界用例 2：全负数数组（排雷测试）', () => {
      expect(findMaxAverage([-1, -2, -3, -4, -5], 2)).toBe(-1.5);
  });

  test('边界用例 3：k 比较大时的连续滑动', () => {
      expect(findMaxAverage([0, 1, 1, 3, 3], 3)).toBeCloseTo(2.33333, 5);
  });
});