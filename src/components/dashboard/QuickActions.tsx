import { Plus, ShoppingCart, FileText, Package } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const actions = [
  { 
    label: "Add Product", 
    icon: Plus, 
    description: "Add new inventory item",
    color: "primary" as const
  },
  { 
    label: "Record Sale", 
    icon: ShoppingCart, 
    description: "Process new transaction",
    color: "success" as const
  },
  { 
    label: "View Reports", 
    icon: FileText, 
    description: "Generate analytics",
    color: "warning" as const
  },
  { 
    label: "Check Stock", 
    icon: Package, 
    description: "Monitor inventory levels",
    color: "danger" as const
  },
];

export default function QuickActions() {
  return (
    <Card>
      <CardHeader>
        <CardTitle className="text-lg font-semibold">Quick Actions</CardTitle>
      </CardHeader>
      <CardContent className="grid grid-cols-2 gap-3">
        {actions.map((action) => (
          <Button
            key={action.label}
            variant="outline"
            className="h-auto p-4 flex flex-col items-center gap-2 hover:shadow-md transition-shadow"
          >
            <action.icon className="h-6 w-6 text-primary" />
            <div className="text-center">
              <p className="font-medium text-sm">{action.label}</p>
              <p className="text-xs text-muted-foreground">{action.description}</p>
            </div>
          </Button>
        ))}
      </CardContent>
    </Card>
  );
}