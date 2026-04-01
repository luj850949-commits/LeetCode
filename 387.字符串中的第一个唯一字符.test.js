const firstUniqChar = require('./387.字符串中的第一个唯一字符');

describe('LeetCode: firstUniqChar 测试', () => {
    test('基础用例 1', () => {
        expect(firstUniqChar("leetcode")).toEqual(0);
    });

    test('基础用例 2', () => {
        expect(firstUniqChar("loveleetcode")).toEqual(2);
    });

    test('边界用例 1：不存在返回-1', () => {
        expect(firstUniqChar("aabb")).toEqual(-1);
    });

    test('边界用例 2：某个字符重复了三次', () => {
        expect(firstUniqChar("abcabcabcd")).toEqual(9);
    });
});