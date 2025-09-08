import { LucideIcon } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { cn } from "@/lib/utils";

interface StatsCardProps {
  title: string;
  value: string;
  change: string;
  changeType: "positive" | "negative" | "neutral";
  icon: LucideIcon;
  color?: "primary" | "success" | "warning" | "danger";
}

export default function StatsCard({
  title,
  value,
  change,
  changeType,
  icon: Icon,
  color = "primary"
}: StatsCardProps) {
  const colorClasses = {
    primary: "text-primary bg-primary/10",
    success: "text-success bg-success-light",
    warning: "text-warning bg-warning-light", 
    danger: "text-danger bg-danger-light"
  };

  const changeClasses = {
    positive: "text-success",
    negative: "text-danger",
    neutral: "text-muted-foreground"
  };

  return (
    <Card className="relative overflow-hidden">
      <CardContent className="p-6">
        <div className="flex items-center justify-between">
          <div className="space-y-2">
            <p className="text-sm font-medium text-muted-foreground">{title}</p>
            <p className="text-2xl font-bold text-foreground">{value}</p>
            <p className={cn("text-sm font-medium", changeClasses[changeType])}>
              {change}
            </p>
          </div>
          <div className={cn("p-3 rounded-full", colorClasses[color])}>
            <Icon className="h-6 w-6" />
          </div>
        </div>
      </CardContent>
    </Card>
  );
}