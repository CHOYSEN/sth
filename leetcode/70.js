/**
 * @param {number} n
 * @return {number}
 */
var climbStairs = function (n) {
  // 假设要爬 5 层的楼梯，方法有两种：爬到 4 层再爬 1 层、爬到 3 层再爬 2 层
  // 问题就被拆成了爬 4 层的楼梯有几种方式和爬 3 层的楼梯有几种方式
  // 得出：爬 5 层的方式 = 爬 4 层的方式 + 爬 3 层的方式
  // f(n) = f(n - 1) + f(n - 2)
  // 如果爬 0 层，只有一种办法就是不动；如果要爬 1 层，也只有一种办法就是爬 1 层，所以可以给它们赋值
  const result = [1, 1]
  for (let i = 2; i <= n; i++) {
    result[i] = result[i - 1] + result[i - 2]
  }
  return result[n]
};