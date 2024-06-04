import { createLazyFileRoute } from '@tanstack/react-router'

export const Route = createLazyFileRoute('/_admin/admin/products/')({
  component: () => <div>Hello /admin/products!</div>
})