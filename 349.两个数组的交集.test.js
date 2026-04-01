const intersection = require('./349.两个数组的交集'); 

describe('LeetCode 349: 两个数组的交集 测试', () => {
    
    test('基础用例 1：简单的交集', () => {
        const result = intersection([1, 2, 2, 1], [2, 2]);
        // 使用 .sort() 规避题目“任意顺序返回”带来的测试干扰
        expect(result.sort()).toEqual([2].sort());
    });

    test('基础用例 2：乱序且有多个重复元素的交集', () => {
        const result = intersection([4, 9, 5], [9, 4, 9, 8, 4]);
        expect(result.sort()).toEqual([9, 4].sort());
    });

    test('边界用例 1：完全没有交集', () => {
        const result = intersection([1, 2, 3], [4, 5, 6]);
        expect(result.sort()).toEqual([]);
    });

    test('边界用例 2：其中一个是空数组', () => {
        const result = intersection([], [1, 2, 3]);
        expect(result.sort()).toEqual([]);
    });

    test('边界用例 3：两个数组完全相同', () => {
        const result = intersection([7, 8, 9], [7, 8, 9]);
        expect(result.sort()).toEqual([7, 8, 9].sort());
    });

    test('边界用例 4：交集结果必须是唯一的（去重测试）', () => {
        // 虽然两个数组里都有多个 1，但结果只能包含一个 1
        const result = intersection([1, 1, 1], [1, 1, 1]);
        expect(result.sort()).toEqual([1].sort());
    });

});