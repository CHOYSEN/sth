function fakeInstanceOf(object, constrctor) {
  const prototype = constrctor.prototype

  let protoOfObject = object.__proto__
  while (protoOfObject !== null) {
    if (protoOfObject === prototype) {
      return true
    }
    protoOfObject = protoOfObject.__proto__
  }

  return false
}

export default fakeInstanceOf