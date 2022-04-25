function mergeHeaders(...arg) {
  const config = {}
  for (let i = 0; i < arg.length; i++) {
    const item = arg[i] || {}
    Object.keys(item).forEach(key => {
      config[key.toLocaleLowerCase()] = item[key]
    })
  }
  return config
}

module.exports = function mergeConfig(...arg) {
  const config = {}
  for (let i = 0; i < arg.length; i++) {
    const item = arg[i] || {}
    Object.keys(item).forEach(key => {
      if (key === 'headers') {
        config.headers = mergeHeaders(config.headers, item.headers)
      } else {
        config[key] = item[key]
      }
    })
  }

  return config
}
