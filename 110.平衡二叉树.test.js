const { isBalanced, arrayToTree } = require('./110.平衡二叉树');

describe('LeetCode: isBalanced 测试', () => {
    test('示例 1：[3,9,20,null,null,15,7] 是一棵平衡二叉树，返回 true', () => {
        const root = arrayToTree([3, 9, 20, null, null, 15, 7]);
        expect(isBalanced(root)).toBe(true);
    });

    test('示例 2：[1,2,2,3,3,null,null,4,4] 高度差大于 1，返回 false', () => {
        const root = arrayToTree([1, 2, 2, 3, 3, null, null, 4, 4]);
        expect(isBalanced(root)).toBe(false);
    });

    test('示例 3：空树被认为是平衡的，返回 true', () => {
        const root = arrayToTree([]);
        expect(isBalanced(root)).toBe(true);
    });

    test('边界情况：单节点树也是平衡的，返回 true', () => {
        const root = arrayToTree([1]);
        expect(isBalanced(root)).toBe(true);
    });

    test('边界情况：偏向一侧的链表状树 [1,2,null,3] 应该返回 false', () => {
        // 树结构：1 的左子节点是 2，2 的左子节点是 3
        const root = arrayToTree([1, 2, null, 3]);
        expect(isBalanced(root)).toBe(false);
    });
});