// src/components/Dashboard.js
import React from "react";
import { useNavigate } from "react-router-dom";
import { signOut } from "firebase/auth";
import { auth } from "../fireabse.js";

const Dashboard = () => {
  const history = useNavigate();

  const handleSignOut = async () => {
    await signOut(auth);
    history.push("/signin");
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <h1 className="text-3xl font-bold">Dashboard</h1>
      <button
        onClick={handleSignOut}
        className="mt-4 px-4 py-2 bg-blue-600 text-white rounded-lg"
      >
        Sign Out
      </button>
    </div>
  );
};

export default Dashboard;
