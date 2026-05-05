const permute = require('./46.全排列');

describe('LeetCode: permute 测试', () => {
  const normalize = (arr) => {
    return [...arr].sort((a, b) => a.join().localeCompare(b.join()));
  };

  test('示例 1: nums = [1, 2, 3]', () => {
    const nums = [1, 2, 3];
    const result = permute(nums);
    const expected = [
      [1, 2, 3], [1, 3, 2],
      [2, 1, 3], [2, 3, 1],
      [3, 1, 2], [3, 2, 1]
    ];
    
    expect(normalize(result)).toEqual(normalize(expected));
  });

  test('示例 2: nums = [0, 1]', () => {
    const nums = [0, 1];
    const result = permute(nums);
    const expected = [
      [0, 1], [1, 0]
    ];
    
    expect(normalize(result)).toEqual(normalize(expected));
  });

  test('示例 3: nums = [1]', () => {
    const nums = [1];
    const result = permute(nums);
    const expected = [[1]];
    
    expect(normalize(result)).toEqual(normalize(expected));
  });

  test('边界用例: 重复调用检查', () => {
    // 确保你的全局/闭包变量在多次调用中不会互相污染
    const res1 = permute([1, 2]);
    const res2 = permute([3, 4]);

    expect(normalize(res1)).toEqual(normalize([[1, 2], [2, 1]]));
    expect(normalize(res2)).toEqual(normalize([[3, 4], [4, 3]]));
  });
});