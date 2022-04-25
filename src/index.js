const extend = require('./utils/extend')
const forEach = require('./utils/forEach')
const mergeConfig = require('./utils/mergeConfig')
const adapter = require('./adapter')
const dispatchRequest = require('./code/request')

function Fetch(config) {
  this.default = config
}
Fetch.prototype.request = function request(config) {
  const _config = mergeConfig(this.default, config)
  return dispatchRequest(_config)
}

forEach(
  ['delete', 'get', 'head', 'options', 'post', 'put', 'patch'],
  function hand(method) {
    Fetch.prototype[method] = function (url, config) {
      return this.request(
        mergeConfig(config, {
          url: url,
          method: method
        })
      )
    }
  }
)

function crearteInstance(defaultConfig) {
  const context = new Fetch(defaultConfig)
  const instance = Fetch.prototype.request.bind(context)
  extend(instance, Fetch.prototype, context)

  instance.extend = function extend(config) {
    return crearteInstance(mergeConfig(defaultConfig, config))
  }

  return instance
}

module.exports = crearteInstance({
  adapter: adapter,
  responseType: 'application/json',
  headers: { 'content-type': 'application/json' }
})
