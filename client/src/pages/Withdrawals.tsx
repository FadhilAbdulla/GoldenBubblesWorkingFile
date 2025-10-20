import { ArrowUpRight, AlertCircle } from "lucide-react";

const withdrawalHistory = [
  {
    id: 1,
    date: "Feb 4, 2024",
    account: "Binance",
    amount: "-$2,500.00",
    method: "Bank Transfer",
    status: "completed",
  },
  {
    id: 2,
    date: "Feb 2, 2024",
    account: "Kraken",
    amount: "-$1,800.00",
    method: "Bank Transfer",
    status: "completed",
  },
  {
    id: 3,
    date: "Jan 31, 2024",
    account: "Coinbase",
    amount: "-$3,500.00",
    method: "Wire Transfer",
    status: "completed",
  },
];

export default function Withdrawals() {
  return (
    <div className="space-y-8">
      {/* Header */}
      <div>
        <h1 className="text-3xl font-bold text-foreground">Withdrawals</h1>
        <p className="text-muted-foreground mt-2">
          Request withdrawals from your accounts
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Withdrawal Form */}
        <div className="lg:col-span-1 bg-card rounded-lg border border-border p-6 space-y-6">
          <div>
            <h2 className="text-xl font-bold text-foreground">
              New Withdrawal
            </h2>
            <p className="text-sm text-muted-foreground mt-1">
              Request to withdraw funds
            </p>
          </div>

          <div className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-foreground mb-2">
                Select Account
              </label>
              <select className="w-full px-4 py-2 rounded-lg border border-border bg-input text-foreground focus:outline-none focus:ring-2 focus:ring-primary">
                <option>Binance - $45,230.50</option>
                <option>Kraken - $32,100.00</option>
                <option>Coinbase - $28,900.00</option>
              </select>
            </div>

            <div className="bg-blue-50 border border-blue-200 rounded-lg p-3">
              <p className="text-xs text-blue-700">
                <span className="font-semibold">Available Balance:</span>{" "}
                $45,230.50
              </p>
            </div>

            <div>
              <label className="block text-sm font-medium text-foreground mb-2">
                Withdrawal Amount
              </label>
              <input
                type="number"
                placeholder="0.00"
                className="w-full px-4 py-2 rounded-lg border border-border bg-input text-foreground placeholder-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-foreground mb-2">
                Withdrawal Method
              </label>
              <select className="w-full px-4 py-2 rounded-lg border border-border bg-input text-foreground focus:outline-none focus:ring-2 focus:ring-primary">
                <option>Bank Transfer</option>
                <option>Wire Transfer</option>
                <option>Crypto Transfer</option>
              </select>
            </div>

            <div className="bg-muted/50 rounded-lg p-3">
              <p className="text-xs text-muted-foreground">
                <span className="font-semibold">Processing Fee:</span> $25.00
              </p>
              <p className="text-xs text-muted-foreground mt-1">
                <span className="font-semibold">Estimated Time:</span> 2-3
                business days
              </p>
            </div>

            <button className="w-full bg-primary text-primary-foreground font-semibold py-3 px-4 rounded-lg hover:opacity-90 transition-opacity">
              Request Withdrawal
            </button>
          </div>
        </div>

        {/* Withdrawal History */}
        <div className="lg:col-span-2 bg-card rounded-lg border border-border p-6">
          <div className="mb-6">
            <h2 className="text-xl font-bold text-foreground">
              Withdrawal History
            </h2>
            <p className="text-sm text-muted-foreground mt-1">
              Your recent withdrawal requests
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
                {withdrawalHistory.map((withdrawal) => (
                  <tr
                    key={withdrawal.id}
                    className="border-b border-border hover:bg-muted/50 transition-colors"
                  >
                    <td className="py-3 px-4 text-foreground">
                      {withdrawal.date}
                    </td>
                    <td className="py-3 px-4 text-foreground">
                      {withdrawal.account}
                    </td>
                    <td className="py-3 px-4 font-semibold text-red-600">
                      {withdrawal.amount}
                    </td>
                    <td className="py-3 px-4 text-foreground">
                      {withdrawal.method}
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
    </div>
  );
}
