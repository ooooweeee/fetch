const extend = require('./utils/extend')
const forEach = require('./utils/forEach')
const mergeConfig = require('./utils/mergeConfig')
const dispatchRequest = require('./reqeust')
const adapter = require('./adapter')

function Fetch(config) {
  this.default = config
}
Fetch.prototype.request = function request(config) {
  console.log('config', this.default, config)

  return dispatchRequest(config)
}

forEach(['get'], function hand(method) {
  Fetch.prototype[method] = function (config) {
    return this.request(config)
  }
})

function crearteInstance(defaultConfig) {
  const context = new Fetch(defaultConfig)
  const instance = Fetch.prototype.request.bind(context)
  extend(instance, Fetch.prototype, context)

  instance.extend = function extend(config) {
    return crearteInstance(mergeConfig(defaultConfig, config))
  }

  return instance
}

module.exports = crearteInstance({ adapter: adapter })
