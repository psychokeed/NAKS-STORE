import React from 'react';

const Loader = () => {
  return (
    <div className="flex items-center justify-center min-h-screen bg-white">
      <div className="relative">
        <div className="w-16 h-16 rounded-full border-4 border-blue-300 border-t-blue-600 animate-spin"></div>
        <div className="absolute top-2 left-2 w-12 h-12 bg-white rounded-full"></div>
      </div>
    </div>
  );
};

export default Loader;
