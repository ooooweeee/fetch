const toString = val => Object.prototype.toString.call(val)

function is(val) {
  const _type = toString(val)
  if (_type === '[object Number]') {
    return 'number'
  }
  if (_type === '[object String]') {
    return 'string'
  }
  if (_type === '[object Boolean]') {
    return 'boolean'
  }
  if (_type === '[object Undefined]') {
    return 'undefined'
  }
  if (_type === '[object Null]') {
    return 'null'
  }
  if (_type === '[object Object]') {
    return 'object'
  }
  if (_type === '[object Array]') {
    return 'array'
  }
  if (_type === '[object Function]') {
    return 'function'
  }
  if (_type === '[object RegExp]') {
    return 'regExp'
  }
  if (_type === '[object Date]') {
    return 'date'
  }
}

is.Number = function isNumber(val) {
  return toString(val) === '[object Number]'
}
is.String = function isString(val) {
  return toString(val) === '[object String]'
}
is.Boolean = function isBoolean(val) {
  return toString(val) === '[object Boolean]'
}
is.Undefined = function isUndefined(val) {
  return toString(val) === '[object Undefined]'
}
is.Null = function isNull(val) {
  return toString(val) === '[object Null]'
}
is.Object = function isObject(val) {
  return toString(val) === '[object Object]'
}
is.Array = function isArray(val) {
  return toString(val) === '[object Array]'
}
is.Function = function isFunction(val) {
  return toString(val) === '[object Function]'
}
is.RegExp = function isRegExp(val) {
  return toString(val) === '[object RegExp]'
}
is.Date = function isDate(val) {
  return toString(val) === '[object Date]'
}

module.exports = is
