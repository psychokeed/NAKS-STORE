import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

const Success = () => {
  return (
    <motion.div
      className="bg-gray-100 min-h-screen py-10 px-4"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
    >

      <div className="min-h-screen bg-green-100 flex flex-col items-center justify-center py-10 px-4">
        <h1 className="text-4xl font-bold text-green-700 mb-4">Thank You!</h1>
        <p className="text-lg text-green-800 mb-6">Your order has been placed successfully.</p>

        <Link to="/">
          <button className="bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded">
            Back to Home
          </button>
        </Link>
      </div>
    </motion.div>
  );
};

export default Success;
