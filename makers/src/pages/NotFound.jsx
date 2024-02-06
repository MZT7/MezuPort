// NotFound.js
// import React from 'react';

const NotFound = () => {
  return (
    <div className="flex items-center justify-center h-96 ">
      <div className="text-center">
        <h1 className="mb-4 text-6xl font-bold text-gray-800">404</h1>
        <p className="mb-8 text-2xl font-semibold text-gray-600">
          Page Not Found
        </p>
        <p className="text-lg text-gray-700">
          Oops! The page you&apos;re looking for might have been removed or is
          temporarily unavailable.
        </p>
        <a href="/" className="block mt-4 text-blue-500 hover:underline">
          Go back to the home page
        </a>
      </div>
    </div>
  );
};

export default NotFound;
