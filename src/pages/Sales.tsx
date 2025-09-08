import { useState } from "react";
import { ShoppingCart, DollarSign, CreditCard, TrendingUp, Plus } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { PieChart, Pie, Cell, ResponsiveContainer, BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip } from "recharts";
import StatsCard from "@/components/dashboard/StatsCard";
import { useToast } from "@/components/ui/use-toast";

const salesData = [
  { id: 1, date: "2024-01-21", product: "iPhone 14", staff: "John Doe", quantity: 2, price: 999, total: 1998, method: "Credit Card" },
  { id: 2, date: "2024-01-21", product: "Samsung Galaxy S23", staff: "Jane Smith", quantity: 1, price: 899, total: 899, method: "Cash" },
  { id: 3, date: "2024-01-20", product: "MacBook Pro", staff: "Mike Johnson", quantity: 1, price: 1999, total: 1999, method: "Bank Transfer" },
  { id: 4, date: "2024-01-20", product: "AirPods Pro", staff: "Sarah Wilson", quantity: 3, price: 249, total: 747, method: "Credit Card" },
  { id: 5, date: "2024-01-19", product: "iPad Air", staff: "John Doe", quantity: 1, price: 599, total: 599, method: "Debit Card" },
];

const paymentMethodData = [
  { name: "Credit Card", value: 45, color: "hsl(var(--chart-1))" },
  { name: "Cash", value: 25, color: "hsl(var(--chart-2))" },
  { name: "Bank Transfer", value: 20, color: "hsl(var(--chart-3))" },
  { name: "Debit Card", value: 10, color: "hsl(var(--chart-4))" },
];

const topSellingData = [
  { product: "iPhone 14", sales: 45, revenue: 44955 },
  { product: "Samsung Galaxy S23", sales: 32, revenue: 28768 },
  { product: "MacBook Pro", sales: 18, revenue: 35982 },
  { product: "AirPods Pro", sales: 67, revenue: 16683 },
  { product: "iPad Air", sales: 23, revenue: 13777 },
];

export default function Sales() {
  const [isNewSaleOpen, setIsNewSaleOpen] = useState(false);
  const { toast } = useToast();

  const handleNewSale = () => {
    toast({
      title: "Sale Recorded",
      description: "New sale has been successfully recorded.",
    });
    setIsNewSaleOpen(false);
  };

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold text-foreground">Sales Management</h1>
          <p className="text-muted-foreground">Track sales, record transactions, and analyze performance</p>
        </div>
        <Dialog open={isNewSaleOpen} onOpenChange={setIsNewSaleOpen}>
          <DialogTrigger asChild>
            <Button className="flex items-center gap-2">
              <Plus className="h-4 w-4" />
              Record New Sale
            </Button>
          </DialogTrigger>
          <DialogContent className="sm:max-w-[425px]">
            <DialogHeader>
              <DialogTitle>Record New Sale</DialogTitle>
            </DialogHeader>
            <div className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="product">Product</Label>
                <Select>
                  <SelectTrigger>
                    <SelectValue placeholder="Select product" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="iphone14">iPhone 14</SelectItem>
                    <SelectItem value="samsung-s23">Samsung Galaxy S23</SelectItem>
                    <SelectItem value="macbook">MacBook Pro</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <div className="space-y-2">
                <Label htmlFor="quantity">Quantity</Label>
                <Input type="number" placeholder="Enter quantity" min="1" />
              </div>
              <div className="space-y-2">
                <Label htmlFor="price">Unit Price</Label>
                <Input type="number" placeholder="Enter price" />
              </div>
              <div className="space-y-2">
                <Label htmlFor="payment">Payment Method</Label>
                <Select>
                  <SelectTrigger>
                    <SelectValue placeholder="Select payment method" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="credit">Credit Card</SelectItem>
                    <SelectItem value="cash">Cash</SelectItem>
                    <SelectItem value="bank">Bank Transfer</SelectItem>
                    <SelectItem value="debit">Debit Card</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <Button onClick={handleNewSale} className="w-full">Record Sale</Button>
            </div>
          </DialogContent>
        </Dialog>
      </div>

      {/* Stats Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <StatsCard
          title="Today's Sales"
          value="$8,540"
          change="+15.2% from yesterday"
          changeType="positive"
          icon={DollarSign}
          color="success"
        />
        <StatsCard
          title="Transactions"
          value="47"
          change="+8 from yesterday"
          changeType="positive"
          icon={ShoppingCart}
          color="primary"
        />
        <StatsCard
          title="Avg Order Value"
          value="$182"
          change="+5.4% from yesterday"
          changeType="positive"
          icon={TrendingUp}
          color="warning"
        />
        <StatsCard
          title="Payment Methods"
          value="4"
          change="Active payment options"
          changeType="neutral"
          icon={CreditCard}
          color="primary"
        />
      </div>

      {/* Charts */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <Card>
          <CardHeader>
            <CardTitle>Payment Method Distribution</CardTitle>
          </CardHeader>
          <CardContent>
            <ResponsiveContainer width="100%" height={300}>
              <PieChart>
                <Pie
                  data={paymentMethodData}
                  cx="50%"
                  cy="50%"
                  innerRadius={60}
                  outerRadius={120}
                  paddingAngle={5}
                  dataKey="value"
                >
                  {paymentMethodData.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={entry.color} />
                  ))}
                </Pie>
                <Tooltip />
              </PieChart>
            </ResponsiveContainer>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Top Selling Products</CardTitle>
          </CardHeader>
          <CardContent>
            <ResponsiveContainer width="100%" height={300}>
              <BarChart data={topSellingData}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="product" fontSize={12} />
                <YAxis fontSize={12} />
                <Tooltip />
                <Bar dataKey="sales" fill="hsl(var(--primary))" />
              </BarChart>
            </ResponsiveContainer>
          </CardContent>
        </Card>
      </div>

      {/* Sales History */}
      <Card>
        <CardHeader>
          <CardTitle>Recent Sales History</CardTitle>
        </CardHeader>
        <CardContent>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Date</TableHead>
                <TableHead>Product</TableHead>
                <TableHead>Staff</TableHead>
                <TableHead>Quantity</TableHead>
                <TableHead>Unit Price</TableHead>
                <TableHead>Total</TableHead>
                <TableHead>Payment Method</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {salesData.map((sale) => (
                <TableRow key={sale.id}>
                  <TableCell>{sale.date}</TableCell>
                  <TableCell className="font-medium">{sale.product}</TableCell>
                  <TableCell>{sale.staff}</TableCell>
                  <TableCell>{sale.quantity}</TableCell>
                  <TableCell>${sale.price}</TableCell>
                  <TableCell className="font-semibold">${sale.total}</TableCell>
                  <TableCell>
                    <Badge variant="outline">{sale.method}</Badge>
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