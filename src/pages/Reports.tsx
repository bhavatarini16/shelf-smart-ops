import { useState } from "react";
import { Download, TrendingUp, Package, DollarSign, Users } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { 
  AreaChart, 
  Area, 
  BarChart, 
  Bar, 
  PieChart, 
  Pie, 
  Cell, 
  LineChart, 
  Line, 
  XAxis, 
  YAxis, 
  CartesianGrid, 
  Tooltip, 
  ResponsiveContainer 
} from "recharts";
import StatsCard from "@/components/dashboard/StatsCard";
import { useToast } from "@/components/ui/use-toast";

// Revenue Analysis Data
const revenueData = [
  { month: "Jan", revenue: 45000, profit: 13500 },
  { month: "Feb", revenue: 52000, profit: 15600 },
  { month: "Mar", revenue: 48000, profit: 14400 },
  { month: "Apr", revenue: 61000, profit: 18300 },
  { month: "May", revenue: 55000, profit: 16500 },
  { month: "Jun", revenue: 67000, profit: 20100 },
  { month: "Jul", revenue: 72000, profit: 21600 },
  { month: "Aug", revenue: 69000, profit: 20700 },
];

// Product Performance Data
const productPerformanceData = [
  { name: "iPhone 14", revenue: 165000, units: 89 },
  { name: "Samsung S23", revenue: 108000, units: 120 },
  { name: "MacBook Pro", revenue: 177911, units: 89 },
  { name: "Nike Shoes", revenue: 34000, units: 136 },
  { name: "AirPods", revenue: 42000, units: 168 },
  { name: "iPad", revenue: 65000, units: 108 },
];

// Category Breakdown Data
const categoryData = [
  { name: "Electronics", value: 65, color: "hsl(var(--chart-1))" },
  { name: "Footwear", value: 20, color: "hsl(var(--chart-2))" },
  { name: "Accessories", value: 10, color: "hsl(var(--chart-3))" },
  { name: "Clothing", value: 5, color: "hsl(var(--chart-4))" },
];

const categoryDetails = [
  { name: "Electronics", percentage: 65, revenue: 234500, change: "+12.5%" },
  { name: "Footwear", percentage: 20, revenue: 45600, change: "+8.3%" },
  { name: "Accessories", percentage: 10, revenue: 23400, change: "+15.2%" },
  { name: "Clothing", percentage: 5, revenue: 12800, change: "-2.1%" },
];

// Inventory Movement Data
const inventoryMovementData = [
  { week: "Week 1", inbound: 120, outbound: 100, returns: 15 },
  { week: "Week 2", inbound: 135, outbound: 118, returns: 20 },
  { week: "Week 3", inbound: 98, outbound: 142, returns: -40 },
  { week: "Week 4", inbound: 170, outbound: 135, returns: 25 },
];

