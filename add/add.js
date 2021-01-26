/* 
  add(1).sumOf()       // 1
  add(1, 2).sumOf()    // 3
  add(1)(2).sumOf()    // 3
  add(1)(2)(3).sumOf() // 6
*/
function add(...nums) {
  function helper(...helperNums) {
    return add(...nums, ...helperNums)
  }
  helper.sumOf = () => console.log(nums.reduce((total, num) => total + num))
  return helper
}