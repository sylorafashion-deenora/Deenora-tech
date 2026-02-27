import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Auth from './components/Auth';
import Home from './components/Home';
import AdminPanel from './components/AdminPanel';
import Dashboard from './components/admin/Dashboard';
import MadrasahManagement from './components/admin/MadrasahManagement';
import PaymentManagement from './components/admin/PaymentManagement';
import AccountSettings from './components/admin/AccountSettings';
import { useAuth } from './hooks/useAuth';

export default function App() {
  const { session, profile, loading } = useAuth();

  if (loading) {
    return <div className="min-h-screen flex items-center justify-center">Loading...</div>;
  }

  return (
    <Router>
      <Routes>
        <Route path="/" element={session ? <Home /> : <Auth />} />
        <Route path="/admin" element={session && profile?.role === 'super_admin' ? <AdminPanel /> : <Auth />}>
          <Route index element={<Dashboard />} />
          <Route path="dashboard" element={<Dashboard />} />
          <Route path="madrasahs" element={<MadrasahManagement />} />
          <Route path="payments" element={<PaymentManagement />} />
          <Route path="account" element={<AccountSettings />} />
        </Route>
      </Routes>
    </Router>
  );
}
