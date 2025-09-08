import { AlertTriangle, Package, Clock, TrendingDown } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { Button } from "@/components/ui/button";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import StatsCard from "@/components/dashboard/StatsCard";
import { useToast } from "@/components/ui/use-toast";

const lowStockItems = [
  { id: 1, name: "iPhone 14", current: 5, threshold: 10, category: "Electronics", status: "critical" },
  { id: 2, name: "Samsung Galaxy S23", current: 8, threshold: 15, category: "Electronics", status: "low" },
  { id: 3, name: "AirPods Pro", current: 12, threshold: 20, category: "Accessories", status: "low" },
  { id: 4, name: "MacBook Pro", current: 2, threshold: 5, category: "Electronics", status: "critical" },
  { id: 5, name: "iPad Air", current: 7, threshold: 12, category: "Electronics", status: "low" },
];

const expiringItems = [
  { id: 1, name: "Energy Drink", expiryDate: "2024-01-25", daysLeft: 4, category: "Beverages", status: "critical" },
  { id: 2, name: "Protein Bar", expiryDate: "2024-01-28", daysLeft: 7, category: "Food", status: "warning" },
  { id: 3, name: "Vitamin C", expiryDate: "2024-02-05", daysLeft: 15, category: "Health", status: "warning" },
  { id: 4, name: "Fresh Milk", expiryDate: "2024-01-23", daysLeft: 2, category: "Dairy", status: "critical" },
  { id: 5, name: "Organic Honey", expiryDate: "2024-02-10", daysLeft: 20, category: "Food", status: "good" },
];

const reorderSuggestions = [
  { id: 1, name: "iPhone 14", current: 5, suggested: 25, cost: 24975, supplier: "Apple Inc." },
  { id: 2, name: "MacBook Pro", current: 2, suggested: 10, cost: 19990, supplier: "Apple Inc." },
  { id: 3, name: "Samsung Galaxy S23", current: 8, suggested: 20, cost: 17980, supplier: "Samsung" },
  { id: 4, name: "AirPods Pro", current: 12, suggested: 30, cost: 4482, supplier: "Apple Inc." },
];

export default function Stock() {
  const { toast } = useToast();

  const handleReorder = (productName: string) => {
    toast({
      title: "Reorder Initiated",
      description: `Reorder request for ${productName} has been sent to supplier.`,
    });
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case "critical": return "bg-danger text-danger-foreground";
      case "warning": return "bg-warning text-warning-foreground";
      case "low": return "bg-warning text-warning-foreground";
      case "good": return "bg-success text-success-foreground";
      default: return "bg-muted text-muted-foreground";
    }
  };

  const getProgressColor = (current: number, threshold: number) => {
    const percentage = (current / threshold) * 100;
    if (percentage <= 25) return "bg-danger";
    if (percentage <= 50) return "bg-warning";
    return "bg-success";
  };

  return (
    <div className="space-y-6">
      {/* Header */}
      <div>
        <h1 className="text-3xl font-bold text-foreground">Stock & Expiry Management</h1>
        <p className="text-muted-foreground">Monitor inventory levels, track expiry dates, and manage reorders</p>
      </div>

      {/* Stats Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <StatsCard
          title="Low Stock Items"
          value="23"
          change="5 need immediate attention"
          changeType="negative"
          icon={Package}
          color="warning"
        />
        <StatsCard
          title="Critical Stock"
          value="7"
          change="Below 25% threshold"
          changeType="negative"
          icon={AlertTriangle}
          color="danger"
        />
        <StatsCard
          title="Expiring Soon"
          value="12"
          change="Within 7 days"
          changeType="negative"
          icon={Clock}
          color="warning"
        />
        <StatsCard
          title="Reorder Suggestions"
          value="8"
          change="Recommended actions"
          changeType="neutral"
          icon={TrendingDown}
          color="primary"
        />
      </div>

      {/* Low Stock Items */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Package className="h-5 w-5 text-warning" />
            Low Stock Items
          </CardTitle>
        </CardHeader>
        <CardContent>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Product</TableHead>
                <TableHead>Category</TableHead>
                <TableHead>Current Stock</TableHead>
                <TableHead>Threshold</TableHead>
                <TableHead>Stock Level</TableHead>
                <TableHead>Status</TableHead>
                <TableHead>Action</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {lowStockItems.map((item) => (
                <TableRow key={item.id}>
                  <TableCell className="font-medium">{item.name}</TableCell>
                  <TableCell>{item.category}</TableCell>
                  <TableCell>{item.current}</TableCell>
                  <TableCell>{item.threshold}</TableCell>
                  <TableCell className="w-32">
                    <div className="space-y-1">
                      <Progress 
                        value={(item.current / item.threshold) * 100} 
                        className="h-2"
                      />
                      <span className="text-xs text-muted-foreground">
                        {Math.round((item.current / item.threshold) * 100)}%
                      </span>
                    </div>
                  </TableCell>
                  <TableCell>
                    <Badge className={getStatusColor(item.status)}>
                      {item.status}
                    </Badge>
                  </TableCell>
                  <TableCell>
                    <Button 
                      size="sm" 
                      variant="outline"
                      onClick={() => handleReorder(item.name)}
                    >
                      Reorder
                    </Button>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </CardContent>
      </Card>

      {/* Expiring Items */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Clock className="h-5 w-5 text-danger" />
            Expiring Items
          </CardTitle>
        </CardHeader>
        <CardContent>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Product</TableHead>
                <TableHead>Category</TableHead>
                <TableHead>Expiry Date</TableHead>
                <TableHead>Days Left</TableHead>
                <TableHead>Status</TableHead>
                <TableHead>Action</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {expiringItems.map((item) => (
                <TableRow key={item.id}>
                  <TableCell className="font-medium">{item.name}</TableCell>
                  <TableCell>{item.category}</TableCell>
                  <TableCell>{item.expiryDate}</TableCell>
                  <TableCell>{item.daysLeft} days</TableCell>
                  <TableCell>
                    <Badge className={getStatusColor(item.status)}>
                      {item.status}
                    </Badge>
                  </TableCell>
                  <TableCell>
                    <Button size="sm" variant="outline">
                      Mark Sale
                    </Button>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </CardContent>
      </Card>

      {/* Reorder Suggestions */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <TrendingDown className="h-5 w-5 text-primary" />
            Reorder Suggestions
          </CardTitle>
        </CardHeader>
        <CardContent>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Product</TableHead>
                <TableHead>Current Stock</TableHead>
                <TableHead>Suggested Quantity</TableHead>
                <TableHead>Estimated Cost</TableHead>
                <TableHead>Supplier</TableHead>
                <TableHead>Action</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {reorderSuggestions.map((item) => (
                <TableRow key={item.id}>
                  <TableCell className="font-medium">{item.name}</TableCell>
                  <TableCell>{item.current}</TableCell>
                  <TableCell>{item.suggested}</TableCell>
                  <TableCell className="font-semibold">${item.cost.toLocaleString()}</TableCell>
                  <TableCell>{item.supplier}</TableCell>
                  <TableCell>
                    <Button 
                      size="sm"
                      onClick={() => handleReorder(item.name)}
                    >
                      Create Order
                    </Button>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </CardContent>
      </Card>
    </div>
  );
}