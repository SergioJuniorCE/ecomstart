import { createRootRoute, Link, Outlet, useLocation } from '@tanstack/react-router'
import { TanStackRouterDevtools } from '@tanstack/router-devtools'
import { ThemeProvider } from "@/components/theme-provider"
import { ModeToggle } from '@/components/mode-toggle'

function Navbar() {
  const { pathname } = useLocation()

  const isInAdmin = pathname.startsWith('/admin')

  if (isInAdmin) return (<></>)

  return (
    <div className="flex items-center gap-2">
      <Link to="/" className="[&.active]:font-bold">
        Home
      </Link>{' '}
      <Link to="/about" className="[&.active]:font-bold">
        About
      </Link>
      <Link to="/products" className="[&.active]:font-bold">
        Products
      </Link>
      <ModeToggle />
    </div>
  )
}

const Router = () => {
  return (
    <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
      <Navbar />
      <hr />
      <Outlet />
      <TanStackRouterDevtools />
    </ThemeProvider>
  )
}

export const Route = createRootRoute({
  component: Router,
})

