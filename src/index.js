const extend = require('./utils/extend')

function Fetch(config) {
  this.default = config
}
function request() {
  console.log(this.default)
}

Fetch.prototype.get = function () {
  console.log('get', this.default)
}

const context = new Fetch({ name: 'dahengzhang' })
const instance = request.bind(context)
extend(instance, Fetch.prototype, context)

instance()
instance.get()
