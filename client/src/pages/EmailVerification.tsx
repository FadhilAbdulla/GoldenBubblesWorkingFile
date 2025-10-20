import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Mail, CheckCircle, ArrowRight } from "lucide-react";

export default function EmailVerification() {
  const [verificationCode, setVerificationCode] = useState([
    "",
    "",
    "",
    "",
    "",
    "",
  ]);
  const [verified, setVerified] = useState(false);
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleCodeChange = (index: number, value: string) => {
    if (value.length <= 1 && /^[0-9]*$/.test(value)) {
      const newCode = [...verificationCode];
      newCode[index] = value;
      setVerificationCode(newCode);

      // Auto-focus next input
      if (value && index < 5) {
        const nextInput = document.getElementById(`code-${index + 1}`);
        nextInput?.focus();
      }
    }
  };

  const handleBackspace = (
    index: number,
    e: React.KeyboardEvent<HTMLInputElement>,
  ) => {
    if (e.key === "Backspace" && !verificationCode[index] && index > 0) {
      const prevInput = document.getElementById(`code-${index - 1}`);
      prevInput?.focus();
    }
  };

  const handleVerify = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    // Simulate verification
    setTimeout(() => {
      setLoading(false);
      setVerified(true);
      setTimeout(() => {
        navigate("/registration");
      }, 2000);
    }, 1500);
  };

  const code = verificationCode.join("");
  const isCodeComplete = code.length === 6;

  return (
    <div className="min-h-screen flex items-center justify-center bg-background px-6 py-12">
      <div className="w-full max-w-md">
        {!verified ? (
          <div className="space-y-8">
            <div className="text-center space-y-3">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto">
                <Mail className="text-primary" size={32} />
              </div>
              <h1 className="text-3xl font-bold text-foreground">
                Verify Email
              </h1>
              <p className="text-muted-foreground">
                We've sent a 6-digit code to your email address. Enter it below
                to verify your account.
              </p>
            </div>

            <form onSubmit={handleVerify} className="space-y-6">
              <div>
                <label className="block text-sm font-medium text-foreground mb-4">
                  Verification Code
                </label>
                <div className="flex gap-3 justify-center">
                  {verificationCode.map((digit, index) => (
                    <input
                      key={index}
                      id={`code-${index}`}
                      type="text"
                      inputMode="numeric"
                      maxLength={1}
                      value={digit}
                      onChange={(e) => handleCodeChange(index, e.target.value)}
                      onKeyDown={(e) => handleBackspace(index, e)}
                      className="w-12 h-12 text-center text-2xl font-bold rounded-lg border-2 border-border bg-input text-foreground focus:outline-none focus:border-primary focus:ring-2 focus:ring-primary/20 transition-colors"
                    />
                  ))}
                </div>
              </div>

              <button
                type="submit"
                disabled={!isCodeComplete || loading}
                className="w-full bg-primary text-primary-foreground font-semibold py-3 rounded-lg hover:opacity-90 transition-opacity disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {loading ? "Verifying..." : "Verify Email"}
              </button>
            </form>

            <div className="text-center">
              <p className="text-muted-foreground text-sm">
                Didn't receive a code?{" "}
                <button className="text-primary font-semibold hover:underline">
                  Resend
                </button>
              </p>
            </div>
          </div>
        ) : (
          <div className="text-center space-y-6">
            <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto">
              <CheckCircle className="text-green-600" size={32} />
            </div>
            <div className="space-y-2">
              <h1 className="text-3xl font-bold text-foreground">
                Email Verified!
              </h1>
              <p className="text-muted-foreground">
                Your email has been successfully verified. Redirecting you to
                complete your registration...
              </p>
            </div>
            <div className="flex items-center justify-center gap-2 text-primary font-semibold">
              <span>Continuing</span>
              <ArrowRight size={20} />
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
