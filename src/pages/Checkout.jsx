import React, { useState, useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { CartContext } from '../context/CartContext.jsx';
import { motion } from 'framer-motion';

const Checkout = () => {
  const { cart } = useContext(CartContext);
  const navigate = useNavigate();
  const [form, setForm] = useState({
    name: '',
    phone: '',
    address: '',
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // normally here you'd send data to server
    console.log('Order details:', form, cart);
    navigate('/success'); // redirect to success page
  };

  return (
    <motion.div
      className="bg-gray-100 min-h-screen py-10 px-4"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
    >


      <div className="min-h-screen bg-gray-100 flex flex-col items-center justify-center py-10 px-4">
        <h1 className="text-3xl font-bold text-center text-blue-600 mb-8">CHECKOUT</h1>

        <form onSubmit={handleSubmit} className="bg-white p-6 rounded-lg shadow-lg w-full max-w-md space-y-4">
          <input
            type="text"
            name="name"
            placeholder="Your Name"
            value={form.name}
            onChange={handleChange}
            className="w-full border p-2 rounded"
            required
          />
          <input
            type="tel"
            name="phone"
            placeholder="Phone Number"
            value={form.phone}
            onChange={handleChange}
            className="w-full border p-2 rounded"
            required
          />
          <input
            type="email"
            name="email"
            placeholder="Email Address"
            value={form.email}
            onChange={handleChange}
            className="w-full border p-2 rounded"
            required
          />
          <input
            type="text"
            name="address"
            placeholder="Delivery Address"
            value={form.address}
            onChange={handleChange}
            className="w-full border p-2 rounded"
            required
          />

          <button type="submit" className="bg-green-500 hover:bg-green-600 text-white py-2 px-4 rounded w-full">
            Place Order
          </button>
        </form>
      </div>
    </motion.div>
  );
};

export default Checkout;
