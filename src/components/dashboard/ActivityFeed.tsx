import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { ShoppingCart, Package, AlertTriangle, TrendingUp } from "lucide-react";
import { cn } from "@/lib/utils";

const activities = [
  {
    id: 1,
    type: "sale",
    message: "Sale recorded: Premium Coffee Beans",
    amount: "$29.99",
    time: "2 minutes ago",
    icon: ShoppingCart,
    color: "text-success"
  },
  {
    id: 2,
    type: "stock",
    message: "Low stock alert: Organic Honey",
    amount: "5 left",
    time: "15 minutes ago", 
    icon: AlertTriangle,
    color: "text-warning"
  },
  {
    id: 3,
    type: "restock",
    message: "Inventory restocked: Fresh Milk",
    amount: "+50 units",
    time: "1 hour ago",
    icon: Package,
    color: "text-primary"
  },
  {
    id: 4,
    type: "sale",
    message: "Sale recorded: Artisan Bread",
    amount: "$12.50",
    time: "2 hours ago",
    icon: ShoppingCart,
    color: "text-success"
  },
  {
    id: 5,
    type: "trending",
    message: "New trending product: Greek Yogurt",
    amount: "+25% sales",
    time: "3 hours ago",
    icon: TrendingUp,
    color: "text-inventory"
  },
];

export default function ActivityFeed() {
  return (
    <Card className="h-fit">
      <CardHeader>
        <CardTitle className="text-lg font-semibold">Recent Activity</CardTitle>
      </CardHeader>
      <CardContent className="space-y-4">
        {activities.map((activity) => (
          <div key={activity.id} className="flex items-start gap-3">
            <div className={cn("p-2 rounded-full bg-muted", activity.color)}>
              <activity.icon className="h-4 w-4" />
            </div>
            <div className="flex-1 min-w-0">
              <p className="text-sm font-medium text-foreground">{activity.message}</p>
              <div className="flex items-center justify-between mt-1">
                <span className="text-xs text-muted-foreground">{activity.time}</span>
                <span className={cn("text-sm font-semibold", activity.color)}>
                  {activity.amount}
                </span>
              </div>
            </div>
          </div>
        ))}
      </CardContent>
    </Card>
  );
}