export default function Reports() {
  const [activeTab, setActiveTab] = useState("revenue");
  const { toast } = useToast();

  const handleExport = (format: string) => {
    toast({
      title: "Export Started",
      description: `Report export in ${format} format has been initiated.`,
    });
  };

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold text-foreground">Analytics & Reports</h1>
          <p className="text-muted-foreground">Comprehensive business insights and analytics</p>
        </div>
        <div className="flex gap-2">
          <Button variant="outline" onClick={() => handleExport("PDF")}>
            <Download className="h-4 w-4 mr-2" />
            Export PDF
          </Button>
          <Button variant="outline" onClick={() => handleExport("CSV")}>
            <Download className="h-4 w-4 mr-2" />
            Export CSV
          </Button>
          <Button variant="outline" onClick={() => handleExport("Excel")}>
            <Download className="h-4 w-4 mr-2" />
            Export Excel
          </Button>
        </div>
      </div>

      {/* Key Metrics */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <StatsCard
          title="Total Revenue"
          value="$498,911"
          change="+14.2% this month"
          changeType="positive"
          icon={DollarSign}
          color="success"
        />
        <StatsCard
          title="Units Sold"
          value="1,847"
          change="+8.7% this month"
          changeType="positive"
          icon={Package}
          color="primary"
        />
        <StatsCard
          title="Avg Order Value"
          value="$270"
          change="+5.4% this month"
          changeType="positive"
          icon={TrendingUp}
          color="warning"
        />
        <StatsCard
          title="Active Customers"
          value="3,429"
          change="+12.8% this month"
          changeType="positive"
          icon={Users}
          color="primary"
        />
      </div>

      {/* Reports Tabs */}
      <Tabs value={activeTab} onValueChange={setActiveTab} className="space-y-6">
        <TabsList className="grid w-full grid-cols-4">
          <TabsTrigger value="revenue">Revenue Analysis</TabsTrigger>
          <TabsTrigger value="products">Product Performance</TabsTrigger>
          <TabsTrigger value="categories">Category Breakdown</TabsTrigger>
          <TabsTrigger value="inventory">Inventory Movement</TabsTrigger>
        </TabsList>

        {/* Revenue Analysis Tab */}
        <TabsContent value="revenue" className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle>Revenue Over Time</CardTitle>
              <p className="text-sm text-muted-foreground">Monthly revenue and profit trends</p>
            </CardHeader>
            <CardContent>
              <ResponsiveContainer width="100%" height={400}>
                <AreaChart data={revenueData}>
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="month" />
                  <YAxis />
                  <Tooltip 
                    formatter={(value, name) => [
                      `$${value.toLocaleString()}`, 
                      name === 'revenue' ? 'Revenue' : 'Profit'
                    ]}
                  />
                  <Area 
                    type="monotone" 
                    dataKey="revenue" 
                    stackId="1"
                    stroke="hsl(var(--chart-1))" 
                    fill="hsl(var(--chart-1))" 
                    fillOpacity={0.6}
                  />
                  <Area 
                    type="monotone" 
                    dataKey="profit" 
                    stackId="1"
                    stroke="hsl(var(--chart-2))" 
                    fill="hsl(var(--chart-2))" 
                    fillOpacity={0.8}
                  />
                </AreaChart>
              </ResponsiveContainer>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Top Performing Categories</CardTitle>
              <p className="text-sm text-muted-foreground">Category performance this month</p>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {categoryDetails.map((category, index) => (
                  <div key={category.name} className="flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <span className="flex items-center justify-center w-8 h-8 rounded-full bg-primary text-primary-foreground text-sm font-medium">
                        {index + 1}
                      </span>
                      <span className="font-medium">{category.name}</span>
                      <span className="text-sm text-muted-foreground">{category.percentage}% of total sales</span>
                    </div>
                    <div className="text-right">
                      <div className="font-semibold">${category.revenue.toLocaleString()}</div>
                      <div className={`text-sm ${category.change.startsWith('+') ? 'text-success' : 'text-danger'}`}>
                        {category.change}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        {/* Product Performance Tab */}
        <TabsContent value="products" className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle>Product Performance Analysis</CardTitle>
              <p className="text-sm text-muted-foreground">Sales and revenue by product</p>
            </CardHeader>
            <CardContent>
              <ResponsiveContainer width="100%" height={400}>
                <BarChart data={productPerformanceData}>
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="name" fontSize={12} />
                  <YAxis />
                  <Tooltip 
                    formatter={(value, name) => [
                      name === 'revenue' ? `$${value.toLocaleString()}` : `${value} units`,
                      name === 'revenue' ? 'Revenue' : 'Units Sold'
                    ]}
                  />
                  <Bar dataKey="revenue" fill="hsl(var(--chart-2))" />
                </BarChart>
              </ResponsiveContainer>
            </CardContent>
          </Card>
        </TabsContent>

        {/* Category Breakdown Tab */}
        <TabsContent value="categories" className="space-y-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            <Card>
              <CardHeader>
                <CardTitle>Sales by Category</CardTitle>
                <p className="text-sm text-muted-foreground">Distribution of sales across categories</p>
              </CardHeader>
              <CardContent>
                <ResponsiveContainer width="100%" height={300}>
                  <PieChart>
                    <Pie
                      data={categoryData}
                      cx="50%"
                      cy="50%"
                      innerRadius={60}
                      outerRadius={120}
                      paddingAngle={5}
                      dataKey="value"
                    >
                      {categoryData.map((entry, index) => (
                        <Cell key={`cell-${index}`} fill={entry.color} />
                      ))}
                    </Pie>
                    <Tooltip formatter={(value) => [`${value}%`, "Share"]} />
                  </PieChart>
                </ResponsiveContainer>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Category Details</CardTitle>
                <p className="text-sm text-muted-foreground">Detailed breakdown by category</p>
              </CardHeader>
              <CardContent>
                <div className="space-y-6">
                  {categoryDetails.map((category) => (
                    <div key={category.name} className="flex items-center justify-between">
                      <div className="flex items-center gap-3">
                        <div 
                          className="w-4 h-4 rounded-full" 
                          style={{ backgroundColor: categoryData.find(c => c.name === category.name)?.color }}
                        />
                        <span className="font-medium">{category.name}</span>
                      </div>
                      <div className="text-right">
                        <div className="text-lg font-semibold">{category.percentage}%</div>
                        <div className="text-sm text-muted-foreground">of total sales</div>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        </TabsContent>

        {/* Inventory Movement Tab */}
        <TabsContent value="inventory" className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle>Stock Movement Trends</CardTitle>
              <p className="text-sm text-muted-foreground">Inbound vs outbound inventory over time</p>
            </CardHeader>
            <CardContent>
              <ResponsiveContainer width="100%" height={400}>
                <LineChart data={inventoryMovementData}>
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="week" />
                  <YAxis />
                  <Tooltip />
                  <Line 
                    type="monotone" 
                    dataKey="inbound" 
                    stroke="hsl(var(--chart-2))" 
                    strokeWidth={3}
                    dot={{ fill: "hsl(var(--chart-2))", strokeWidth: 2, r: 6 }}
                  />
                  <Line 
                    type="monotone" 
                    dataKey="outbound" 
                    stroke="hsl(var(--chart-4))" 
                    strokeWidth={3}
                    dot={{ fill: "hsl(var(--chart-4))", strokeWidth: 2, r: 6 }}
                  />
                  <Line 
                    type="monotone" 
                    dataKey="returns" 
                    stroke="hsl(var(--chart-1))" 
                    strokeWidth={3}
                    dot={{ fill: "hsl(var(--chart-1))", strokeWidth: 2, r: 6 }}
                  />
                </LineChart>
              </ResponsiveContainer>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  );
}