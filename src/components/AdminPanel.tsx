import { useState } from 'react';
import { Link, Outlet } from 'react-router-dom';

export default function AdminPanel() {
  const [sidebarOpen, setSidebarOpen] = useState(true);

  return (
    <div className="flex min-h-screen bg-gray-100">
      {/* Sidebar */}
      <aside
        className={`bg-indigo-800 text-white w-64 space-y-6 py-7 px-2 absolute inset-y-0 left-0 transform ${sidebarOpen ? 'translate-x-0' : '-translate-x-full'} md:relative md:translate-x-0 transition duration-200 ease-in-out`}
      >
        <div className="flex items-center justify-between px-4">
          <Link to="/admin" className="text-white text-2xl font-extrabold">
            Admin Dashboard
          </Link>
          <button onClick={() => setSidebarOpen(!sidebarOpen)} className="md:hidden text-white focus:outline-none">
            <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>

        <nav>
          <Link
            to="/admin/dashboard"
            className="block py-2.5 px-4 rounded transition duration-200 hover:bg-indigo-700 hover:text-white"
          >
            Dashboard
          </Link>
          <Link
            to="/admin/madrasahs"
            className="block py-2.5 px-4 rounded transition duration-200 hover:bg-indigo-700 hover:text-white"
          >
            Madrasah Management
          </Link>
          <Link
            to="/admin/payments"
            className="block py-2.5 px-4 rounded transition duration-200 hover:bg-indigo-700 hover:text-white"
          >
            Payment Management
          </Link>
          <Link
            to="/admin/account"
            className="block py-2.5 px-4 rounded transition duration-200 hover:bg-indigo-700 hover:text-white"
          >
            Account Settings
          </Link>
        </nav>
      </aside>

      {/* Content area */}
      <div className="flex-1 flex flex-col">
        {/* Header */}
        <header className="w-full bg-white shadow-sm p-4 flex items-center justify-between">
          <button onClick={() => setSidebarOpen(!sidebarOpen)} className="md:hidden text-gray-500 focus:outline-none">
            <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
          <h1 className="text-xl font-semibold text-gray-900">Admin Panel</h1>
          {/* User dropdown or other header elements can go here */}
        </header>

        {/* Main content */}
        <main className="flex-1 p-4">
          <Outlet /> {/* This is where nested routes will render */}
        </main>
      </div>
    </div>
  );
}
