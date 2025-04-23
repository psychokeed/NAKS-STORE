import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { CartContext } from '../context/CartContext';
import { FaShoppingCart } from 'react-icons/fa'

const Navbar = () => {
    const { cart } = useContext(CartContext);

    return (
        <nav className="bg-white shadow-md px-6 py-4 flex flex-wrap items-center justify-between">            <Link to="/" className="text-2xl font-bold text-blue-600">
            NAKS-STORE
        </Link>

            <div className='flex items-center space-x-6'>
                <Link to="/" className="text-gray-700 hover:text-blue-600">
                    Home
                </Link>

                <Link to="/cart" className="relative text-gray-700 hover:text-blue-600">
                    <FaShoppingCart className="text-2xl" />
                    {cart.length > 0 && (
                        <span className='absolute -top-2 -right-4 bg-red-500 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center'>
                            {cart.length}
                        </span>
                    )}
                </Link>
            </div>
        </nav>
    );
};

export default Navbar;