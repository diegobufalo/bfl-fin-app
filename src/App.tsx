import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import { ThemeProvider as StyledThemeProvider } from "styled-components";
import { AuthProvider, useAuth } from "./contexts/AuthContext";
import { TransactionProvider } from "./contexts/TransactionContext";
import { ThemeProvider, useTheme } from "./contexts/ThemeContext";
import Layout from "./components/Layout";
import Login from "./pages/Login";
import Dashboard from "./pages/Dashboard";
import Transactions from "./pages/Transactions";
import CashFlow from "./pages/CashFlow";
import Accounts from "./pages/Accounts";
import NetWorth from "./pages/NetWorth";
import Recurrents from "./pages/Recurrents";
import Categories from "./pages/Categories";
import Reports from "./pages/Reports";

const ProtectedRoute = ({ children }: { children: React.ReactNode }) => {
  const { user } = useAuth();
  return user ? <>{children}</> : <Navigate to="/login" />;
};

function AppContent() {
  const { theme } = useTheme();

  return (
    <StyledThemeProvider theme={theme}>
      <Router>
        <Routes>
          <Route path="/login" element={<Login />} />

          <Route
            path="/"
            element={
              <ProtectedRoute>
                <Layout />
              </ProtectedRoute>
            }
          >
            <Route index element={<Dashboard />} />
            <Route path="transactions" element={<Transactions />} />
            <Route path="cashflow" element={<CashFlow />} />
            <Route path="accounts" element={<Accounts />} />
            <Route path="networth" element={<NetWorth />} />
            <Route path="recurrents" element={<Recurrents />} />
            <Route path="categories" element={<Categories />} />
            <Route path="reports" element={<Reports />} />
          </Route>
        </Routes>
      </Router>
    </StyledThemeProvider>
  );
}

function App() {
  return (
    <AuthProvider>
      <TransactionProvider>
        <ThemeProvider>
          <AppContent />
        </ThemeProvider>
      </TransactionProvider>
    </AuthProvider>
  );
}

export default App;
