import { Plus, ShoppingCart, FileText, Package } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { useNavigate } from "react-router-dom";
import { useToast } from "@/components/ui/use-toast";

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
  const navigate = useNavigate();
  const { toast } = useToast();

  const handleAction = (action: string) => {
    switch (action) {
      case "Add Product":
        navigate("/products");
        toast({
          title: "Navigating to Products",
          description: "Add new products in the Products section.",
        });
        break;
      case "Record Sale":
        navigate("/sales");
        toast({
          title: "Navigating to Sales",
          description: "Record new sales in the Sales section.",
        });
        break;
      case "View Reports":
        navigate("/reports");
        break;
      case "Check Stock":
        navigate("/stock");
        break;
      default:
        break;
    }
  };

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
            onClick={() => handleAction(action.label)}
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