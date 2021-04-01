function call(fn, context, ...args) {
  let key
  do {
    key = Date.now()
  } while (context.hasOwnProperty(key))
  context[key] = fn
  const result = context[key](...args)
  delete context[key]
  return result
}

export default call