import { createLazyFileRoute } from '@tanstack/react-router'

export const Route = createLazyFileRoute('/_admin/admin/orders/')({
  component: Orders
})

function Orders() {
  return <div>Hello /admin/orders/!</div>
}