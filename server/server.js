'use strict'

const Koa = require('koa')
const next = require('next')
const Router = require('koa-router')

const port = parseInt(process.env.PORT, 10) || 3000
const dev = process.env.NODE_ENV !== 'production'
const dir = 'src'
const app = next({ dev, dir })
const handle = app.getRequestHandler()

app.prepare()
.then(() => {
  const server = new Koa()
  const router = new Router()

  // router.get('/a', async ctx => {
  //   await app.render(ctx.req, ctx.res, '/b', ctx.query)
  //   ctx.respond = false
  // })

  router.get('*', async ctx => {
    await handle(ctx.req, ctx.res)
    ctx.respond = false
  })

  server.use(async (ctx, next) => {
    ctx.res.statusCode = 200
    await next()
  })

  server.use(router.routes())
  server.listen(port, (err) => {
    if (err) throw err
    console.log(`> Ready on http://localhost:${port}`)
  })
})
