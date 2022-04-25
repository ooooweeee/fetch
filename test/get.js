const fetch = require('../src')
const FormData = require('../src/FormData')

const instance = fetch.extend({
  baseURL: 'http://127.0.0.1:3000'
})

const formData = new FormData()
console.log('formData', formData)
instance
  .post('/upload', {
    data: formData
  })
  .then(() => {
    console.log('上传成功')
  })
  .catch(() => {
    console.log('上传失败')
  })
