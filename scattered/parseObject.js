function parseObject(raw) {
  const obj = {}
  for (const rawKey of Object.keys(raw)) {
    const keys = rawKey.split('.')
    if (keys.length === 1) {
      obj[rawKey] = raw[rawKey]
      continue
    }

    obj[keys[0]] = obj[keys[0]] ?? {}

    let current = obj[keys[0]]
    for (let i = 1; i < keys.length; i++) {
      if (i === keys.length - 1) {
        current[keys[i]] = raw[rawKey]
      } else {
        current[keys[i]] = current[keys[i]] ?? {}
      }
      current = current[keys[i]]
    }
  }
  return obj
}