import { ArrowUpRight, ArrowDownLeft, TrendingUp, Plus } from "lucide-react";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

const summaryCards = [
  {
    title: "Total Accounts",
    value: "4",
    change: "+1 this month",
    icon: "📊",
  },
  {
    title: "Total Funds",
    value: "$125,430.50",
    change: "+12.5%",
    icon: "💰",
  },
  {
    title: "Pending Funds",
    value: "$18,900.00",
    change: "2 deposits",
    icon: "⏳",
  },
  {
    title: "Recent Activity",
    value: "3 transactions",
    change: "Last 24 hours",
    icon: "📈",
  },
];

const chartData = [
  { date: "Jan 1", value: 85000 },
  { date: "Jan 8", value: 92000 },
  { date: "Jan 15", value: 88500 },
  { date: "Jan 22", value: 105000 },
  { date: "Jan 29", value: 115000 },
  { date: "Feb 5", value: 125430 },
];

const recentTransactions = [
  {
    id: 1,
    type: "deposit",
    platform: "Binance",
    amount: "$5,000.00",
    status: "completed",
    date: "2 hours ago",
  },
  {
    id: 2,
    type: "withdrawal",
    platform: "Kraken",
    amount: "-$2,500.00",
    status: "pending",
    date: "4 hours ago",
  },
  {
    id: 3,
    type: "deposit",
    platform: "Coinbase",
    amount: "$3,200.00",
    status: "completed",
    date: "1 day ago",
  },
  {
    id: 4,
    type: "withdrawal",
    platform: "Binance",
    amount: "-$1,800.00",
    status: "completed",
    date: "2 days ago",
  },
  {
    id: 5,
    type: "deposit",
    platform: "Kraken",
    amount: "$8,450.00",
    status: "completed",
    date: "3 days ago",
  },
];

export default function Dashboard() {
  return (
    <div className="space-y-8">
      {/* Header */}
      <div>
        <h1 className="text-3xl font-bold text-foreground">Dashboard</h1>
        <p className="text-muted-foreground mt-2">
          Welcome back! Here's your trading account summary.
        </p>
      </div>

      {/* Summary Cards Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {summaryCards.map((card, idx) => (
          <div
            key={idx}
            className="bg-card rounded-lg border border-border p-6 space-y-4"
          >
            <div className="flex items-start justify-between">
              <div>
                <p className="text-sm text-muted-foreground font-medium">
                  {card.title}
                </p>
                <p className="text-2xl font-bold text-foreground mt-1">
                  {card.value}
                </p>
              </div>
              <span className="text-2xl">{card.icon}</span>
            </div>
            <p className="text-sm text-muted-foreground">{card.change}</p>
          </div>
        ))}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Chart */}
        <div className="lg:col-span-2 bg-card rounded-lg border border-border p-6">
          <div className="mb-6">
            <h2 className="text-xl font-bold text-foreground">
              Account Balance
            </h2>
            <p className="text-sm text-muted-foreground mt-1">
              Last 30 days trend
            </p>
          </div>
          <ResponsiveContainer width="100%" height={300}>
            <LineChart data={chartData}>
              <CartesianGrid
                strokeDasharray="3 3"
                stroke="hsl(var(--border))"
              />
              <XAxis dataKey="date" stroke="hsl(var(--muted-foreground))" />
              <YAxis stroke="hsl(var(--muted-foreground))" />
              <Tooltip
                contentStyle={{
                  backgroundColor: "hsl(var(--card))",
                  border: "1px solid hsl(var(--border))",
                  borderRadius: "8px",
                }}
                labelStyle={{ color: "hsl(var(--foreground))" }}
              />
              <Line
                type="monotone"
                dataKey="value"
                stroke="hsl(var(--primary))"
                strokeWidth={2}
                dot={{ fill: "hsl(var(--primary))", r: 4 }}
                activeDot={{ r: 6 }}
              />
            </LineChart>
          </ResponsiveContainer>
        </div>

        {/* Quick Actions */}
        <div className="bg-card rounded-lg border border-border p-6 space-y-4">
          <h2 className="text-xl font-bold text-foreground">Quick Actions</h2>
          <button className="w-full bg-primary text-primary-foreground font-semibold py-3 px-4 rounded-lg hover:opacity-90 transition-opacity flex items-center justify-center gap-2">
            <Plus size={20} />
            Deposit Funds
          </button>
          <button className="w-full bg-secondary text-secondary-foreground font-semibold py-3 px-4 rounded-lg hover:bg-opacity-90 transition-opacity border border-border">
            Withdraw
          </button>
          <button className="w-full bg-secondary text-secondary-foreground font-semibold py-3 px-4 rounded-lg hover:bg-opacity-90 transition-opacity border border-border">
            Link Account
          </button>
        </div>
      </div>

      {/* Recent Transactions */}
      <div className="bg-card rounded-lg border border-border p-6">
        <div className="mb-6">
          <h2 className="text-xl font-bold text-foreground">
            Recent Transactions
          </h2>
          <p className="text-sm text-muted-foreground mt-1">
            Your latest account activity
          </p>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full text-sm">
            <thead>
              <tr className="border-b border-border">
                <th className="text-left py-3 px-4 font-semibold text-muted-foreground">
                  Type
                </th>
                <th className="text-left py-3 px-4 font-semibold text-muted-foreground">
                  Platform
                </th>
                <th className="text-left py-3 px-4 font-semibold text-muted-foreground">
                  Amount
                </th>
                <th className="text-left py-3 px-4 font-semibold text-muted-foreground">
                  Status
                </th>
                <th className="text-left py-3 px-4 font-semibold text-muted-foreground">
                  Date
                </th>
              </tr>
            </thead>
            <tbody>
              {recentTransactions.map((tx) => (
                <tr
                  key={tx.id}
                  className="border-b border-border hover:bg-muted/50 transition-colors"
                >
                  <td className="py-3 px-4">
                    <div className="flex items-center gap-2">
                      {tx.type === "deposit" ? (
                        <ArrowDownLeft className="text-green-600" size={16} />
                      ) : (
                        <ArrowUpRight className="text-red-600" size={16} />
                      )}
                      <span className="font-medium text-foreground capitalize">
                        {tx.type}
                      </span>
                    </div>
                  </td>
                  <td className="py-3 px-4 text-foreground">{tx.platform}</td>
                  <td
                    className={`py-3 px-4 font-semibold ${
                      tx.type === "deposit" ? "text-green-600" : "text-red-600"
                    }`}
                  >
                    {tx.amount}
                  </td>
                  <td className="py-3 px-4">
                    <span
                      className={`inline-block px-3 py-1 rounded-full text-xs font-semibold ${
                        tx.status === "completed"
                          ? "bg-green-100 text-green-700"
                          : "bg-amber-100 text-amber-700"
                      }`}
                    >
                      {tx.status.charAt(0).toUpperCase() + tx.status.slice(1)}
                    </span>
                  </td>
                  <td className="py-3 px-4 text-muted-foreground">{tx.date}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
