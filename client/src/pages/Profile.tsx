import { useState } from "react";
import {
  User,
  Mail,
  Phone,
  MapPin,
  Calendar,
  Save,
  Edit2,
  X,
} from "lucide-react";

interface ProfileData {
  fullName: string;
  email: string;
  phone: string;
  location: string;
  joinDate: string;
  company: string;
  bio: string;
}

export default function Profile() {
  const [isEditing, setIsEditing] = useState(false);
  const [profileData, setProfileData] = useState<ProfileData>({
    fullName: "John Doe",
    email: "john.doe@example.com",
    phone: "+1 (555) 123-4567",
    location: "San Francisco, CA",
    joinDate: "January 15, 2024",
    company: "Tech Innovations Inc.",
    bio: "Professional trader with 5+ years of experience in cryptocurrency and traditional markets.",
  });

  const [formData, setFormData] = useState<ProfileData>(profileData);

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSave = () => {
    setProfileData(formData);
    setIsEditing(false);
  };

  const handleCancel = () => {
    setFormData(profileData);
    setIsEditing(false);
  };

  return (
    <div className="space-y-8 max-w-4xl">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
        <div>
          <h1 className="text-3xl font-bold text-foreground">My Profile</h1>
          <p className="text-muted-foreground mt-2">
            Manage your account information
          </p>
        </div>
        {!isEditing && (
          <button
            onClick={() => setIsEditing(true)}
            className="bg-primary text-primary-foreground font-semibold py-2 px-4 rounded-lg hover:opacity-90 transition-opacity flex items-center justify-center gap-2 w-full sm:w-auto"
          >
            <Edit2 size={18} />
            Edit Profile
          </button>
        )}
      </div>

      {/* Profile Card */}
      <div className="bg-card rounded-lg border border-border p-8">
        {/* Profile Avatar Section */}
        <div className="flex flex-col sm:flex-row items-center gap-6 pb-8 border-b border-border">
          <div className="w-24 h-24 bg-primary rounded-lg flex items-center justify-center flex-shrink-0">
            <span className="text-primary-foreground text-4xl font-bold">
              {profileData.fullName.charAt(0)}
            </span>
          </div>
          <div>
            <h2 className="text-2xl font-bold text-foreground">
              {profileData.fullName}
            </h2>
            <p className="text-muted-foreground mt-1">{profileData.company}</p>
            <p className="text-sm text-muted-foreground mt-2 flex items-center gap-2">
              <Calendar size={16} />
              Member since {profileData.joinDate}
            </p>
          </div>
        </div>

        {/* Form Section */}
        <div className="mt-8 space-y-6">
          {isEditing ? (
            <>
              {/* Edit Mode */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">
                    Full Name
                  </label>
                  <input
                    type="text"
                    name="fullName"
                    value={formData.fullName}
                    onChange={handleInputChange}
                    className="w-full px-4 py-2.5 rounded-lg border border-border bg-input text-foreground focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">
                    Email Address
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    className="w-full px-4 py-2.5 rounded-lg border border-border bg-input text-foreground focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">
                    Phone Number
                  </label>
                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleInputChange}
                    className="w-full px-4 py-2.5 rounded-lg border border-border bg-input text-foreground focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">
                    Location
                  </label>
                  <input
                    type="text"
                    name="location"
                    value={formData.location}
                    onChange={handleInputChange}
                    className="w-full px-4 py-2.5 rounded-lg border border-border bg-input text-foreground focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">
                    Company
                  </label>
                  <input
                    type="text"
                    name="company"
                    value={formData.company}
                    onChange={handleInputChange}
                    className="w-full px-4 py-2.5 rounded-lg border border-border bg-input text-foreground focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-foreground mb-2">
                  Bio
                </label>
                <textarea
                  name="bio"
                  value={formData.bio}
                  onChange={handleInputChange}
                  rows={4}
                  className="w-full px-4 py-2.5 rounded-lg border border-border bg-input text-foreground focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
                />
              </div>

              <div className="flex gap-3 pt-4">
                <button
                  onClick={handleSave}
                  className="flex-1 bg-primary text-primary-foreground font-semibold py-2.5 rounded-lg hover:opacity-90 transition-opacity flex items-center justify-center gap-2"
                >
                  <Save size={18} />
                  Save Changes
                </button>
                <button
                  onClick={handleCancel}
                  className="flex-1 bg-secondary text-secondary-foreground font-semibold py-2.5 rounded-lg hover:opacity-90 transition-opacity flex items-center justify-center gap-2 border border-border"
                >
                  <X size={18} />
                  Cancel
                </button>
              </div>
            </>
          ) : (
            <>
              {/* View Mode */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div>
                  <label className="text-xs font-semibold text-muted-foreground uppercase tracking-wide">
                    Email Address
                  </label>
                  <p className="text-lg text-foreground mt-2 flex items-center gap-2">
                    <Mail size={18} className="text-primary" />
                    {profileData.email}
                  </p>
                </div>

                <div>
                  <label className="text-xs font-semibold text-muted-foreground uppercase tracking-wide">
                    Phone Number
                  </label>
                  <p className="text-lg text-foreground mt-2 flex items-center gap-2">
                    <Phone size={18} className="text-primary" />
                    {profileData.phone}
                  </p>
                </div>

                <div>
                  <label className="text-xs font-semibold text-muted-foreground uppercase tracking-wide">
                    Location
                  </label>
                  <p className="text-lg text-foreground mt-2 flex items-center gap-2">
                    <MapPin size={18} className="text-primary" />
                    {profileData.location}
                  </p>
                </div>

                <div>
                  <label className="text-xs font-semibold text-muted-foreground uppercase tracking-wide">
                    Company
                  </label>
                  <p className="text-lg text-foreground mt-2">
                    {profileData.company}
                  </p>
                </div>
              </div>

              <div>
                <label className="text-xs font-semibold text-muted-foreground uppercase tracking-wide">
                  Bio
                </label>
                <p className="text-foreground mt-2 leading-relaxed">
                  {profileData.bio}
                </p>
              </div>
            </>
          )}
        </div>
      </div>

      {/* Account Stats */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="bg-card rounded-lg border border-border p-6">
          <p className="text-sm text-muted-foreground font-medium">
            Linked Accounts
          </p>
          <p className="text-3xl font-bold text-foreground mt-3">4</p>
        </div>
        <div className="bg-card rounded-lg border border-border p-6">
          <p className="text-sm text-muted-foreground font-medium">
            Total Transactions
          </p>
          <p className="text-3xl font-bold text-foreground mt-3">127</p>
        </div>
        <div className="bg-card rounded-lg border border-border p-6">
          <p className="text-sm text-muted-foreground font-medium">
            Security Status
          </p>
          <p className="text-lg font-bold text-green-600 mt-3">✓ Secure</p>
        </div>
      </div>
    </div>
  );
}
