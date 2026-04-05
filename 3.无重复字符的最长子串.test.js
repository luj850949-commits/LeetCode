const lengthOfLongestSubstring = require('./3.无重复字符的最长子串');

describe('LeetCode: lengthOfLongestSubstring 测试', () => {
    test('基础用例 1', () => {
        expect(lengthOfLongestSubstring('abcabcbb')).toEqual(3);
    });

    test('基础用例 2', () => {
        expect(lengthOfLongestSubstring('pwwkew')).toEqual(3);
    });

    test('边界用例 1: 所有字符都一样', () => {
        expect(lengthOfLongestSubstring('bbbbb')).toEqual(1);
    });

    test('边界用例 2: 空字符串', () => {
        expect(lengthOfLongestSubstring('')).toEqual(0);
    });
});