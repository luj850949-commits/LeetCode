const simplifyPath = require('./71.简化路径');

describe('LeetCode: simplifyPath 测试', () => {
    test('基础用例 1：去除尾部的多余斜杠', () => {
        // 题目要求：最后不能以 / 结尾
        expect(simplifyPath("/home/")).toBe("/home");
    });

    test('基础用例 2：处理多个连续的斜杠', () => {
        // 刚刚学过正则，或者用 split('/') 会产生空字符串 ''，这里测试能否正确过滤
        expect(simplifyPath("/home//foo/")).toBe("/home/foo");
    });

    test('边界用例 1：在根目录执行 .. (不能越级)', () => {
        // 题目要求：如果已经在根目录，继续 .. 依然停留在根目录
        expect(simplifyPath("/../")).toBe("/");
    });

    test('边界用例 2：只有一层根目录', () => {
        expect(simplifyPath("/")).toBe("/");
    });

    test('综合用例 1：混合 . 和 .. 的常规操作', () => {
        // 解析：进 a -> 停留 (.) -> 进 b -> 退出 b (..) -> 退出 a (..) -> 进 c
        expect(simplifyPath("/a/./b/../../c/")).toBe("/c");
    });

    test('综合用例 2：极度混乱的连续操作', () => {
        // 包含连续斜杠、连续回退、以及当前目录符号
        expect(simplifyPath("/a/../../b/../c//.//")).toBe("/c");
    });

    test('防坑用例：特殊名称的目录', () => {
        // 注意：除了 "." 和 ".."，像 "..." 或者 "hidden..dir" 这种都是合法的普通文件夹名，不能被弹栈！
        expect(simplifyPath("/.../a/../b/c/../d/./")).toBe("/.../b/d");
    });
});