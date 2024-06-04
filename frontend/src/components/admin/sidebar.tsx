import { TooltipProvider, Tooltip, TooltipTrigger, TooltipContent } from "@radix-ui/react-tooltip";
import { Link, LinkProps } from "@tanstack/react-router";
import { Package2, Home, ShoppingCart, Package, Users2, LineChart, Settings } from "lucide-react";

export function Sidebar() {
  return (
    <aside className="fixed inset-y-0 left-0 z-10 flex-col hidden border-r w-14 bg-background sm:flex">
      <nav className="flex flex-col items-center gap-4 px-2 sm:py-5">
        <Link
          to="/admin"
          className="flex items-center justify-center gap-2 text-lg font-semibold rounded-full group h-9 w-9 shrink-0 bg-primary text-primary-foreground md:h-8 md:w-8 md:text-base"
        >
          <Package2 className="w-4 h-4 transition-all group-hover:scale-110" />
          <span className="sr-only">Acme Inc</span>
        </Link>
        <SidebarLinkWithTooltip name="Dashboard" icon={<Home className="w-5 h-5" />} to="/admin" />
        <SidebarLinkWithTooltip name="Orders" icon={<ShoppingCart className="w-5 h-5" />} to="/admin" />
        <SidebarLinkWithTooltip name="Products" icon={<Package className="w-5 h-5" />} to="/admin" />
        <SidebarLinkWithTooltip name="Customers" icon={<Users2 className="w-5 h-5" />} to="/admin" />
        <SidebarLinkWithTooltip name="Analytics" icon={<LineChart className="w-5 h-5" />} to="/admin" />
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
  return (
    <TooltipProvider>
      <Tooltip>
        <TooltipTrigger asChild>
          <Link {...props} />
        </TooltipTrigger>
        <TooltipContent side="right">{props.name}</TooltipContent>
      </Tooltip>
    </TooltipProvider>
  )

}