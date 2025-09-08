import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";

const topProducts = [
  { name: "Premium Coffee Beans", sales: 145, total: 200, revenue: 2900 },
  { name: "Organic Honey", sales: 132, total: 150, revenue: 2640 },
  { name: "Artisan Bread", sales: 98, total: 120, revenue: 1960 },
  { name: "Fresh Milk", sales: 87, total: 100, revenue: 1740 },
  { name: "Greek Yogurt", sales: 76, total: 90, revenue: 1520 },
];

export default function TopProducts() {
  return (
    <Card>
      <CardHeader>
        <CardTitle className="text-lg font-semibold">Top 5 Selling Products</CardTitle>
      </CardHeader>
      <CardContent className="space-y-4">
        {topProducts.map((product, index) => (
          <div key={product.name} className="space-y-2">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-3">
                <span className="flex items-center justify-center w-6 h-6 rounded-full bg-primary text-primary-foreground text-xs font-medium">
                  {index + 1}
                </span>
                <span className="font-medium text-sm">{product.name}</span>
              </div>
              <span className="text-sm font-semibold text-success">
                ${product.revenue}
              </span>
            </div>
            <div className="flex items-center gap-2">
              <Progress 
                value={(product.sales / product.total) * 100} 
                className="flex-1 h-2"
              />
              <span className="text-xs text-muted-foreground">
                {product.sales}/{product.total}
              </span>
            </div>
          </div>
        ))}
      </CardContent>
    </Card>
  );
}