const deepClone = require('./deepClone')
const is = require('./is')

module.exports = function mergeConfig(a, b) {
  let result = deepClone(a)
  if (!result) {
    return b
  }
  if (is.Array(b) && is.Array(result)) {
    return result.concat(b)
  }
  if (is.Object(b) && is.Object(result)) {
    for (const key in b) {
      if (Object.hasOwnProperty.call(b, key)) {
        result[key] = mergeConfig(result[key], b[key])
      }
    }
  }
  return result
}
