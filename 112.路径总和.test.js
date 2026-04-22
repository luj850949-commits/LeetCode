const { hasPathSum, arrayToTree } = require('./112.路径总和');

describe('LeetCode: hasPathSum 测试', () => {
    test('示例 1：存在目标和为 22 的路径 (5->4->11->2)，返回 true', () => {
        const root = arrayToTree([5, 4, 8, 11, null, 13, 4, 7, 2, null, null, null, 1]);
        expect(hasPathSum(root, 22)).toBe(true);
    });

    test('示例 2：不存在目标和为 5 的路径，返回 false', () => {
        const root = arrayToTree([1, 2, 3]);
        expect(hasPathSum(root, 5)).toBe(false);
    });

    test('示例 3：空树，无论目标和是多少都应该返回 false', () => {
        const root = arrayToTree([]);
        expect(hasPathSum(root, 0)).toBe(false);
    });

    test('边界情况 (易错点)：必须是到叶子节点才算数，[1, 2] 找和为 1 应该返回 false', () => {
        const root = arrayToTree([1, 2]);
        // 节点 1 虽然值是 1，但它不是叶子节点，合法的路径只有 1->2 (和为 3)
        expect(hasPathSum(root, 1)).toBe(false);
    });

    test('包含负数的情况：[-2, null, -3] 找和为 -5 应该返回 true', () => {
        const root = arrayToTree([-2, null, -3]);
        expect(hasPathSum(root, -5)).toBe(true);
    });
});