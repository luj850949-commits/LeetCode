const permuteUnique = require('./47.全排列-ii');

describe('LeetCode: permuteUnique 测试', () => {
    // 辅助函数：对结果数组进行规范化排序，便于比较（忽略顺序）
    const normalize = (arr) => {
        // 先对每个排列内部排序（其实已经是顺序，但安全起见再排）
        const sortedInner = arr.map(perm => [...perm].sort((a, b) => a - b));
        // 然后整体按字典序排序
        sortedInner.sort((a, b) => {
            for (let i = 0; i < a.length; i++) {
                if (a[i] !== b[i]) return a[i] - b[i];
            }
            return 0;
        });
        return sortedInner;
    };

    test('示例 1：一般情况，有重复数字', () => {
        const nums = [1, 1, 2];
        const expected = [[1, 1, 2], [1, 2, 1], [2, 1, 1]];
        const actual = permuteUnique(nums);
        expect(normalize(actual)).toEqual(normalize(expected));
    });

    test('示例 2：无重复数字，应返回全排列', () => {
        const nums = [1, 2, 3];
        const expected = [
            [1, 2, 3], [1, 3, 2],
            [2, 1, 3], [2, 3, 1],
            [3, 1, 2], [3, 2, 1]
        ];
        const actual = permuteUnique(nums);
        expect(normalize(actual)).toEqual(normalize(expected));
    });

    test('单个数字', () => {
        const nums = [1];
        const expected = [[1]];
        const actual = permuteUnique(nums);
        expect(normalize(actual)).toEqual(normalize(expected));
    });

    test('全部相同的数字', () => {
        const nums = [2, 2, 2];
        const expected = [[2, 2, 2]];
        const actual = permuteUnique(nums);
        expect(normalize(actual)).toEqual(normalize(expected));
    });

    test('两个数字，一个重复', () => {
        const nums = [1, 1];
        const expected = [[1, 1]];
        const actual = permuteUnique(nums);
        expect(normalize(actual)).toEqual(normalize(expected));
    });

    test('有多个重复数字', () => {
        const nums = [3, 3, 0, 3];
        // 手动计算所有不重复排列：四个位置，三个3和一个0，共有4种方案（0的位置决定）
        const expected = [
            [0, 3, 3, 3],
            [3, 0, 3, 3],
            [3, 3, 0, 3],
            [3, 3, 3, 0]
        ];
        const actual = permuteUnique(nums);
        expect(normalize(actual)).toEqual(normalize(expected));
    });

    test('空数组', () => {
        const nums = [];
        const expected = [[]];
        const actual = permuteUnique(nums);
        expect(normalize(actual)).toEqual(normalize(expected));
    });

    test('力扣提交报错案例', () => {
        const nums = [0,1,0,0,9];
        const expected = [[0,0,0,1,9],[0,0,0,9,1],[0,0,1,0,9],[0,0,1,9,0],[0,0,9,0,1],[0,0,9,1,0],[0,1,0,0,9],[0,1,0,9,0],[0,1,9,0,0],[0,9,0,0,1],[0,9,0,1,0],[0,9,1,0,0],[1,0,0,0,9],[1,0,0,9,0],[1,0,9,0,0],[1,9,0,0,0],[9,0,0,0,1],[9,0,0,1,0],[9,0,1,0,0],[9,1,0,0,0]];
        const actual = permuteUnique(nums);
        expect(normalize(actual)).toEqual(normalize(expected));
    });
});