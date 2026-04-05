const minSubArrayLen = require('./209.长度最小的子数组');

describe('LeetCode: minSubArrayLen 测试', () => {
    test('基础用例 1', () => {
        expect(minSubArrayLen(7, [2,3,1,2,4,3])).toEqual(2);
    });

    test('基础用例 2', () => {
        expect(minSubArrayLen(4, [1,4,4])).toEqual(1);
    });

    test('边界用例 1: 不存在符合条件的子数组', () => {
        expect(minSubArrayLen(11, [1,1,1,1,1,1,1,1])).toEqual(0);
    });

    test('边界用例 1: 空数组', () => {
        expect(minSubArrayLen(12, [])).toEqual(0);
    });
});