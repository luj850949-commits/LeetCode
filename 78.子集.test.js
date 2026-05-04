const subsets = require('./78.子集');

describe('LeetCode: subsets 测试', () => {
    const sortResult = (arr) => {
      return arr
        .map(item => [...item].sort((a, b) => a - b)) // 子集内部排序
        .sort((a, b) => { // 外部大数组排序
          if (a.length !== b.length) return a.length - b.length;
          return a.join().localeCompare(b.join());
        });
    };

    test('示例 1: nums = [1, 2, 3]', () => {
      const nums = [1, 2, 3];
      const result = subsets(nums);
      const expected = [[], [1], [2], [1, 2], [3], [1, 3], [2, 3], [1, 2, 3]];
      
      expect(sortResult(result)).toEqual(sortResult(expected));
    });

    test('示例 2: nums = [0]', () => {
      const nums = [0];
      const result = subsets(nums);
      const expected = [[], [0]];
      
      expect(sortResult(result)).toEqual(sortResult(expected));
    });

    test('边界用例: nums = [1, 2]', () => {
      const nums = [1, 2];
      const result = subsets(nums);
      const expected = [[], [1], [2], [1, 2]];
      
      expect(sortResult(result)).toEqual(sortResult(expected));
    });

    test('空数组处理: nums = []', () => {
      // 根据 LeetCode 约束 nums.length >= 1，但处理边界是好习惯
      const nums = [];
      const result = subsets(nums);
      const expected = [[]];
      
      expect(result).toEqual(expected);
    });
});