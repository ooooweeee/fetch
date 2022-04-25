const fs = require('fs')
const path = require('path')

const Koa = require('koa')
const koaBody = require('koa-body')
const Router = require('koa-router')

app.use(
  koaBody({
    multipart: true
  })
)

router.post('/register', async (ctx, next) => {
  const {} = ctx.request.body
  ctx.body = {}
})
router.get('/search', async (ctx, next) => {
  const {} = ctx.request.query
})
router.post('/upload', async (ctx, next) => {
  const file = ctx.request.files.log
  fs.createReadStream(file.path).pipe(
    fs.createWriteStream(path.join(__dirname, 'public/', file.name))
  )
})
router.get('/download', (ctx, next) => {
  const { name } = ctx.request.query
  const filePath = path.join(__dirname, 'public/', name)
  const stream = fs.createReadStream(filePath)

  ctx.set('Content-Disposition', 'attachment; filename=' + name)
  ctx.set('Content-Type', 'application/force-download')
  ctx.set('Content-Length', fs.statSync(filePath).size)

  ctx.body = stream
})

app.use(router.routes())
app.listen(3000)
