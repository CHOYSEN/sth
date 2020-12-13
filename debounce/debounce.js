// 防抖：事件触发后，等待一段事件再执行，如果在等待时间内又触发了则重新计算时间
function debounce(fn, wait, immediate) {
  let timeout = null

  // 这里不用箭头函数是为了能绑定到具体事件的 this
  return function (...params) {
    clearTimeout(timeout)

    if (!immediate) {
      // 非立即执行版
      timeout = setTimeout(() => {
        fn.call(this, ...params)
      }, wait);
    } else {
      // 立即执行版
      !timeout && fn.call(this, ...params)
      timeout = setTimeout(() => {
        timeout = null
      }, wait);
    }
  }
}

export default debounce