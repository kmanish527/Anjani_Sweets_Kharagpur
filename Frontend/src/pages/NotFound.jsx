import React from "react";
import { Link } from "react-router-dom";


const NotFound = () => {
  return (
    <div className="fixed inset-0 backdrop-blur-sm flex items-center justify-center p-4">
      <div className="max-w-md w-full rounded-xl p-8 shadow-lg backdrop-filter backdrop-blur-lg border border-white border-opacity-20 text-center">
        <h1 className="text-4xl font-bold mb-4 text-white">404 - PAGE NOT FOUND</h1>
        <p className="text-lg text-gray-100 mb-8">
          The page you're looking for doesn't exist or has been moved.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
        <Link
            to="/"
            className="px-6 py-3 bg-white/30 text-white rounded-full hover:bg-white/40 transition duration-300"
          >
            Back to Home
          </Link>


        </div>
      </div>
    </div>
  );
};

export default NotFound;