/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function (s) {
  const signs = {
    '{': '}',
    '[': ']',
    '(': ')'
  }
  const stack = []
  for (const letter of s) {
    if (signs[letter]) {
      stack.push(letter)
    } else {
      const item = stack.pop()
      if (signs[item] !== letter) {
        return false
      }
    }
  }
  return stack.length === 0
};