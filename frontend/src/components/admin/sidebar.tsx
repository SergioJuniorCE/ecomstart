import { cn } from "@/lib/utils";
import { TooltipProvider, Tooltip, TooltipTrigger, TooltipContent } from "@radix-ui/react-tooltip";
import { Link, LinkProps, useRouterState } from "@tanstack/react-router";
import { Home, ShoppingCart, Package, Users2, LineChart, Settings } from "lucide-react";

export function Sidebar() {
  return (
    <aside className="fixed inset-y-0 left-0 z-10 flex-col hidden border-r w-14 bg-background sm:flex">
      <nav className="flex flex-col items-center gap-4 px-2 sm:py-5">
        <SidebarLinkWithTooltip name="Dashboard" icon={<Home className="w-5 h-5" />} to="/admin" />
        <SidebarLinkWithTooltip name="Products" icon={<Package className="w-5 h-5" />} to="/admin/products" />
        <SidebarLinkWithTooltip name="Orders" icon={<ShoppingCart className="w-5 h-5" />} to="/admin/orders" />
        <SidebarLinkWithTooltip name="Customers" icon={<Users2 className="w-5 h-5" />} to="/admin/customers" />
        <SidebarLinkWithTooltip name="Analytics" icon={<LineChart className="w-5 h-5" />} to="/admin/analytics" />
      </nav>
      <nav className="flex flex-col items-center gap-4 px-2 mt-auto sm:py-5">
        <TooltipProvider>
          <Tooltip>
            <TooltipTrigger asChild>
              <Link
                to="/admin"
                className="flex items-center justify-center transition-colors rounded-lg h-9 w-9 text-muted-foreground hover:text-foreground md:h-8 md:w-8"
              >
                <Settings className="w-5 h-5" />
                <span className="sr-only">Settings</span>
              </Link>
            </TooltipTrigger>
            <TooltipContent side="right">Settings</TooltipContent>
          </Tooltip>
        </TooltipProvider>
      </nav>
    </aside>
  )
}

type SidebarLinkWithTooltipProps = LinkProps & {
  name: string
  icon: React.ReactNode
}

export function SidebarLinkWithTooltip(props: SidebarLinkWithTooltipProps) {
  const router = useRouterState();

  const isActive = router.location.pathname === props.to;

  return (
    <TooltipProvider>
      <Tooltip>
        <TooltipTrigger asChild>
          <Link to={props.to} className={cn(
            isActive && 'rounded-lg bg-primary text-primary-foreground p-1',
          )}>
            {props.icon}
          </Link>
        </TooltipTrigger>
        <TooltipContent side="right" className="p-1 rounded-lg bg-secondary">
          <p>{props.name}</p>
        </TooltipContent>
      </Tooltip>
    </TooltipProvider>
  )

}