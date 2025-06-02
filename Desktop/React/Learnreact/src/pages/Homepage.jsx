// Home.js
import React from 'react';
import { Link } from 'react-router-dom';

export default function Home() {
  return (
    <div className="max-w-md mx-auto text-center space-y-4">
      <h1 className="text-3xl font-bold mb-6">Different pages heeeh </h1>

      <Link to="/page1">
        <button className="w-full bg-blue-600 hover:bg-blue-700 text-white py-3 rounded-md transition">
          Go to Page 1
        </button>
      </Link>

      <Link to="/page2">
        <button className="w-full bg-green-600 hover:bg-green-700 text-white py-3 rounded-md transition">
          Go to Page 2
        </button>
      </Link>

      <Link to="/page3">
        <button className="w-full bg-purple-600 hover:bg-purple-700 text-white py-3 rounded-md transition">
          Go to Page 3
        </button>
      </Link>

    
    </div>
  );
}
