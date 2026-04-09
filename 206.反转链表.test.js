const { reverseList, arrayToList, listToArray } = require('./206.反转链表');

describe('LeetCode: reverseList 测试', () => {
    test('基础用例 1', () => {
      const input = arrayToList([1, 2, 3, 4, 5]);
      const resultNode = reverseList(input);
      expect(listToArray(resultNode)).toEqual([5, 4, 3, 2, 1]);
    });

    test('基础用例 2', () => {
      const input = arrayToList([1,2]);
      const resultNode = reverseList(input);
      expect(listToArray(resultNode)).toEqual([2, 1]);
    });

    test('边界用例 1: 空链表', () => {
      const input = arrayToList([]);
      const resultNode = reverseList(input);
      expect(listToArray(resultNode)).toEqual([]);
    });
});