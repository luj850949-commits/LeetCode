/*
 * @lc app=leetcode.cn id=20 lang=javascript
 *
 * [20] 有效的括号
 */

// @lc code=start
/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function(s) {
  const oldArr = [...s]
  const stack = []
  let isOK = true

  for(let i = 0; i < oldArr.length && isOK; i++) {
    if(oldArr[i] === '(' || oldArr[i] === '{' || oldArr[i] === '[') {
      stack.push(oldArr[i])
    }else if (stack.length === 0) {
      isOK = false
    }else {
      switch (oldArr[i]) {
        case ')':
          isOK = stack.pop() === '(' ? true : false
          break;
        case '}':
          isOK = stack.pop() === '{' ? true : false
          break;
        case ']':
          isOK = stack.pop() === '[' ? true : false
          break;
      }
    }
  }
  if(stack.length !== 0) isOK = false

  return isOK
};
// @lc code=end

module.exports = isValid