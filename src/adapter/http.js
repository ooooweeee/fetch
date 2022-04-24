const http = require('http')
const https = require('https')
const stream = require('stream')

module.exports = function httpAdapter(config) {
  const responseType = config.responseType

  if (responseType === 'stream') {
    const transform = new stream.Transform({
      transform(chunk, _, callback) {
        callback(null, chunk)
      }
    })
    return transform
  }

  const hasError = true
  if (hasError) {
    return Promise.reject('adapter error')
  }
  return Promise.resolve(config)
}
