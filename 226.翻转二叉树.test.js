const { invertTree, TreeNode, arrayToTree, treeToArray } = require('./226.翻转二叉树');

describe('LeetCode: invertTree 测试', () => {
    test('基础用例 1：完美二叉树', () => {
        // 输入:
        //      4
        //    /   \
        //   2     7
        //  / \   / \
        // 1   3 6   9
        const root = arrayToTree([4, 2, 7, 1, 3, 6, 9]);
        const invertedRoot = invertTree(root);
        
        // 预期输出: [4, 7, 2, 9, 6, 3, 1]
        expect(treeToArray(invertedRoot)).toEqual([4, 7, 2, 9, 6, 3, 1]);
    });

    test('基础用例 2：普通二叉树', () => {
        // 输入: [2, 1, 3]
        const root = arrayToTree([2, 1, 3]);
        const invertedRoot = invertTree(root);
        
        // 预期输出: [2, 3, 1]
        expect(treeToArray(invertedRoot)).toEqual([2, 3, 1]);
    });

    test('边界用例 1：空树', () => {
        const root = arrayToTree([]);
        const invertedRoot = invertTree(root);
        
        expect(treeToArray(invertedRoot)).toEqual([]);
    });

    test('边界用例 2：不对称的树', () => {
        // 输入:
        //      1
        //     /
        //    2
        // 即数组 [1, 2]
        const root = arrayToTree([1, 2]);
        const invertedRoot = invertTree(root);
        
        // 翻转后应该是:
        //      1
        //       \
        //        2
        // 即数组 [1, null, 2]
        expect(treeToArray(invertedRoot)).toEqual([1, null, 2]);
    });
});