import { Hono } from 'hono'
import { z } from 'zod'
import { zValidator } from '@hono/zod-validator'

const productSchema = z.object({
  id: z.number().int().positive().min(1),
  name: z.string().min(1).max(100),
  price: z.number().int().positive(),
})

const productInsertSchema = productSchema.omit({ id: true })
const productUpdateSchema = productSchema.omit({ id: true })

const products: z.infer<typeof productSchema>[] = [
  { id: 1, name: 'iPhone', price: 999 },
  { id: 2, name: 'MacBook', price: 999 },
  { id: 3, name: 'iMac', price: 999 },
]

const router = new Hono()
  .get('/', (c) => {

    return c.json(products)
  })
  .get('/:id', async (c) => {
    const id = parseInt(c.req.param('id'))
    const product = products.find((p) => p.id === id)!
    if (!product) {
      return c.json({ message: 'Product not found' }, 404)
    }
    return c.json(product)
  })
  .post('/', zValidator("json", productInsertSchema), async (c) => {
    const product = c.req.valid('json')
    if (!product) {
      return c.json({ message: 'Product not found' }, 404)
    }
    products.push({ ...product, id: products.length + 1 })
    return c.json(product)
  })
  .delete('/:id', async (c) => {
    const id = parseInt(c.req.param('id'))
    const product = products.find((p) => p.id === id)!
    if (!product) {
      return c.json({ message: 'Product not found' }, 404)
    }
    products.splice(products.indexOf(product), 1)
    return c.json(product)
  })
  .patch('/:id', zValidator("json", productUpdateSchema), async (c) => {
    const id = parseInt(c.req.param('id'))
    const product = products.find((p) => p.id === id)!

    console.log(product)

    if (!product) {
      return c.json({ message: 'Product not found' }, 404)
    }
    const productUpdate = c.req.valid('json')
    if (!productUpdate) {
      return c.json({ message: 'Product not found' }, 404)
    }
    products.splice(products.indexOf(product), 1, {id, ...productUpdate})
    return c.json(productUpdate)
  })

export default router