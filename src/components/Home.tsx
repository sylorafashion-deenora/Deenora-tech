import { supabase } from '../lib/supabase';

export default function Home() {
  const handleLogout = async () => {
    await supabase.auth.signOut();
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100 py-12 px-4 sm:px-6 lg:px-8">
      <h1 className="text-4xl font-extrabold text-gray-900 mb-6">Welcome to Deenora V3</h1>
      <p className="text-lg text-gray-600 mb-8">You are logged in!</p>
      <button
        onClick={handleLogout}
        className="group relative w-auto flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-red-600 hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500"
      >
        Logout
      </button>
    </div>
  );
}
