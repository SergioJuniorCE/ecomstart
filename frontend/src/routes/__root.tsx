import { createRootRoute, Link, Outlet } from '@tanstack/react-router'
import { TanStackRouterDevtools } from '@tanstack/router-devtools'
import { ThemeProvider } from "@/components/theme-provider"
import { ModeToggle } from '@/components/mode-toggle'


export const Route = createRootRoute({
  component: () => (
    <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
      <div className="flex justify-between gap-2 p-2">
        <div className='flex items-center gap-2'>
          <Link to="/" className="[&.active]:font-bold">
            Home
          </Link>{' '}
          <Link to="/about" className="[&.active]:font-bold">
            About
          </Link>
        </div>
        <ModeToggle />
      </div>
      <hr />
      <Outlet />
      <TanStackRouterDevtools />
    </ThemeProvider>
  ),
})
