import { Card, CardHeader, CardTitle, CardContent } from "../ui/card"

type DashboardCardProps = {
  title: string
  value: string
  change: string
  icon: React.ReactNode
}

export const DashboardCard = ({
  title,
  value,
  change,
  icon,
}: DashboardCardProps) => {
  return (
    <Card x-chunk="dashboard-01-chunk-0">
      <CardHeader className="flex flex-row items-center justify-between pb-2 space-y-0">
        <CardTitle className="text-sm font-medium">
          {title}
        </CardTitle>
        {icon}
      </CardHeader>
      <CardContent>
        <div className="text-2xl font-bold">{value}</div>
        <p className="text-xs text-muted-foreground">
          {change}
        </p>
      </CardContent>
    </Card>
  )
}