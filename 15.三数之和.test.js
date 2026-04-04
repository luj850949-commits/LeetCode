const threeSum = require('./15.三数之和');

// 原理：先对每个小数组按数字大小升序，然后转成字符串，最后对外层数组按字符串升序
const normalize = (arr) => {
    return arr
        .map(subArr => subArr.sort((a, b) => a - b).join(','))
        .sort();
};

describe('LeetCode 15: 三数之和 测试', () => {

    test('基础用例 1：常规情况，有多个不同的三元组', () => {
        const result = threeSum([-1, 0, 1, 2, -1, -4]);
        const expected = [[-1, -1, 2], [-1, 0, 1]];
        expect(normalize(result)).toEqual(normalize(expected));
    });

    test('基础用例 2：找不到满足条件的三元组', () => {
        const result = threeSum([0, 1, 1]);
        const expected = [];
        expect(normalize(result)).toEqual(normalize(expected));
    });

    test('基础用例 3：第一次提交出错的案例', () => {
        const result = threeSum([-100,-70,-60,110,120,130,160]);
        const expected = [[-100, -60, 160], [-70, -60, 130]];
        expect(normalize(result)).toEqual(normalize(expected));
    });

    test('边界用例 1：数组全是 0 (测试去重逻辑)', () => {
        // 虽然有四个 0，但结果只能包含一个 [0, 0, 0]
        const result = threeSum([0, 0, 0, 0]);
        const expected = [[0, 0, 0]];
        expect(normalize(result)).toEqual(normalize(expected));
    });

    test('边界用例 2：数组元素过少', () => {
        const result = threeSum([1, 2]);
        const expected = [];
        expect(normalize(result)).toEqual(normalize(expected));
    });

    test('综合用例：大量重复元素 (测试双指针移动时的跳过逻辑)', () => {
        const result = threeSum([-2, 0, 0, 2, 2]);
        const expected = [[-2, 0, 2]];
        expect(normalize(result)).toEqual(normalize(expected));
    });

});