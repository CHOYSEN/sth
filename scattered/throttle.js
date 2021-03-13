// 节流：一段事件内只能执行一次回调
function throttle(fn, gap) {
  let lastTime = 0

  // 这里不用箭头函数是为了能绑定到具体事件的 this
  return function (...params) {
    const now = new Date().getTime()
    if (now - lastTime > gap) {
      fn.call(this, ...params)
      lastTime = now
    }
  }
}

export default throttle