const subsetsWithDup = require('./90.子集-ii');

describe('LeetCode: subsetsWithDup 测试', () => {
  /**
   * 辅助函数：将二维数组（所有的子集）进行深度排序。
   * 1. 将每一个子集内部的数字从小到大排序。
   * 2. 将所有子集先按长度排序，长度相同时按内容字符串排序。
   */
  const normalize = (arr) => {
    return arr
      .map(item => [...item].sort((a, b) => a - b))
      .sort((a, b) => {
        if (a.length !== b.length) return a.length - b.length;
        return a.join().localeCompare(b.join());
      });
  };

  test('示例 1: nums = [1, 2, 2]', () => {
    const nums = [1, 2, 2];
    const result = subsetsWithDup(nums);
    const expected = [[], [1], [1, 2], [1, 2, 2], [2], [2, 2]];
    
    expect(normalize(result)).toEqual(normalize(expected));
  });

  test('示例 2: nums = [0]', () => {
    const nums = [0];
    const result = subsetsWithDup(nums);
    const expected = [[], [0]];
    
    expect(normalize(result)).toEqual(normalize(expected));
  });

  test('重复数字较多: nums = [4, 4, 4, 1, 4]', () => {
    const nums = [4, 4, 4, 1, 4];
    const result = subsetsWithDup(nums);
    // 包含 1 的子集：[1], [1,4], [1,4,4], [1,4,4,4], [1,4,4,4,4]
    // 不包含 1 的子集：[], [4], [4,4], [4,4,4], [4,4,4,4]
    const expected = [
      [], [1], [4], [1, 4], [4, 4], [1, 4, 4], [4, 4, 4], [1, 4, 4, 4], [4, 4, 4, 4], [1, 4, 4, 4, 4]
    ];
    
    expect(normalize(result)).toEqual(normalize(expected));
  });

  test('边界用例: 空数组处理', () => {
    // 根据题意 nums.length >= 1，但处理边界是良好的习惯
    const nums = [];
    const result = subsetsWithDup(nums);
    const expected = [[]];
    
    expect(normalize(result)).toEqual(normalize(expected));
  });

  test('状态污染检查: 连续调用', () => {
    // 检查是否因为使用了全局变量导致第二次调用结果出错
    const res1 = subsetsWithDup([1]);
    const res2 = subsetsWithDup([1]);
    
    expect(normalize(res1)).toEqual(normalize([[], [1]]));
    expect(normalize(res2)).toEqual(normalize([[], [1]]));
  });
});