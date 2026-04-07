const threeSumClosest = require('./16.最接近的三数之和');

describe('LeetCode: threeSumClosest 测试', () => {
    test('基础用例 1', () => {
        expect(threeSumClosest([-1,2,1,-4], 1)).toEqual(2);
    });

    test('边界用例 1', () => {
        expect(threeSumClosest([0,0,0], 1)).toEqual(0);
    });
});