const isValid = require('./20.有效的括号');

describe('LeetCode: isValid 测试', () => {
    test('基础用例 1', () => {
        expect(isValid('()')).toEqual(true);
    });
    test('基础用例 2', () => {
        expect(isValid('()[]{}')).toEqual(true);
    });
    test('基础用例 3', () => {
        expect(isValid('(]')).toEqual(false);
    });
    test('基础用例 4', () => {
        expect(isValid('([])')).toEqual(true);
    });
    test('基础用例 5', () => {
        expect(isValid('([)]')).toEqual(false);
    });
    test('边界用例 1：只有左括号', () => {
        expect(isValid('(')).toEqual(false);
    });
    test('边界用例 2：只有右括号', () => {
        expect(isValid(')]')).toEqual(false);
    });
});