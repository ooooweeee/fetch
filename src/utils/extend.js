const forEach = require('./forEach')
const is = require('./is')

module.exports = function extend(a, b, context) {
  forEach(b, function assignValue(val, key) {
    if (context && is.Function(val)) {
      a[key] = val.bind(context)
    } else {
      a[key] = val
    }
  })
  return a
}
