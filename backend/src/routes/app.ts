import { Hono } from 'hono'
import { serveStatic } from 'hono/bun'
import { logger } from 'hono/logger'

import products from './products'
const app = new Hono()

app.use('*', logger())

const apiRoutes = app.basePath('/api')
  .get('/', (c) => {
    return c.text('Hello Hono!')
  })
  .route('/products', products)

app.use('*', serveStatic({ root: './frontend/dist' }))
app.use('*', serveStatic({ root: './frontend/dist/index.html' }))

export default app
export type ApiRoutes = typeof apiRoutes