const longestCommonPrefix = require('./14.最长公共前缀');

describe('LeetCode: longestCommonPrefix 测试', () => {
    test('基础用例 1', () => {
        expect(longestCommonPrefix(["flower","flow","flight"])).toEqual("fl");
    });

    test('边界用例 1: 不存在公共前缀', () => {
        expect(longestCommonPrefix(["dog","racecar","car"])).toEqual("");
    });
});