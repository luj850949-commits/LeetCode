const { TreeNode, arrayToTree, isSymmetric } = require('./101.对称二叉树');

describe('LeetCode: isSymmetric 测试', () => {
    test('示例 1：[1,2,2,3,4,4,3] 应该是对称的，返回 true', () => {
        const root = arrayToTree([1, 2, 2, 3, 4, 4, 3]);
        expect(isSymmetric(root)).toBe(true);
    });

    test('示例 2：[1,2,2,null,3,null,3] 不对称，返回 false', () => {
        const root = arrayToTree([1, 2, 2, null, 3, null, 3]);
        expect(isSymmetric(root)).toBe(false);
    });

    test('边界情况：单节点树 [1] 应该返回 true', () => {
        const root = arrayToTree([1]);
        expect(isSymmetric(root)).toBe(true);
    });

    test('结构对称但值不对称：[1,2,2,2,null,2] 应该返回 false', () => {
        const root = arrayToTree([1, 2, 2, 2, null, 2]);
        expect(isSymmetric(root)).toBe(false);
    });
});