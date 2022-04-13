const is = require('./is')

module.exports = function forEach(val, fn) {
  if (is.Array(val)) {
    for (var i = 0, l = val.length; i < l; i++) {
      fn.call(null, val[i], i, val)
    }
    return
  }
  if (is.Object(val)) {
    for (var key in val) {
      if (Object.prototype.hasOwnProperty.call(val, key)) {
        fn.call(null, val[key], key, val)
      }
    }
    return
  }
  fn(val)
}
