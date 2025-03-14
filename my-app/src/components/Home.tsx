import React from "react";
import { useNavigate } from "react-router-dom";

const Home: React.FC = () => {
  const navigate = useNavigate();

  const handleLogout = () => {
    // Perform logout actions if needed
    navigate("/login"); // Redirect back to login page
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <h1 className="text-3xl font-semibold text-gray-700">Welcome to Home Page 🎉</h1>
      <button
        onClick={handleLogout}
        className="mt-4 px-4 py-2 text-white bg-red-500 rounded-md hover:bg-red-600"
      >
        Logout
      </button>
    </div>
  );
};

export default Home;
