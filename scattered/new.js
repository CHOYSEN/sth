function fakeNew(Proto, ...params) {
  const obj = Object.create(Proto.prototype)
  const result = Proto.call(obj, ...params)
  return typeof result === "object" ? result : obj
}

export default fakeNew