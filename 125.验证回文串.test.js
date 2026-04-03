const isPalindrome = require('./125.验证回文串');

describe('LeetCode: isPalindrome 测试', () => {
    test('基础用例 1', () => {
        expect(isPalindrome("race a car")).toEqual(false);
    });

    test('基础用例 1', () => {
        expect(isPalindrome("A man, a plan, a canal: Panama")).toEqual(true);
    });

    test('边界用例 1: 空字符串', () => {
        expect(isPalindrome(" ")).toEqual(true);
    });
});