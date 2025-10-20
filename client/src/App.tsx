import "./global.css";

import { Toaster } from "@/components/ui/toaster";
import { createRoot } from "react-dom/client";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "@/components/Layout";
import Dashboard from "./pages/Dashboard";
import Accounts from "./pages/Accounts";
import Deposits from "./pages/Deposits";
import Withdrawals from "./pages/Withdrawals";
import History from "./pages/History";
import Security from "./pages/Security";
import Profile from "./pages/Profile";
import SignIn from "./pages/SignIn";
import SignUp from "./pages/SignUp";
import NotFound from "./pages/NotFound";
import Registration from "./pages/Registration";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          {/* Auth Routes */}
          <Route path="/signin" element={<SignIn />} />
          <Route path="/signup" element={<SignUp />} />

          {/* Protected Routes with Layout */}
          <Route
            element={
              <Layout>
                <Dashboard />
              </Layout>
            }
            path="/"
          />
          <Route
            element={
              <Layout>
                <Accounts />
              </Layout>
            }
            path="/accounts"
          />
          <Route
            element={
              <Layout>
                <Deposits />
              </Layout>
            }
            path="/deposits"
          />
          <Route
            element={
              <Layout>
                <Withdrawals />
              </Layout>
            }
            path="/withdrawals"
          />
          <Route
            element={
              <Layout>
                <History />
              </Layout>
            }
            path="/history"
          />
          <Route
            element={
              <Layout>
                <Security />
              </Layout>
            }
            path="/security"
          />
          <Route
            element={
              <Layout>
                <Profile />
              </Layout>
            }
            path="/profile"
          />
          <Route
            element={
              <Layout>
                <Registration />
              </Layout>
            }
            path="/registration"
          />

          {/* Fallback */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

createRoot(document.getElementById("root")!).render(<App />);
