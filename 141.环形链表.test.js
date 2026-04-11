const { hasCycle, ListNode, arrayToList } = require('./141.环形链表');

// 专属测试脚手架补充：制造环
/**
 * 专门为链表制造环的函数
 * @param {ListNode} head 链表头节点
 * @param {number} pos 尾节点要连接到哪个索引位置（-1 表示不连接）
 */
function createCycle(head, pos) {
    if (pos === -1 || !head) return head;
    
    let curr = head;
    let tail = head;
    let cycleNode = null;
    let index = 0;

    // 走到链表尾部，同时找到那个需要被连接的目标节点 (cycleNode)
    while (tail.next !== null) {
        if (index === pos) {
            cycleNode = tail;
        }
        tail = tail.next;
        index++;
    }
    
    // 如果找到了目标节点（防止 pos 越界），就把尾巴连过去，形成死循环
    if (!cycleNode && index === pos) cycleNode = tail; 
    if (cycleNode) {
        tail.next = cycleNode; 
    }
    
    return head;
}

describe('LeetCode 141: 环形链表 测试', () => {

    test('基础用例 1：经典的环形链表 (尾巴连在中间)', () => {
        // 构建链表 [3, 2, 0, -4]，并将尾巴 -4 连到索引 1（也就是 2）上
        let head = arrayToList([3, 2, 0, -4]);
        head = createCycle(head, 1);
        
        expect(hasCycle(head)).toBe(true);
    });

    test('基础用例 2：首尾相连的短链表', () => {
        // [1, 2]，尾巴 2 连到头部 1 (索引 0)
        let head = arrayToList([1, 2]);
        head = createCycle(head, 0);
        
        expect(hasCycle(head)).toBe(true);
    });

    test('基础用例 3：没有环的正常链表', () => {
        // [1]，pos 为 -1 代表没有环
        let head = arrayToList([1]);
        head = createCycle(head, -1);
        
        expect(hasCycle(head)).toBe(false);
    });

    test('边界用例 1：空链表', () => {
        let head = arrayToList([]);
        expect(hasCycle(head)).toBe(false);
    });

    test('边界用例 2：极长的单链表（无环，测试性能与越界）', () => {
        // 造一个 1000 长度的无环链表
        const arr = new Array(1000).fill(1);
        let head = arrayToList(arr);
        
        expect(hasCycle(head)).toBe(false);
    });

});