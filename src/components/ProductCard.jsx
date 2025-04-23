import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { CartContext } from '../context/CartContext.jsx';
import { toast } from 'react-hot-toast';

const ProductCard = ({ product }) => {
  const { addToCart } = useContext(CartContext);

  return (
    <div className="bg-white rounded-xl shadow-lg p-6 hover:shadow-2xl hover:scale-105 transition-transform duration-300">
      <img src={product.image} alt={product.name} className="w-full h-48 object-contain rounded-md mb-6" />

      <h2 className="text-xl font-bold text-gray-800">{product.name}</h2>
      <p className="text-gray-600 mb-2 text-sm">{product.category} - {product.subcategory}</p>
      <p className="text-gray-700 mb-4 text-sm">{product.description}</p>
      <p className="text-blue-600 font-bold text-lg mb-6">Ksh {product.price}</p>

      <div className="flex justify-between items-center">
        <Link to={`/product/${product.id}`}>
          <button className="bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded-lg text-sm">
            View Details
          </button>
        </Link>

        <button
          onClick={() => {
            addToCart(product);
            toast.success(`${product.name} added to cart!`);
          }}
          className="bg-green-500 hover:bg-green-600 text-white py-2 px-4 rounded-lg text-sm"
        >
          Add to Cart
        </button>
      </div>
    </div>
  );
};

export default ProductCard;
