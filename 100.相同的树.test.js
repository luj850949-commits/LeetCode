const { isSameTree, TreeNode, arrayToTree } = require('./100.相同的树');

describe('LeetCode: isSameTree 测试', () => {
    test('基础用例 1：完全相同的树', () => {
        // p = [1, 2, 3], q = [1, 2, 3]
        const p = arrayToTree([1, 2, 3]);
        const q = arrayToTree([1, 2, 3]);
        expect(isSameTree(p, q)).toBe(true);
    });

    test('基础用例 2：结构不同（左偏 vs 右偏）', () => {
        // p = [1, 2], q = [1, null, 2]
        const p = arrayToTree([1, 2]);
        const q = arrayToTree([1, null, 2]);
        expect(isSameTree(p, q)).toBe(false);
    });

    test('基础用例 3：结构相同，但节点值不同', () => {
        // p = [1, 2, 1], q = [1, 1, 2]
        const p = arrayToTree([1, 2, 1]);
        const q = arrayToTree([1, 1, 2]);
        expect(isSameTree(p, q)).toBe(false);
    });

    test('边界用例 1：两棵树都是空树', () => {
        const p = arrayToTree([]);
        const q = arrayToTree([]);
        expect(isSameTree(p, q)).toBe(true); // 两个空树被认为是相同的
    });

    test('边界用例 2：一棵树为空，另一棵不是', () => {
        const p = arrayToTree([]);
        const q = arrayToTree([0]);
        expect(isSameTree(p, q)).toBe(false);
    });
});