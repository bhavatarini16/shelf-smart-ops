import { useState } from "react";
import { Search, Filter, Plus, Edit, Trash2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const mockProducts = [
  {
    id: 1,
    name: "Premium Coffee Beans",
    category: "Beverages",
    price: 29.99,
    quantity: 145,
    expiryDate: "2024-12-15",
    status: "In Stock",
    image: "/placeholder.svg"
  },
  {
    id: 2,
    name: "Organic Honey",
    category: "Condiments", 
    price: 15.99,
    quantity: 5,
    expiryDate: "2025-06-30",
    status: "Low Stock",
    image: "/placeholder.svg"
  },
  {
    id: 3,
    name: "Expired Yogurt",
    category: "Dairy",
    price: 4.99,
    quantity: 12,
    expiryDate: "2024-01-10",
    status: "Expired",
    image: "/placeholder.svg"
  },
];

const statusColors = {
  "In Stock": "success",
  "Low Stock": "warning", 
  "Expired": "danger"
} as const;

export default function Products() {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("All");

  const categories = ["All", "Beverages", "Condiments", "Dairy", "Bakery"];

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold text-foreground">Products</h1>
          <p className="text-muted-foreground">Manage your inventory and product catalog</p>
        </div>
        <Button className="gap-2">
          <Plus className="h-4 w-4" />
          Add Product
        </Button>
      </div>

      {/* Filters */}
      <Card>
        <CardContent className="p-4">
          <div className="flex flex-col sm:flex-row gap-4">
            <div className="relative flex-1">
              <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
              <Input
                placeholder="Search products..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="pl-10"
              />
            </div>
            <div className="flex gap-2">
              {categories.map((category) => (
                <Button
                  key={category}
                  variant={selectedCategory === category ? "default" : "outline"}
                  size="sm"
                  onClick={() => setSelectedCategory(category)}
                >
                  {category}
                </Button>
              ))}
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Products Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        {mockProducts.map((product) => (
          <Card key={product.id} className="group hover:shadow-lg transition-shadow">
            <CardHeader className="p-4">
              <div className="aspect-square rounded-lg bg-muted mb-3 overflow-hidden">
                <img 
                  src={product.image} 
                  alt={product.name}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="space-y-2">
                <div className="flex items-start justify-between">
                  <CardTitle className="text-lg font-semibold line-clamp-2">
                    {product.name}
                  </CardTitle>
                  <Badge 
                    variant={statusColors[product.status as keyof typeof statusColors]}
                    className="ml-2"
                  >
                    {product.status}
                  </Badge>
                </div>
                <p className="text-sm text-muted-foreground">{product.category}</p>
              </div>
            </CardHeader>
            <CardContent className="p-4 pt-0">
              <div className="space-y-3">
                <div className="flex justify-between items-center">
                  <span className="text-2xl font-bold text-primary">${product.price}</span>
                  <span className="text-sm text-muted-foreground">
                    {product.quantity} in stock
                  </span>
                </div>
                <div className="text-sm">
                  <span className="text-muted-foreground">Expires: </span>
                  <span className={product.status === "Expired" ? "text-danger" : "text-foreground"}>
                    {new Date(product.expiryDate).toLocaleDateString()}
                  </span>
                </div>
                <div className="flex gap-2 opacity-0 group-hover:opacity-100 transition-opacity">
                  <Button size="sm" variant="outline" className="flex-1 gap-1">
                    <Edit className="h-3 w-3" />
                    Edit
                  </Button>
                  <Button size="sm" variant="outline" className="flex-1 gap-1">
                    <Trash2 className="h-3 w-3" />
                    Delete
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
}