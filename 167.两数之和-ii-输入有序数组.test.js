const twoSum = require('./167.两数之和-ii-输入有序数组');

describe('LeetCode: twoSum 测试', () => {
    test('基础用例 1', () => {
        expect(twoSum([2,7,11,15], 9)).toEqual([1, 2]);
    });

    test('基础用例 2', () => {
        expect(twoSum([2,3,4], 6)).toEqual([1, 3]);
    });

    test('基础用例 1', () => {
        expect(twoSum([-1,0], -1)).toEqual([1, 2]);
    });

    test('边界用例 1: 不存在答案返回[]', () => {
        expect(twoSum([-1, 0, 1, 2], 100)).toEqual([]);
    });
});