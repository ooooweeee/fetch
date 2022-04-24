const fetch = require('../src')
const FormData = require('../src/FormData')

const instance = fetch.extend({
  baseURL: 'http://127.0.0.1:3000'
})

// instance
//   .get('/search', {
//     responseType: 'application/json',
//     params: {
//       name: 'zhangdaheng'
//     }
//   })
//   .then(res => {
//     console.log(res)
//   })
//   .catch(err => {
//     console.error(err)
//   })

const formData = new FormData()
instance
  .post('/upload', {
    data: formData
  })
  .then(res => {
    console.log('上传成功')
  })
  .catch(err => {
    console.log(err)
  })
