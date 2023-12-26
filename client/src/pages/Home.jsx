// Home.js

import React from 'react';
import { useNavigate } from 'react-router-dom';

const Home = () => {
  const navigate = useNavigate();

  const handleGetStartedClick = () => {
    
    navigate('/sign_in');
  };

  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gray-100">
      <h1 className="text-4xl font-bold mb-6">Welcome to Your Website</h1>
      <p className="text-lg text-gray-600 mb-8">Discover amazing features and more!</p>
      <button
        onClick={handleGetStartedClick}
        className="bg-blue-500 text-white px-8 py-3 rounded-full font-semibold hover:bg-blue-600 focus:outline-none"
      >
        Get Started
      </button>
    </div>
  );
};

export default Home;
