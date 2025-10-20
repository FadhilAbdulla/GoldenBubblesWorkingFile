import {
  Lock,
  Smartphone,
  Eye,
  EyeOff,
  Shield,
  CheckCircle,
  AlertCircle,
} from "lucide-react";
import { useState } from "react";

const deviceHistory = [
  {
    id: 1,
    device: "Chrome on MacOS",
    location: "San Francisco, CA",
    lastActive: "2 hours ago",
    status: "current",
  },
  {
    id: 2,
    device: "Safari on iPhone",
    location: "San Francisco, CA",
    lastActive: "1 day ago",
    status: "active",
  },
  {
    id: 3,
    device: "Firefox on Windows",
    location: "New York, NY",
    lastActive: "5 days ago",
    status: "inactive",
  },
];

export default function Security() {
  const [showPassword, setShowPassword] = useState(false);
  const [twoFAEnabled, setTwoFAEnabled] = useState(true);

  return (
    <div className="space-y-8 max-w-4xl">
      {/* Header */}
      <div>
        <h1 className="text-3xl font-bold text-foreground">
          Security Settings
        </h1>
        <p className="text-muted-foreground mt-2">
          Manage your account security and privacy
        </p>
      </div>

      {/* Password Section */}
      <div className="bg-card rounded-lg border border-border p-6 space-y-6">
        <div className="flex items-center gap-3">
          <Lock className="text-primary" size={24} />
          <div>
            <h2 className="text-lg font-bold text-foreground">Password</h2>
            <p className="text-sm text-muted-foreground">
              Change your password regularly to keep your account secure
            </p>
          </div>
        </div>

        <div className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-foreground mb-2">
              Current Password
            </label>
            <div className="relative">
              <input
                type={showPassword ? "text" : "password"}
                placeholder="••••••••"
                className="w-full px-4 py-2 rounded-lg border border-border bg-input text-foreground placeholder-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary"
              />
              <button
                onClick={() => setShowPassword(!showPassword)}
                className="absolute right-3 top-1/2 -translate-y-1/2 text-muted-foreground hover:text-foreground transition-colors"
              >
                {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
              </button>
            </div>
          </div>

          <div>
            <label className="block text-sm font-medium text-foreground mb-2">
              New Password
            </label>
            <input
              type="password"
              placeholder="••••••••"
              className="w-full px-4 py-2 rounded-lg border border-border bg-input text-foreground placeholder-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-foreground mb-2">
              Confirm New Password
            </label>
            <input
              type="password"
              placeholder="••••••••"
              className="w-full px-4 py-2 rounded-lg border border-border bg-input text-foreground placeholder-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary"
            />
          </div>

          <button className="bg-primary text-primary-foreground font-semibold py-2 px-6 rounded-lg hover:opacity-90 transition-opacity">
            Update Password
          </button>
        </div>
      </div>

      {/* Two-Factor Authentication */}
      <div className="bg-card rounded-lg border border-border p-6 space-y-6">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-3">
            <Smartphone className="text-primary" size={24} />
            <div>
              <h2 className="text-lg font-bold text-foreground">
                Two-Factor Authentication
              </h2>
              <p className="text-sm text-muted-foreground">
                Add an extra layer of security to your account
              </p>
            </div>
          </div>
          <label className="flex items-center gap-2 cursor-pointer">
            <input
              type="checkbox"
              checked={twoFAEnabled}
              onChange={() => setTwoFAEnabled(!twoFAEnabled)}
              className="w-5 h-5 rounded border-border"
            />
          </label>
        </div>

        {twoFAEnabled && (
          <div className="bg-green-50 border border-green-200 rounded-lg p-4 flex items-start gap-3">
            <CheckCircle
              className="text-green-600 flex-shrink-0 mt-0.5"
              size={20}
            />
            <div>
              <p className="font-semibold text-green-700">2FA is enabled</p>
              <p className="text-sm text-green-600 mt-1">
                Your account is protected with two-factor authentication via
                authenticator app
              </p>
            </div>
          </div>
        )}

        {!twoFAEnabled && (
          <div className="bg-amber-50 border border-amber-200 rounded-lg p-4 flex items-start gap-3">
            <AlertCircle
              className="text-amber-600 flex-shrink-0 mt-0.5"
              size={20}
            />
            <div>
              <p className="font-semibold text-amber-700">2FA is not enabled</p>
              <p className="text-sm text-amber-600 mt-1">
                Enabling 2FA is highly recommended for enhanced security
              </p>
            </div>
          </div>
        )}
      </div>

      {/* Notification Preferences */}
      <div className="bg-card rounded-lg border border-border p-6 space-y-6">
        <div className="flex items-center gap-3">
          <AlertCircle className="text-primary" size={24} />
          <div>
            <h2 className="text-lg font-bold text-foreground">Notifications</h2>
            <p className="text-sm text-muted-foreground">
              Control how we notify you about your account
            </p>
          </div>
        </div>

        <div className="space-y-3">
          {[
            {
              label: "Login Alerts",
              desc: "Notify when someone logs in to your account",
            },
            {
              label: "Deposit Alerts",
              desc: "Notify when deposits are completed",
            },
            {
              label: "Withdrawal Alerts",
              desc: "Notify when withdrawals are requested",
            },
            {
              label: "Security Alerts",
              desc: "Critical security notifications",
            },
          ].map((notif) => (
            <label
              key={notif.label}
              className="flex items-center justify-between p-3 rounded-lg hover:bg-muted/50 transition-colors cursor-pointer"
            >
              <div>
                <p className="font-medium text-foreground">{notif.label}</p>
                <p className="text-xs text-muted-foreground mt-0.5">
                  {notif.desc}
                </p>
              </div>
              <input
                type="checkbox"
                defaultChecked
                className="w-5 h-5 rounded border-border"
              />
            </label>
          ))}
        </div>
      </div>

      {/* Device History */}
      <div className="bg-card rounded-lg border border-border p-6 space-y-6">
        <div className="flex items-center gap-3">
          <Shield className="text-primary" size={24} />
          <div>
            <h2 className="text-lg font-bold text-foreground">
              Device History
            </h2>
            <p className="text-sm text-muted-foreground">
              Devices that have accessed your account
            </p>
          </div>
        </div>

        <div className="space-y-3">
          {deviceHistory.map((device) => (
            <div
              key={device.id}
              className="flex items-center justify-between p-4 rounded-lg border border-border hover:bg-muted/50 transition-colors"
            >
              <div>
                <p className="font-medium text-foreground">{device.device}</p>
                <p className="text-sm text-muted-foreground mt-1">
                  {device.location}
                </p>
                <p className="text-xs text-muted-foreground mt-1">
                  Last active: {device.lastActive}
                </p>
              </div>
              <button className="text-destructive hover:bg-destructive/10 px-3 py-1 rounded transition-colors text-sm font-medium">
                Remove
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
