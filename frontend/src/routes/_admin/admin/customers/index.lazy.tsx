import { createLazyFileRoute } from '@tanstack/react-router'

export const Route = createLazyFileRoute('/_admin/admin/customers/')({
  component: () => <div>Hello /_admin/admin/customers/!</div>
})