import { ProductTable } from '@/components/product-table'
import { createLazyFileRoute } from '@tanstack/react-router'

export const Route = createLazyFileRoute('/products')({
  component: Products,
})

export default function Products() {
  return (
    <div className="p-2">
      <h1>Products</h1>
      <p>This is the products page</p>
      <ProductTable />
    </div>
  )
}