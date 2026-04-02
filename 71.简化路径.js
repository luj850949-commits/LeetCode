/*
 * @lc app=leetcode.cn id=71 lang=javascript
 *
 * [71] 简化路径
 */

// @lc code=start
/**
 * @param {string} path
 * @return {string}
 */
var simplifyPath = function(path) {
  const firRule = /\/+/g
  const strArr = path.split(firRule)
  let newPath = ''

  // i = 1 是因为以 ‘/’ 开头，split 分割出来的数组首项必为 “”
  for(let i = 1; i < strArr.length; i++) {
    switch (strArr[i]) {
      case '.':
      case '':
      break;
      case '..':
        if(newPath !== '') {
          let thisLength = 0
          for(let n = newPath.length - 1; n >= 0; n--) {
            if(newPath[n] !== '/') {
              thisLength++
            }else{
              thisLength++
              break;
            }
          }
          newPath = newPath.slice(0, newPath.length - thisLength)
        }
      break;
      default:
        newPath += ('/' + strArr[i])
      break;
    }
  }

  return newPath === '' ? '/' : newPath
};
// @lc code=end

module.exports = simplifyPath