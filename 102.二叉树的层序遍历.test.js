const { levelOrder, arrayToTree } = require('./102.二叉树的层序遍历');

describe('LeetCode: levelOrder 测试', () => {
    test('示例 1: 标准二叉树', () => {
      const rootArray = [3, 9, 20, null, null, 15, 7];
      const root = arrayToTree(rootArray);
      const expected = [[3], [9, 20], [15, 7]];
      
      expect(levelOrder(root)).toEqual(expected);
    });

    test('示例 2: 只有一个节点的树', () => {
      const rootArray = [1];
      const root = arrayToTree(rootArray);
      const expected = [[1]];
      
      expect(levelOrder(root)).toEqual(expected);
    });

    test('示例 3: 空树', () => {
      const rootArray = [];
      const root = arrayToTree(rootArray);
      const expected = [];
      
      expect(levelOrder(root)).toEqual(expected);
    });

    test('额外用例: 非完全二叉树', () => {
      // 结构: 1 -> [2, 3] -> [4, null, null, 5]
      const rootArray = [1, 2, 3, 4, null, null, 5];
      const root = arrayToTree(rootArray);
      const expected = [[1], [2, 3], [4, 5]];
      
      expect(levelOrder(root)).toEqual(expected);
    });

    test('额外用例: 只有左子树的斜树', () => {
      const rootArray = [1, 2, null, 3, null, 4];
      const root = arrayToTree(rootArray);
      const expected = [[1], [2], [3], [4]];
      
      expect(levelOrder(root)).toEqual(expected);
    });
});