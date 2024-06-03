import { Hono } from 'hono'
import { serveStatic } from 'hono/bun'
import { logger } from 'hono/logger'

import products from './products'
const app = new Hono()

app.use('*', logger())

app.route('/api/products', products)

app.get('/api', (c) => {
  return c.text('Hello Hono!')
})

app.use('*', serveStatic({ root: './frontend/dist' }))
app.use('*', serveStatic({ root: './frontend/dist/index.html' }))

export default app
