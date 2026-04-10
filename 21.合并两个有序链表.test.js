const { mergeTwoLists, arrayToList, listToArray } = require('./21.合并两个有序链表');

describe('LeetCode: mergeTwoLists 测试', () => {
    test('基础用例 1', () => {
        const list1 = arrayToList([1,2,4])
        const list2 = arrayToList([1,3,4])
        expect(listToArray(mergeTwoLists(list1, list2))).toEqual([1,1,2,3,4,4]);
    });

    test('边界用例 1： 两个空链表', () => {
        const list1 = arrayToList([])
        const list2 = arrayToList([])
        expect(listToArray(mergeTwoLists(list1, list2))).toEqual([]);
    });

    test('边界用例 2： 一个空链表', () => {
        const list1 = arrayToList([])
        const list2 = arrayToList([0])
        expect(listToArray(mergeTwoLists(list1, list2))).toEqual([0]);
    });
});