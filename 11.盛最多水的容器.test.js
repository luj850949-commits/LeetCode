const maxArea = require('./11.盛最多水的容器');

describe('LeetCode: maxArea 测试', () => {
    test('基础用例 1', () => {
        expect(maxArea([1,8,6,2,5,4,8,3,7])).toEqual(49);
    });

    test('边界用例 1', () => {
        expect(maxArea([1,1])).toEqual(1);
    });
});