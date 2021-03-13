function compose(middlewares) {
  const len = middlewares.length

  function dispose(i) {
    if (i >= len) {
      return
    }
    const fn = middlewares[i]
    const next = () => dispose(i + 1)
    fn(next)
  }

  return () => dispose(0)
}

function fun1(next) {
  console.log('fun1 start')
  next()
  console.log('fun2 end')
}

function fun2(next) {
  console.log('fun2 start')
  next()
  console.log('fun2 end')
}

compose([fun1, fun2])()