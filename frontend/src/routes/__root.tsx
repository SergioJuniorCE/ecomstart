import { createRootRoute, Link, Outlet, useLocation } from '@tanstack/react-router'
import { ThemeProvider } from "@/components/theme-provider"
// import { ModeToggle } from '@/components/mode-toggle'
import { CircleUserRound, Search, ShoppingBag } from 'lucide-react'
import CompanyLogo from '@/assets/company-logo.svg'
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuLabel, DropdownMenuSeparator, DropdownMenuTrigger } from '@/components/ui/dropdown-menu'

function AccountDropdown() {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger>
        <CircleUserRound />
      </DropdownMenuTrigger>
      <DropdownMenuContent className="bg-white">
        <DropdownMenuLabel>My Account</DropdownMenuLabel>
        <DropdownMenuSeparator />
        <DropdownMenuItem>Profile</DropdownMenuItem>
        <DropdownMenuItem>Billing</DropdownMenuItem>
        <DropdownMenuItem>Team</DropdownMenuItem>
        <DropdownMenuItem>Subscription</DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  )
}

function Header() {
  const isAdmin = true;
  return (
    <div className='flex items-center justify-between px-8 py-4'>
      <Search />
      <img src={CompanyLogo} alt="Company Logo" />
      <div className="flex items-center gap-6">
        {isAdmin && (
          <Link to="/admin" className="[&.active]:font-bold">
            Admin
          </Link>
        )}
        <ShoppingBag />
        <AccountDropdown />
      </div>
    </div>
  )
}

function Navbar() {
  return (
    <div className="flex items-center justify-between gap-2 px-8 py-4">
      <Link to="/products" className="[&.active]:font-bold">
        Jewelry & Accessories
      </Link>{' '}
      <Link to="/" className="[&.active]:font-bold">
        Clothing & Shoes
      </Link>
      <Link to="/" className="[&.active]:font-bold">
        Home & Living
      </Link>
      <Link to="/" className="[&.active]:font-bold">
        Wedding & Party
      </Link>
      <Link to="/" className="[&.active]:font-bold">
        Toys & Entertainment
      </Link>
    </div>
  )
}

function Router() {

  const { pathname } = useLocation()

  const isInAdmin = pathname.startsWith('/admin')

  return (
    <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
      <div className="flex flex-col min-h-screen">
        {!isInAdmin && (
          <div className="px-4 sm:px-6 lg:px-8">
            <Header />
            <hr />
            <Navbar />
          </div>
        )}
        <Outlet />
        {/* <TanStackRouterDevtools /> */}
      </div>
    </ThemeProvider>
  )
}

export const Route = createRootRoute({
  component: Router,
})

