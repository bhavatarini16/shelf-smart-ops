import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from "recharts";

const salesData = [
  { date: "Jan 15", sales: 12500, orders: 45 },
  { date: "Jan 16", sales: 14200, orders: 52 },
  { date: "Jan 17", sales: 11800, orders: 38 },
  { date: "Jan 18", sales: 16300, orders: 61 },
  { date: "Jan 19", sales: 13900, orders: 47 },
  { date: "Jan 20", sales: 18500, orders: 68 },
  { date: "Jan 21", sales: 15600, orders: 54 },
];

export default function SalesChart() {
  return (
    <Card>
      <CardHeader>
        <CardTitle className="text-lg font-semibold">Sales Trend (7 Days)</CardTitle>
      </CardHeader>
      <CardContent>
        <ResponsiveContainer width="100%" height={300}>
          <LineChart data={salesData}>
            <CartesianGrid strokeDasharray="3 3" className="stroke-border" />
            <XAxis 
              dataKey="date" 
              className="text-muted-foreground"
              fontSize={12}
            />
            <YAxis 
              className="text-muted-foreground"
              fontSize={12}
            />
            <Tooltip 
              contentStyle={{
                backgroundColor: 'hsl(var(--card))',
                border: '1px solid hsl(var(--border))',
                borderRadius: '8px'
              }}
            />
            <Line 
              type="monotone" 
              dataKey="sales" 
              stroke="hsl(var(--primary))" 
              strokeWidth={2}
              dot={{ fill: 'hsl(var(--primary))', strokeWidth: 2, r: 4 }}
            />
          </LineChart>
        </ResponsiveContainer>
      </CardContent>
    </Card>
  );
}