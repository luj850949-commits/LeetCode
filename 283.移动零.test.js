const moveZeroes = require('./283.移动零');

describe('LeetCode: moveZeroes 测试', () => {
    test('基础用例 1', () => {
        expect(moveZeroes([0,1,0,3,12])).toEqual([1,3,12,0,0]);
    });

    test('边界用例 1', () => {
        expect(moveZeroes([0])).toEqual([0]);
    });
});