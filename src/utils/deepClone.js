const is = require('./is')

module.exports = function deepClone(origin) {
  if (is.Array(origin)) {
    const result = []
    for (let i = 0; i < origin.length; i++) {
      result.push(deepClone(origin[i]))
    }
    return result
  }
  if (is.Object(origin)) {
    const result = {}
    for (const key in origin) {
      if (Object.hasOwnProperty.call(origin, key)) {
        result[key] = deepClone(origin[key])
      }
    }
  }
  return origin
}
