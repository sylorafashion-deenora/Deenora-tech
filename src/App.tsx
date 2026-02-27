import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Auth from './components/Auth';
import Home from './components/Home';
import { useAuth } from './hooks/useAuth';

export default function App() {
  const { session, loading } = useAuth();

  if (loading) {
    return <div className="min-h-screen flex items-center justify-center">Loading...</div>;
  }

  return (
    <Router>
      <Routes>
        <Route path="/" element={session ? <Home /> : <Auth />} />
        {/* Add other routes here if needed */}
      </Routes>
    </Router>
  );
}
