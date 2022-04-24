const FormData = require('../FormData')

module.exports = function dispatchRequest(config) {
  console.log(config)
  if (config.data instanceof FormData) {
    console.log('表单类型')
  }
  return config.adapter(config)
}
