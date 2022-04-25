const getUri = require('./getUri')

module.exports = function dispatchRequest(config) {
  config.url = getUri(config)

  return config.adapter(config)
}
