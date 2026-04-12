const { TreeNode, arrayToTree, maxDepth } = require('./104.二叉树的最大深度');

describe('LeetCode: maxDepth 测试', () => {
    test('基础用例 1：常规二叉树', () => {
        const root = arrayToTree([3, 9, 20, null, null, 15, 7]);
        expect(maxDepth(root)).toBe(3);
    });

    test('基础用例 2：缺少子节点的树', () => {
        const root = arrayToTree([1, null, 2]);
        expect(maxDepth(root)).toBe(2);
    });

    test('边界用例 1：空树', () => {
        const root = arrayToTree([]);
        expect(maxDepth(root)).toBe(0);
    });

    test('边界用例 2：只有一个根节点的树', () => {
        const root = arrayToTree([0]);
        expect(maxDepth(root)).toBe(1);
    });

    test('综合用例：极度不平衡的单边树（链表化）', () => {
        const root = arrayToTree([1, 2, null, 3, null, 4, null]);
        expect(maxDepth(root)).toBe(4);
    });
});