const findAnagrams = require('./438.找到字符串中所有字母异位词');

describe('LeetCode: findAnagrams 测试', () => {
    test('基础用例 1', () => {
        expect(findAnagrams("cbaebabacd", "abc")).toEqual([0,6]);
    });

    test('基础用例 2', () => {
        expect(findAnagrams("abab", "ab")).toEqual([0, 1, 2]);
    });

    test('边界用例 1: s比p短', () => {
        expect(findAnagrams("ab", "ababc")).toEqual([]);
    });
});