const combinationSum = require('./39.组合总和');

describe('LeetCode: combinationSum 测试', () => {
  /**
   * 辅助函数：将二维数组（所有的组合）进行深度排序。
   * 1. 将每一个组合内部的数字从小到大排序。
   * 2. 将所有组合根据长度和内容进行排序。
   * 这样可以完美避开因回溯顺序不同导致 Jest 报错的问题。
   */
  const normalize = (arr) => {
    return arr
      .map(item => [...item].sort((a, b) => a - b))
      .sort((a, b) => {
        if (a.length !== b.length) return a.length - b.length;
        return a.join().localeCompare(b.join());
      });
  };

  test('示例 1: candidates = [2,3,6,7], target = 7', () => {
    const candidates = [2, 3, 6, 7];
    const target = 7;
    const result = combinationSum(candidates, target);
    const expected = [[2, 2, 3], [7]];
    
    expect(normalize(result)).toEqual(normalize(expected));
  });

  test('示例 2: candidates = [2,3,5], target = 8', () => {
    const candidates = [2, 3, 5];
    const target = 8;
    const result = combinationSum(candidates, target);
    const expected = [[2, 2, 2, 2], [2, 3, 3], [3, 5]];
    
    expect(normalize(result)).toEqual(normalize(expected));
  });

  test('示例 3: candidates = [2], target = 1', () => {
    const candidates = [2];
    const target = 1;
    const result = combinationSum(candidates, target);
    const expected = [];
    
    expect(normalize(result)).toEqual(normalize(expected));
  });

  test('额外用例: 只有一个元素且刚好能被整除', () => {
    const candidates = [3];
    const target = 9;
    const result = combinationSum(candidates, target);
    const expected = [[3, 3, 3]];
    
    expect(normalize(result)).toEqual(normalize(expected));
  });

  test('边界用例: 检查多次调用是否会造成状态污染', () => {
    // 确保你的全局变量（如结果数组 arr）在每次调用主函数时都会被正确重置
    const res1 = combinationSum([2, 3], 5);
    const res2 = combinationSum([2, 3], 5);
    const expected = [[2, 3]];

    expect(normalize(res1)).toEqual(normalize(expected));
    expect(normalize(res2)).toEqual(normalize(expected));
  });
});