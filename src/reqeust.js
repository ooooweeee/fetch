function buildURL(config) {
  const {} = config

  return config.url
}

module.exports = function dispatchRequest(config) {
  config.url = buildURL(config)

  return config.adapter(config)
}
