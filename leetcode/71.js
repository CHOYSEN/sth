/**
 * @param {string} path
 * @return {string}
 */
var simplifyPath = function (path) {
  const stack = []
  for (const item of path.split('/')) {
    if (!item || item === '.') {
      continue
    }
    if (item === '..') {
      stack.pop()
    } else {
      stack.push(item)
    }
  }
  return '/' + stack.join('/')
};