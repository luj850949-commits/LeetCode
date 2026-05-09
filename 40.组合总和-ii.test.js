const combinationSum2 = require('./40.组合总和-ii');

describe('LeetCode: combinationSum2 测试', () => {
    // 辅助函数：规范化结果（对每个子数组排序，再整体字典序排序），便于比较无序的结果
    const normalize = (arr) => {
        // 每个子数组先排序（其实回溯过程中生成的子数组已经是升序，但为了安全再排一次）
        const sortedInner = arr.map(sub => [...sub].sort((a, b) => a - b));
        // 整体按字典序排序（先按长度，再按元素）
        sortedInner.sort((a, b) => {
            if (a.length !== b.length) return a.length - b.length;
            for (let i = 0; i < a.length; i++) {
                if (a[i] !== b[i]) return a[i] - b[i];
            }
            return 0;
        });
        return sortedInner;
    };

    test('示例 1', () => {
        const candidates = [10, 1, 2, 7, 6, 1, 5];
        const target = 8;
        const expected = [[1, 1, 6], [1, 2, 5], [1, 7], [2, 6]];
        const actual = combinationSum2(candidates, target);
        expect(normalize(actual)).toEqual(normalize(expected));
    });

    test('示例 2', () => {
        const candidates = [2, 5, 2, 1, 2];
        const target = 5;
        const expected = [[1, 2, 2], [5]];
        const actual = combinationSum2(candidates, target);
        expect(normalize(actual)).toEqual(normalize(expected));
    });

    test('单个数字，正好等于目标', () => {
        const candidates = [1];
        const target = 1;
        const expected = [[1]];
        const actual = combinationSum2(candidates, target);
        expect(normalize(actual)).toEqual(normalize(expected));
    });

    test('单个数字，不等于目标', () => {
        const candidates = [2];
        const target = 1;
        const expected = [];
        const actual = combinationSum2(candidates, target);
        expect(normalize(actual)).toEqual(normalize(expected));
    });

    test('重复数字，目标为 2，只能有一种组合 [1,1]', () => {
        const candidates = [1, 1];
        const target = 2;
        const expected = [[1, 1]];
        const actual = combinationSum2(candidates, target);
        expect(normalize(actual)).toEqual(normalize(expected));
    });

    test('包含重复数字的去重测试', () => {
        const candidates = [1, 2, 2, 2, 5];
        const target = 5;
        const expected = [[1, 2, 2], [5]];
        const actual = combinationSum2(candidates, target);
        expect(normalize(actual)).toEqual(normalize(expected));
    });

    test('没有符合条件的组合', () => {
        const candidates = [2, 3, 4];
        const target = 1;
        const expected = [];
        const actual = combinationSum2(candidates, target);
        expect(normalize(actual)).toEqual(normalize(expected));
    });

    test('所有数字加起来都小于目标', () => {
        const candidates = [1, 2];
        const target = 4;
        const expected = [];
        const actual = combinationSum2(candidates, target);
        expect(normalize(actual)).toEqual(normalize(expected));
    });

    test('空数组，目标大于 0', () => {
        const candidates = [];
        const target = 5;
        const expected = [];
        const actual = combinationSum2(candidates, target);
        expect(normalize(actual)).toEqual(normalize(expected));
    });
});