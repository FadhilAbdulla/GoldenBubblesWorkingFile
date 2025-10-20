import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { CheckCircle2, ChevronRight, Upload, X } from "lucide-react";

interface Step {
  id: number;
  title: string;
  description: string;
  completed: boolean;
}

export default function Registration() {
  const [currentStep, setCurrentStep] = useState(1);
  const [completedSteps, setCompletedSteps] = useState<number[]>([]);
  const navigate = useNavigate();

  const [passportFile, setPassportFile] = useState<File | null>(null);
  const [addressData, setAddressData] = useState({
    street: "",
    city: "",
    state: "",
    zipCode: "",
    country: "",
  });
  const [bankData, setBankData] = useState({
    bankName: "",
    accountNumber: "",
    routingNumber: "",
    accountHolderName: "",
  });
  const [termsAccepted, setTermsAccepted] = useState(false);

  const steps: Step[] = [
    {
      id: 1,
      title: "Passport/Emirates ID",
      description: "Upload your ID document",
      completed: completedSteps.includes(1),
    },
    {
      id: 2,
      title: "Address Verification",
      description: "Confirm your residence",
      completed: completedSteps.includes(2),
    },
    {
      id: 3,
      title: "Bank Account",
      description: "Add your bank details",
      completed: completedSteps.includes(3),
    },
    {
      id: 4,
      title: "Confirm Terms",
      description: "Accept terms & conditions",
      completed: completedSteps.includes(4),
    },
  ];

  const handlePassportUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      setPassportFile(file);
    }
  };

  const handlePassportNext = () => {
    if (passportFile) {
      setCompletedSteps([...completedSteps, 1]);
      setCurrentStep(2);
    }
  };

  const handleAddressChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setAddressData((prev) => ({ ...prev, [name]: value }));
  };

  const handleAddressNext = () => {
    if (
      addressData.street &&
      addressData.city &&
      addressData.state &&
      addressData.zipCode &&
      addressData.country
    ) {
      setCompletedSteps([...completedSteps, 2]);
      setCurrentStep(3);
    }
  };

  const handleBankChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setBankData((prev) => ({ ...prev, [name]: value }));
  };

  const handleBankNext = () => {
    if (
      bankData.bankName &&
      bankData.accountNumber &&
      bankData.routingNumber &&
      bankData.accountHolderName
    ) {
      setCompletedSteps([...completedSteps, 3]);
      setCurrentStep(4);
    }
  };

  const handleTermsSubmit = () => {
    if (termsAccepted) {
      setCompletedSteps([...completedSteps, 4]);
      setTimeout(() => {
        navigate("/");
      }, 1500);
    }
  };

  const handleBack = () => {
    if (currentStep > 1) {
      setCurrentStep(currentStep - 1);
    }
  };

  return (
    <div className="min-h-screen bg-background py-12 px-6">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-3xl font-bold text-foreground">
            Complete Your Registration
          </h1>
          <p className="text-muted-foreground mt-2">
            Follow the steps below to verify your identity and set up your
            account
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-4 gap-4 mb-12">
          {steps.map((step) => (
            <div key={step.id} className="flex flex-col items-center">
              <button
                onClick={() => {
                  if (
                    step.id < currentStep ||
                    completedSteps.includes(step.id)
                  ) {
                    setCurrentStep(step.id);
                  }
                }}
                className={`w-12 h-12 rounded-full flex items-center justify-center font-bold transition-all mb-3 ${
                  step.completed
                    ? "bg-green-100 text-green-600 border-2 border-green-600"
                    : step.id === currentStep
                      ? "bg-primary text-primary-foreground border-2 border-primary"
                      : "bg-muted text-muted-foreground border-2 border-border"
                }`}
              >
                {step.completed ? (
                  <CheckCircle2 size={24} />
                ) : (
                  <span>{step.id}</span>
                )}
              </button>
              <h3 className="font-semibold text-foreground text-sm text-center">
                {step.title}
              </h3>
              <p className="text-xs text-muted-foreground text-center mt-1">
                {step.description}
              </p>
            </div>
          ))}
        </div>

        {/* Step Content */}
        <div className="bg-card rounded-lg border border-border p-8">
          {currentStep === 1 && (
            <div className="space-y-6">
              <div>
                <h2 className="text-2xl font-bold text-foreground mb-2">
                  Upload Your ID Document
                </h2>
                <p className="text-muted-foreground">
                  Please upload a clear photo of your Passport or Emirates ID
                </p>
              </div>

              <div>
                <label className="block text-sm font-medium text-foreground mb-3">
                  ID Document
                </label>
                <div className="border-2 border-dashed border-border rounded-lg p-8 text-center hover:border-primary transition-colors cursor-pointer">
                  <input
                    type="file"
                    accept="image/*,.pdf"
                    onChange={handlePassportUpload}
                    className="hidden"
                    id="passport-upload"
                  />
                  <label htmlFor="passport-upload" className="cursor-pointer">
                    {passportFile ? (
                      <div className="space-y-3">
                        <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center mx-auto">
                          <CheckCircle2 className="text-green-600" size={24} />
                        </div>
                        <p className="font-semibold text-foreground">
                          {passportFile.name}
                        </p>
                        <p className="text-sm text-muted-foreground">
                          {(passportFile.size / 1024 / 1024).toFixed(2)} MB
                        </p>
                      </div>
                    ) : (
                      <div className="space-y-3">
                        <Upload className="text-primary mx-auto" size={32} />
                        <p className="font-semibold text-foreground">
                          Click to upload or drag and drop
                        </p>
                        <p className="text-sm text-muted-foreground">
                          PNG, JPG or PDF (Max 10MB)
                        </p>
                      </div>
                    )}
                  </label>
                </div>
              </div>

              <div className="flex gap-3 pt-6">
                <button
                  disabled
                  className="flex-1 bg-muted text-muted-foreground font-semibold py-3 rounded-lg cursor-not-allowed"
                >
                  Back
                </button>
                <button
                  onClick={handlePassportNext}
                  disabled={!passportFile}
                  className="flex-1 bg-primary text-primary-foreground font-semibold py-3 rounded-lg hover:opacity-90 transition-opacity disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
                >
                  Next <ChevronRight size={20} />
                </button>
              </div>
            </div>
          )}

          {currentStep === 2 && (
            <div className="space-y-6">
              <div>
                <h2 className="text-2xl font-bold text-foreground mb-2">
                  Verify Your Address
                </h2>
                <p className="text-muted-foreground">
                  Please provide your current residential address
                </p>
              </div>

              <div className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">
                    Street Address
                  </label>
                  <input
                    type="text"
                    name="street"
                    value={addressData.street}
                    onChange={handleAddressChange}
                    placeholder="123 Main Street"
                    className="w-full px-4 py-2.5 rounded-lg border border-border bg-input text-foreground placeholder-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
                  />
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-foreground mb-2">
                      City
                    </label>
                    <input
                      type="text"
                      name="city"
                      value={addressData.city}
                      onChange={handleAddressChange}
                      placeholder="New York"
                      className="w-full px-4 py-2.5 rounded-lg border border-border bg-input text-foreground placeholder-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-foreground mb-2">
                      State/Province
                    </label>
                    <input
                      type="text"
                      name="state"
                      value={addressData.state}
                      onChange={handleAddressChange}
                      placeholder="NY"
                      className="w-full px-4 py-2.5 rounded-lg border border-border bg-input text-foreground placeholder-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-foreground mb-2">
                      ZIP/Postal Code
                    </label>
                    <input
                      type="text"
                      name="zipCode"
                      value={addressData.zipCode}
                      onChange={handleAddressChange}
                      placeholder="10001"
                      className="w-full px-4 py-2.5 rounded-lg border border-border bg-input text-foreground placeholder-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-foreground mb-2">
                      Country
                    </label>
                    <input
                      type="text"
                      name="country"
                      value={addressData.country}
                      onChange={handleAddressChange}
                      placeholder="United States"
                      className="w-full px-4 py-2.5 rounded-lg border border-border bg-input text-foreground placeholder-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
                    />
                  </div>
                </div>
              </div>

              <div className="flex gap-3 pt-6">
                <button
                  onClick={handleBack}
                  className="flex-1 bg-muted text-muted-foreground font-semibold py-3 rounded-lg hover:opacity-90 transition-opacity"
                >
                  Back
                </button>
                <button
                  onClick={handleAddressNext}
                  disabled={
                    !addressData.street ||
                    !addressData.city ||
                    !addressData.state ||
                    !addressData.zipCode ||
                    !addressData.country
                  }
                  className="flex-1 bg-primary text-primary-foreground font-semibold py-3 rounded-lg hover:opacity-90 transition-opacity disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
                >
                  Next <ChevronRight size={20} />
                </button>
              </div>
            </div>
          )}

          {currentStep === 3 && (
            <div className="space-y-6">
              <div>
                <h2 className="text-2xl font-bold text-foreground mb-2">
                  Bank Account Details
                </h2>
                <p className="text-muted-foreground">
                  Add your bank account for withdrawals and deposits
                </p>
              </div>

              <div className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">
                    Bank Name
                  </label>
                  <input
                    type="text"
                    name="bankName"
                    value={bankData.bankName}
                    onChange={handleBankChange}
                    placeholder="Chase Bank"
                    className="w-full px-4 py-2.5 rounded-lg border border-border bg-input text-foreground placeholder-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">
                    Account Holder Name
                  </label>
                  <input
                    type="text"
                    name="accountHolderName"
                    value={bankData.accountHolderName}
                    onChange={handleBankChange}
                    placeholder="John Doe"
                    className="w-full px-4 py-2.5 rounded-lg border border-border bg-input text-foreground placeholder-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
                  />
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-foreground mb-2">
                      Routing Number
                    </label>
                    <input
                      type="text"
                      name="routingNumber"
                      value={bankData.routingNumber}
                      onChange={handleBankChange}
                      placeholder="021000021"
                      className="w-full px-4 py-2.5 rounded-lg border border-border bg-input text-foreground placeholder-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-foreground mb-2">
                      Account Number
                    </label>
                    <input
                      type="text"
                      name="accountNumber"
                      value={bankData.accountNumber}
                      onChange={handleBankChange}
                      placeholder="123456789"
                      className="w-full px-4 py-2.5 rounded-lg border border-border bg-input text-foreground placeholder-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
                    />
                  </div>
                </div>
              </div>

              <div className="flex gap-3 pt-6">
                <button
                  onClick={handleBack}
                  className="flex-1 bg-muted text-muted-foreground font-semibold py-3 rounded-lg hover:opacity-90 transition-opacity"
                >
                  Back
                </button>
                <button
                  onClick={handleBankNext}
                  disabled={
                    !bankData.bankName ||
                    !bankData.accountNumber ||
                    !bankData.routingNumber ||
                    !bankData.accountHolderName
                  }
                  className="flex-1 bg-primary text-primary-foreground font-semibold py-3 rounded-lg hover:opacity-90 transition-opacity disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
                >
                  Next <ChevronRight size={20} />
                </button>
              </div>
            </div>
          )}

          {currentStep === 4 && (
            <div className="space-y-6">
              <div>
                <h2 className="text-2xl font-bold text-foreground mb-2">
                  Confirm Terms & Conditions
                </h2>
                <p className="text-muted-foreground">
                  Please review and accept our terms to complete your
                  registration
                </p>
              </div>

              <div className="bg-muted/50 rounded-lg p-6 max-h-48 overflow-y-auto">
                <h3 className="font-semibold text-foreground mb-3">
                  Terms of Service
                </h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  By registering with TradeHub, you agree to our terms and
                  conditions. You must be at least 18 years old and comply with
                  all applicable laws. You are responsible for maintaining the
                  confidentiality of your account and password. TradeHub is not
                  responsible for unauthorized access to your account. You agree
                  not to use the service for any illegal or unauthorized
                  purpose. We reserve the right to terminate accounts that
                  violate these terms.
                </p>
              </div>

              <label className="flex items-start gap-3 cursor-pointer">
                <input
                  type="checkbox"
                  checked={termsAccepted}
                  onChange={(e) => setTermsAccepted(e.target.checked)}
                  className="w-5 h-5 rounded border-border mt-1 cursor-pointer"
                />
                <span className="text-sm text-muted-foreground">
                  I have read and agree to the Terms of Service and Privacy
                  Policy
                </span>
              </label>

              <div className="flex gap-3 pt-6">
                <button
                  onClick={handleBack}
                  className="flex-1 bg-muted text-muted-foreground font-semibold py-3 rounded-lg hover:opacity-90 transition-opacity"
                >
                  Back
                </button>
                <button
                  onClick={handleTermsSubmit}
                  disabled={!termsAccepted}
                  className="flex-1 bg-primary text-primary-foreground font-semibold py-3 rounded-lg hover:opacity-90 transition-opacity disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  Complete Registration
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
