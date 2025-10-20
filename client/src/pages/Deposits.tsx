import { useState } from "react";
import { ArrowDownLeft, Info } from "lucide-react";

const depositHistory = [
  {
    id: 1,
    date: "Feb 5, 2024",
    account: "Binance",
    amount: "$5,000.00",
    method: "Bank Transfer",
    type: "Bank Transfer",
    status: "completed",
  },
  {
    id: 2,
    date: "Feb 3, 2024",
    account: "Kraken",
    amount: "$3,200.00",
    method: "Credit Card",
    type: "Payment Gateway",
    status: "completed",
  },
  {
    id: 3,
    date: "Feb 1, 2024",
    account: "Coinbase",
    amount: "$8,450.00",
    method: "Bank Transfer",
    type: "Bank Transfer",
    status: "completed",
  },
  {
    id: 4,
    date: "Jan 29, 2024",
    account: "Binance",
    amount: "$2,100.00",
    method: "Debit Card",
    type: "Payment Gateway",
    status: "completed",
  },
];

export default function Deposits() {
  const [activeTab, setActiveTab] = useState<"bank" | "gateway">("bank");

  return (
    <div className="space-y-8">
      {/* Header */}
      <div>
        <h1 className="text-3xl font-bold text-foreground">Deposits</h1>
        <p className="text-muted-foreground mt-2">
          Manage your deposit requests and history
        </p>
      </div>

      {/* Tab Bar */}
      <div className="flex gap-2 bg-muted rounded-lg p-1 w-fit">
        <button
          onClick={() => setActiveTab("bank")}
          className={`px-6 py-2 rounded-md font-semibold transition-all ${
            activeTab === "bank"
              ? "bg-primary text-primary-foreground shadow-md"
              : "text-muted-foreground hover:text-foreground"
          }`}
        >
          Bank Transfer
        </button>
        <button
          onClick={() => setActiveTab("gateway")}
          className={`px-6 py-2 rounded-md font-semibold transition-all ${
            activeTab === "gateway"
              ? "bg-primary text-primary-foreground shadow-md"
              : "text-muted-foreground hover:text-foreground"
          }`}
        >
          Payment Gateway
        </button>
      </div>

      {/* Form and Notes Section */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Form */}
        <div className="lg:col-span-2 bg-card rounded-lg border border-border p-6 space-y-6">
          <div>
            <h2 className="text-xl font-bold text-foreground">
              {activeTab === "bank" ? "Bank Transfer" : "Payment Gateway"}
            </h2>
            <p className="text-sm text-muted-foreground mt-1">
              {activeTab === "bank"
                ? "Transfer funds via bank"
                : "Use credit/debit card"}
            </p>
          </div>

          <div className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-foreground mb-2">
                Select Account
              </label>
              <select className="w-full px-4 py-2.5 rounded-lg border border-border bg-input text-foreground focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent">
                <option>Binance</option>
                <option>Kraken</option>
                <option>Coinbase</option>
              </select>
            </div>

            <div>
              <label className="block text-sm font-medium text-foreground mb-2">
                Amount
              </label>
              <div className="relative">
                <span className="absolute left-4 top-1/2 -translate-y-1/2 text-muted-foreground">
                  $
                </span>
                <input
                  type="number"
                  placeholder="0.00"
                  className="w-full pl-8 pr-4 py-2.5 rounded-lg border border-border bg-input text-foreground placeholder-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
                />
              </div>
            </div>

            {activeTab === "bank" && (
              <div>
                <label className="block text-sm font-medium text-foreground mb-2">
                  Bank Account
                </label>
                <select className="w-full px-4 py-2.5 rounded-lg border border-border bg-input text-foreground focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent">
                  <option>Chase Bank ••••5678</option>
                  <option>Wells Fargo ••••1234</option>
                </select>
              </div>
            )}

            {activeTab === "gateway" && (
              <div>
                <label className="block text-sm font-medium text-foreground mb-2">
                  Card Type
                </label>
                <select className="w-full px-4 py-2.5 rounded-lg border border-border bg-input text-foreground focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent">
                  <option>Credit Card</option>
                  <option>Debit Card</option>
                  <option>Digital Wallet</option>
                </select>
              </div>
            )}

            <div className="bg-muted/50 rounded-lg p-4">
              <p className="text-xs text-muted-foreground">
                <span className="font-semibold">Estimated Fee:</span> $15.00
              </p>
              <p className="text-xs text-muted-foreground mt-2">
                <span className="font-semibold">Total:</span> Amount + $15.00
              </p>
            </div>

            <button className="w-full bg-primary text-primary-foreground font-semibold py-3 px-4 rounded-lg hover:opacity-90 transition-opacity">
              Submit Deposit
            </button>
          </div>
        </div>

        {/* Notes Section */}
        <div className="bg-card rounded-lg border border-border p-6">
          <div className="flex items-start gap-3 mb-4">
            <Info className="text-primary flex-shrink-0 mt-1" size={20} />
            <h3 className="text-lg font-bold text-foreground">
              {activeTab === "bank" ? "Bank Transfer" : "Payment Gateway"}
            </h3>
          </div>

          <div className="space-y-4">
            <div>
              <p className="text-sm font-semibold text-foreground">
                Processing Time
              </p>
              <p className="text-sm text-muted-foreground mt-1">
                {activeTab === "bank"
                  ? "2-3 business days"
                  : "Instant to 24 hours"}
              </p>
            </div>

            <div>
              <p className="text-sm font-semibold text-foreground">Fee</p>
              <p className="text-sm text-muted-foreground mt-1">
                {activeTab === "bank" ? "$15.00" : "$10.00 + 2.5%"}
              </p>
            </div>

            <div>
              <p className="text-sm font-semibold text-foreground">
                Minimum Amount
              </p>
              <p className="text-sm text-muted-foreground mt-1">
                {activeTab === "bank" ? "$100" : "$50"}
              </p>
            </div>

            <div>
              <p className="text-sm font-semibold text-foreground">
                Maximum Amount
              </p>
              <p className="text-sm text-muted-foreground mt-1">
                {activeTab === "bank" ? "$50,000" : "$10,000"}
              </p>
            </div>

            <div className="bg-blue-50 border border-blue-200 rounded-lg p-3 mt-4">
              <p className="text-xs text-blue-700">
                {activeTab === "bank"
                  ? "✓ Most secure method with lowest fees"
                  : "✓ Fastest deposits with instant processing"}
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* History Section */}
      <div className="bg-card rounded-lg border border-border p-6">
        <div className="mb-6">
          <h2 className="text-xl font-bold text-foreground">Deposit History</h2>
          <p className="text-sm text-muted-foreground mt-1">
            Your recent deposits and status
          </p>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full text-sm">
            <thead>
              <tr className="border-b border-border">
                <th className="text-left py-3 px-4 font-semibold text-muted-foreground">
                  Date
                </th>
                <th className="text-left py-3 px-4 font-semibold text-muted-foreground">
                  Account
                </th>
                <th className="text-left py-3 px-4 font-semibold text-muted-foreground">
                  Type
                </th>
                <th className="text-left py-3 px-4 font-semibold text-muted-foreground">
                  Amount
                </th>
                <th className="text-left py-3 px-4 font-semibold text-muted-foreground">
                  Method
                </th>
                <th className="text-left py-3 px-4 font-semibold text-muted-foreground">
                  Status
                </th>
              </tr>
            </thead>
            <tbody>
              {depositHistory.map((deposit) => (
                <tr
                  key={deposit.id}
                  className="border-b border-border hover:bg-muted/50 transition-colors"
                >
                  <td className="py-3 px-4 text-foreground">{deposit.date}</td>
                  <td className="py-3 px-4 text-foreground">
                    {deposit.account}
                  </td>
                  <td className="py-3 px-4">
                    <span className="px-2 py-1 rounded text-xs font-medium bg-blue-100 text-blue-700">
                      {deposit.type}
                    </span>
                  </td>
                  <td className="py-3 px-4 font-semibold text-green-600">
                    {deposit.amount}
                  </td>
                  <td className="py-3 px-4 text-foreground">
                    {deposit.method}
                  </td>
                  <td className="py-3 px-4">
                    <span className="inline-block px-3 py-1 rounded-full text-xs font-semibold bg-green-100 text-green-700">
                      Completed
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
