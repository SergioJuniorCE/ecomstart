import app from './src/routes/index'

const port = process.env.PORT || 3000

Bun.serve({
  port,
  hostname: '0.0.0.0',
  fetch: app.fetch,
})

const isProd = process.env.NODE_ENV === 'production'

const url = isProd ? 'https://ecomstart.fly.dev/' : `http://localhost:${port}/`

console.log(`Server is running on ${url}`)