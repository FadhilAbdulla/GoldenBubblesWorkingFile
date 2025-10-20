import {
  ArrowDownLeft,
  ArrowUpRight,
  AlertCircle,
  CheckCircle,
  Clock,
} from "lucide-react";

const activities = [
  {
    id: 1,
    type: "deposit",
    title: "Deposit from Binance",
    description: "5,000.00 USD received",
    amount: "+$5,000.00",
    status: "completed",
    date: "Feb 5, 2024",
    time: "2:30 PM",
  },
  {
    id: 2,
    type: "withdrawal",
    title: "Withdrawal Request",
    description: "Pending approval for Kraken",
    amount: "-$2,500.00",
    status: "pending",
    date: "Feb 4, 2024",
    time: "10:15 AM",
  },
  {
    id: 3,
    type: "deposit",
    title: "Deposit from Coinbase",
    description: "3,200.00 USD received",
    amount: "+$3,200.00",
    status: "completed",
    date: "Feb 3, 2024",
    time: "3:45 PM",
  },
  {
    id: 4,
    type: "account",
    title: "Account Linked",
    description: "Successfully linked Gemini",
    amount: null,
    status: "completed",
    date: "Feb 1, 2024",
    time: "11:20 AM",
  },
  {
    id: 5,
    type: "withdrawal",
    title: "Withdrawal Completed",
    description: "1,800.00 USD transferred",
    amount: "-$1,800.00",
    status: "completed",
    date: "Jan 31, 2024",
    time: "4:00 PM",
  },
  {
    id: 6,
    type: "deposit",
    title: "Deposit from Kraken",
    description: "8,450.00 USD received",
    amount: "+$8,450.00",
    status: "completed",
    date: "Jan 29, 2024",
    time: "1:30 PM",
  },
];

const getActivityIcon = (type: string) => {
  switch (type) {
    case "deposit":
      return <ArrowDownLeft className="text-green-600" size={20} />;
    case "withdrawal":
      return <ArrowUpRight className="text-red-600" size={20} />;
    case "account":
      return <CheckCircle className="text-blue-600" size={20} />;
    default:
      return <AlertCircle className="text-gray-600" size={20} />;
  }
};

const getStatusIcon = (status: string) => {
  if (status === "completed") {
    return <CheckCircle className="text-green-600" size={16} />;
  } else if (status === "pending") {
    return <Clock className="text-amber-600" size={16} />;
  }
  return null;
};

export default function History() {
  return (
    <div className="space-y-8">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
        <div>
          <h1 className="text-3xl font-bold text-foreground">
            Activity History
          </h1>
          <p className="text-muted-foreground mt-2">
            Complete timeline of all your account activities
          </p>
        </div>
        <select className="px-4 py-2 rounded-lg border border-border bg-input text-foreground focus:outline-none focus:ring-2 focus:ring-primary">
          <option>Last 30 days</option>
          <option>Last 90 days</option>
          <option>Last 6 months</option>
          <option>All time</option>
        </select>
      </div>

      {/* Timeline */}
      <div className="bg-card rounded-lg border border-border p-6">
        <div className="space-y-6">
          {activities.map((activity, idx) => (
            <div key={activity.id} className="space-y-4">
              <div className="flex gap-4">
                {/* Timeline connector */}
                <div className="flex flex-col items-center">
                  <div className="w-10 h-10 rounded-full bg-muted flex items-center justify-center flex-shrink-0">
                    {getActivityIcon(activity.type)}
                  </div>
                  {idx < activities.length - 1 && (
                    <div className="w-0.5 h-12 bg-border mt-2" />
                  )}
                </div>

                {/* Activity content */}
                <div className="flex-1 pt-1">
                  <div className="flex items-start justify-between gap-4 mb-2">
                    <div>
                      <h3 className="font-semibold text-foreground">
                        {activity.title}
                      </h3>
                      <p className="text-sm text-muted-foreground mt-1">
                        {activity.description}
                      </p>
                    </div>
                    {activity.amount && (
                      <div
                        className={`font-bold whitespace-nowrap text-lg ${
                          activity.type === "deposit"
                            ? "text-green-600"
                            : activity.type === "withdrawal"
                              ? "text-red-600"
                              : "text-foreground"
                        }`}
                      >
                        {activity.amount}
                      </div>
                    )}
                  </div>

                  <div className="flex items-center justify-between gap-4 text-sm">
                    <span className="text-muted-foreground">
                      {activity.date} at {activity.time}
                    </span>
                    <div className="flex items-center gap-1">
                      {getStatusIcon(activity.status)}
                      <span
                        className={`font-medium capitalize ${
                          activity.status === "completed"
                            ? "text-green-600"
                            : "text-amber-600"
                        }`}
                      >
                        {activity.status}
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
