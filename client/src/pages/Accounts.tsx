import { useState } from "react";
import {
  Search,
  Plus,
  Link2,
  Trash2,
  CheckCircle,
  AlertCircle,
} from "lucide-react";

const linkedAccounts = [
  {
    id: 1,
    platform: "Binance",
    email: "user@binance.com",
    status: "active",
    funds: "$45,230.50",
    lastSync: "2 hours ago",
  },
  {
    id: 2,
    platform: "Kraken",
    email: "user@kraken.com",
    status: "active",
    funds: "$32,100.00",
    lastSync: "1 hour ago",
  },
  {
    id: 3,
    platform: "Coinbase",
    email: "user@coinbase.com",
    status: "inactive",
    funds: "$28,900.00",
    lastSync: "5 days ago",
  },
  {
    id: 4,
    platform: "Gemini",
    email: "user@gemini.com",
    status: "pending",
    funds: "$19,200.00",
    lastSync: "In progress",
  },
];

export default function Accounts() {
  const [searchTerm, setSearchTerm] = useState("");
  const [filterStatus, setFilterStatus] = useState<
    "all" | "active" | "inactive" | "pending"
  >("all");

  const filteredAccounts = linkedAccounts.filter((account) => {
    const matchesSearch =
      account.platform.toLowerCase().includes(searchTerm.toLowerCase()) ||
      account.email.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesStatus =
      filterStatus === "all" || account.status === filterStatus;
    return matchesSearch && matchesStatus;
  });

  const getStatusColor = (status: string) => {
    switch (status) {
      case "active":
        return "bg-green-100 text-green-700";
      case "inactive":
        return "bg-gray-100 text-gray-700";
      case "pending":
        return "bg-amber-100 text-amber-700";
      default:
        return "bg-gray-100 text-gray-700";
    }
  };

  const getStatusIcon = (status: string) => {
    switch (status) {
      case "active":
        return <CheckCircle size={16} />;
      case "pending":
        return <AlertCircle size={16} />;
      default:
        return null;
    }
  };

  return (
    <div className="space-y-8">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
        <div>
          <h1 className="text-3xl font-bold text-foreground">
            Linked Accounts
          </h1>
          <p className="text-muted-foreground mt-2">
            Manage your connected trading platforms
          </p>
        </div>
        <button className="bg-primary text-primary-foreground font-semibold py-2 px-4 rounded-lg hover:opacity-90 transition-opacity flex items-center justify-center gap-2 w-full sm:w-auto">
          <Plus size={20} />
          Add New Account
        </button>
      </div>

      {/* Search and Filter */}
      <div className="space-y-4">
        <div className="relative">
          <Search
            className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground"
            size={20}
          />
          <input
            type="text"
            placeholder="Search by platform or email..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-full pl-10 pr-4 py-2 rounded-lg border border-border bg-input text-foreground placeholder-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary"
          />
        </div>

        <div className="flex flex-wrap gap-2">
          {(["all", "active", "inactive", "pending"] as const).map((status) => (
            <button
              key={status}
              onClick={() => setFilterStatus(status)}
              className={`px-4 py-2 rounded-lg font-medium transition-colors capitalize ${
                filterStatus === status
                  ? "bg-primary text-primary-foreground"
                  : "bg-muted text-muted-foreground hover:bg-border"
              }`}
            >
              {status}
            </button>
          ))}
        </div>
      </div>

      {/* Accounts Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {filteredAccounts.map((account) => (
          <div
            key={account.id}
            className="bg-card rounded-lg border border-border p-6 space-y-4"
          >
            <div className="flex items-start justify-between">
              <div className="flex-1">
                <div className="flex items-center gap-2 mb-2">
                  <h3 className="text-lg font-bold text-foreground">
                    {account.platform}
                  </h3>
                  <span
                    className={`inline-flex items-center gap-1 px-2 py-1 rounded-full text-xs font-semibold ${getStatusColor(
                      account.status,
                    )}`}
                  >
                    {getStatusIcon(account.status)}
                    {account.status.charAt(0).toUpperCase() +
                      account.status.slice(1)}
                  </span>
                </div>
                <p className="text-sm text-muted-foreground">{account.email}</p>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-4 pt-2 border-t border-border">
              <div>
                <p className="text-xs text-muted-foreground font-medium">
                  Total Funds
                </p>
                <p className="text-lg font-bold text-foreground mt-1">
                  {account.funds}
                </p>
              </div>
              <div>
                <p className="text-xs text-muted-foreground font-medium">
                  Last Synced
                </p>
                <p className="text-lg font-bold text-foreground mt-1">
                  {account.lastSync}
                </p>
              </div>
            </div>

            <div className="flex gap-2 pt-2">
              <button className="flex-1 bg-secondary text-secondary-foreground font-semibold py-2 px-4 rounded-lg hover:opacity-90 transition-opacity flex items-center justify-center gap-2 border border-border">
                <Link2 size={16} />
                Relink
              </button>
              <button className="flex-1 bg-destructive/10 text-destructive font-semibold py-2 px-4 rounded-lg hover:bg-destructive/20 transition-colors flex items-center justify-center gap-2 border border-destructive/20">
                <Trash2 size={16} />
                Unlink
              </button>
            </div>
          </div>
        ))}
      </div>

      {filteredAccounts.length === 0 && (
        <div className="text-center py-12">
          <p className="text-muted-foreground mb-4">No accounts found</p>
          <button className="bg-primary text-primary-foreground font-semibold py-2 px-6 rounded-lg hover:opacity-90 transition-opacity inline-flex items-center gap-2">
            <Plus size={20} />
            Add Your First Account
          </button>
        </div>
      )}
    </div>
  );
}
