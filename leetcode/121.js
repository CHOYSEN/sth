/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function (prices) {
  let max = 0
  // 假设第一天买入
  let buy = prices[0]

  for (const price of prices) {
    // 将之前买入价与现价对比，如果现价更低说明应该现价买入
    buy = Math.min(buy, price)
    // 将最大利润与今日利润对比
    // 如果现价低于买入价，则利润为负，负数一定小于 0
    // 将会保持之前的最大利润
    max = Math.max(max, price - buy)
  }
  return max
};