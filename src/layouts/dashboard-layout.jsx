// src/layouts/dashboard-layout.jsx
import React from 'react';
import { Outlet, useNavigate } from 'react-router-dom';
import { auth } from '../fireabse'; // Make sure this path is correct
import { signOut } from 'firebase/auth';

const DashboardLayout = () => {
  const navigate = useNavigate();

  const handleSignOut = async () => {
    try {
      await signOut(auth);
      navigate('/signin');
    } catch (error) {
      console.error('Error signing out: ', error);
    }
  };

  return (
    <div className="flex h-screen">
      <aside className="w-64 bg-gray-800 text-white flex flex-col p-4">
        <h1 className="text-xl font-bold mb-4">Dashboard</h1>
        <nav className="flex-1">
          <ul>
            <li>
              <a href="/dashboard" className="block py-2 px-4 hover:bg-gray-700 rounded">Home</a>
            </li>
            {/* Add more sidebar items here */}
          </ul>
        </nav>
        <button
          onClick={handleSignOut}
          className="mt-4 py-2 px-4 bg-red-600 hover:bg-red-700 rounded text-white"
        >
          Sign Out
        </button>
      </aside>
      <main className="flex-1 p-4 overflow-y-auto">
        <Outlet />
      </main>
    </div>
  );
};

export default DashboardLayout;
