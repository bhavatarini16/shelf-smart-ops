import { DollarSign, Package, AlertTriangle, TrendingUp } from "lucide-react";
import StatsCard from "@/components/dashboard/StatsCard";
import SalesChart from "@/components/dashboard/SalesChart";
import TopProducts from "@/components/dashboard/TopProducts";
import QuickActions from "@/components/dashboard/QuickActions";
import ActivityFeed from "@/components/dashboard/ActivityFeed";

export default function Dashboard() {
  return (
    <div className="space-y-6">
      {/* Header */}
      <div>
        <h1 className="text-3xl font-bold text-foreground">Dashboard</h1>
        <p className="text-muted-foreground">Welcome back! Here's what's happening today.</p>
      </div>

      {/* Stats Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <StatsCard
          title="Daily Sales"
          value="$18,540"
          change="+12.5% from yesterday"
          changeType="positive"
          icon={DollarSign}
          color="success"
        />
        <StatsCard
          title="Total Products"
          value="1,247"
          change="+3 new today"
          changeType="positive"
          icon={Package}
          color="primary"
        />
        <StatsCard
          title="Low Stock Items"
          value="23"
          change="5 need immediate attention"
          changeType="negative"
          icon={AlertTriangle}
          color="warning"
        />
        <StatsCard
          title="Expiry Alerts"
          value="8"
          change="2 expire today"
          changeType="negative"
          icon={TrendingUp}
          color="danger"
        />
      </div>

      {/* Charts and Actions */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="lg:col-span-2">
          <SalesChart />
        </div>
        <div className="space-y-6">
          <QuickActions />
          <TopProducts />
        </div>
      </div>

      {/* Activity Feed */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="lg:col-span-2">
          {/* This space could be used for additional charts or reports */}
        </div>
        <ActivityFeed />
      </div>
    </div>
  );
}