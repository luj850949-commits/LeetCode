const { lowestCommonAncestor, arrayToTree } = require('./236.二叉树的最近公共祖先');

describe('LeetCode: lowestCommonAncestor 测试', () => {
    /**
     * 辅助函数：在树中通过值寻找节点引用
     * 因为 LCA 题目要求传入的是 TreeNode 对象
     */
    const findNode = (root, val) => {
      if (!root || root.val === val) return root;
      return findNode(root.left, val) || findNode(root.right, val);
    };

    test('示例 1: p=5, q=1, LCA 应为 3', () => {
      const nums = [3, 5, 1, 6, 2, 0, 8, null, null, 7, 4];
      const root = arrayToTree(nums);
      const p = findNode(root, 5);
      const q = findNode(root, 1);
      
      const result = lowestCommonAncestor(root, p, q);
      expect(result.val).toBe(3);
    });

    test('示例 2: p=5, q=4, LCA 应为 5 (p本身就是祖先)', () => {
      const nums = [3, 5, 1, 6, 2, 0, 8, null, null, 7, 4];
      const root = arrayToTree(nums);
      const p = findNode(root, 5);
      const q = findNode(root, 4);
      
      const result = lowestCommonAncestor(root, p, q);
      expect(result.val).toBe(5);
    });

    test('示例 3: p=1, q=2, LCA 应为 1', () => {
      const nums = [1, 2];
      const root = arrayToTree(nums);
      const p = findNode(root, 1);
      const q = findNode(root, 2);
      
      const result = lowestCommonAncestor(root, p, q);
      expect(result.val).toBe(1);
    });

    test('额外用例: 深度较大的树 p=7, q=0', () => {
      const nums = [3, 5, 1, 6, 2, 0, 8, null, null, 7, 4];
      const root = arrayToTree(nums);
      const p = findNode(root, 7);
      const q = findNode(root, 0);
      
      // 7 属于 5 的子树，0 属于 1 的子树，LCA 应为 3
      const result = lowestCommonAncestor(root, p, q);
      expect(result.val).toBe(3);
    });

    test('边界用例: 同一个父节点下的左右子节点 p=6, q=2', () => {
      const nums = [3, 5, 1, 6, 2, 0, 8, null, null, 7, 4];
      const root = arrayToTree(nums);
      const p = findNode(root, 6);
      const q = findNode(root, 2);
      
      const result = lowestCommonAncestor(root, p, q);
      expect(result.val).toBe(5);
    });
});