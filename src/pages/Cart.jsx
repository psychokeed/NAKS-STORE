import React, { useContext } from 'react';
import { CartContext } from '../context/CartContext.jsx';
import { Link } from 'react-router-dom';
import toast from 'react-hot-toast';
import { motion } from 'framer-motion';

const Cart = () => {
  const { cart, removeFromCart, increaseQuantity, decreaseQuantity } = useContext(CartContext);

  const total = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);

  return (
    <motion.div
      className="bg-gray-100 min-h-screen py-10 px-4"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
    >

      <div className="min-h-screen bg-gray-100 py-10 px-4">
        <h1 className="text-3xl font-bold text-center text-blue-600 mb-8">YOUR CART</h1>

        {cart.length === 0 ? (
          <p className="text-center text-gray-600">Your cart is empty.</p>
        ) : (
          <div className="max-w-4xl mx-auto space-y-6">
            {cart.map((item, index) => (
              <div key={index} className="flex flex-col md:flex-row md:justify-between md:items-center bg-white p-4 rounded-lg shadow space-y-4 md:space-y-0">
                <div>
                  <h2 className="text-lg font-bold">{item.name}</h2>
                  <p className="text-gray-500">{item.category}</p>
                  <p className="text-gray-700">Ksh {item.price} x {item.quantity}</p>
                  <p className="text-gray-800 font-semibold">Subtotal: Ksh {item.price * item.quantity}</p>

                  <div className="flex items-center space-x-2 mt-2">
                    <button
                      onClick={() => decreaseQuantity(item.id)}
                      className="bg-gray-300 hover:bg-gray-400 text-black font-bold py-1 px-3 rounded"
                    >−</button>

                    <span className="font-semibold">{item.quantity}</span>

                    <button
                      onClick={() => increaseQuantity(item.id)}
                      className="bg-gray-300 hover:bg-gray-400 text-black font-bold py-1 px-3 rounded"
                    >+</button>
                  </div>
                </div>

                <button
                  onClick={() => {
                    removeFromCart(item.id);
                    toast.error(`${item.name} removed from cart!`);
                  }}
                  className="bg-red-500 hover:bg-red-600 text-white py-1 px-3 rounded"
                >
                  Remove
                </button>
              </div>
            ))}

            <div className="text-right mt-6 space-y-4">
              <h2 className="text-2xl font-bold text-blue-700">Total: Ksh {total}</h2>

              {/* Proceed to Checkout Button */}
              <Link to="/checkout">
                <button className="bg-green-500 hover:bg-green-600 text-white py-2 px-6 rounded text-lg">
                  Proceed to Checkout
                </button>
              </Link>
            </div>
          </div>
        )}
      </div>
    </motion.div>
  );
};

export default Cart;
