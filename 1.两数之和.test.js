const twoSum = require('./1.两数之和'); 

describe('LeetCode 1: 两数之和 测试', () => {
    
    test('应该能找到正常的两个数字', () => {
        expect(twoSum([2, 7, 11, 15], 9)).toEqual([0, 1]);
    });

    test('数组乱序时也能找到', () => {
        expect(twoSum([3, 2, 4], 6)).toEqual([1, 2]);
    });

    test('数组中有两个相同的数字', () => {
        expect(twoSum([3, 3], 6)).toEqual([0, 1]);
    });
    
    test('找不到目标值时应返回空数组', () => {
        expect(twoSum([1, 2, 3], 10)).toEqual([]);
    });

});