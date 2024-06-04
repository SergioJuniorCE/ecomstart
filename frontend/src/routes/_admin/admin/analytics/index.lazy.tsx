import { createLazyFileRoute } from '@tanstack/react-router'

export const Route = createLazyFileRoute('/_admin/admin/analytics/')({
  component: () => <div>Hello /_admin/admin/analytics/!</div>
})