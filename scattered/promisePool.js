const delay = wait => new Promise(r => setTimeout(r, wait))

function promisePool(tasks, fn, limit) {
  return new Promise((resolve, reject) => {
    const result = []
    const doing = new Set()

    let i = 0
    let counter = 0
    function dispose() {
      if (i === tasks.length) return

      const current = i++
      const p = fn(tasks[current])
      doing.add(p)
      p.then(res => {
        doing.delete(p)
        result[current] = res
        ++counter === tasks.length && resolve(result)
      }).catch(reject)

      if (doing.size < limit) {
        dispose()
      } else {
        Promise.race(doing).then(dispose)
      }
    }
    dispose()
  })
}

promisePool([1000, 2000, 3000, 4000], delay, 2).then(console.log)