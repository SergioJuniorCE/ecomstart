import { createRootRoute, Link, Outlet, useLocation } from '@tanstack/react-router'
import { TanStackRouterDevtools } from '@tanstack/router-devtools'
import { ThemeProvider } from "@/components/theme-provider"
import { ModeToggle } from '@/components/mode-toggle'
import { Search } from 'lucide-react'
import { Avatar } from '@radix-ui/react-avatar'
import CompanyLogo from '@/assets/company-logo.svg'

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
      <Link to="/admin/orders" className="[&.active]:font-bold">
        Orders
      </Link>
      <Link to="/admin" className="[&.active]:font-bold">
        admin
      </Link>
      <ModeToggle />
    </div>
  )
}

function Router() {
  return (
    <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
      <Header />
      <hr />
      <Navbar />
      <Outlet />
      <TanStackRouterDevtools />
    </ThemeProvider>
  )
}

function Header() {
  return (
    <div className='flex justify-between'>
      <Search className="w-5 h-5" />
      <img src={CompanyLogo} alt="Company Logo" />
      <Avatar className="size-5" />
    </div>
  )
}

export const Route = createRootRoute({
  component: Router,
})

