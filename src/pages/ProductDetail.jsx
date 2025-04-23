import React, { useContext, useState } from 'react';
import { useParams } from 'react-router-dom';
import products from '../data/products.js';
import { CartContext } from '../context/CartContext.jsx';
import { motion } from 'framer-motion';
import { FaStar } from 'react-icons/fa';
import { Link } from 'react-router-dom';


const ProductDetail = () => {
  const { id } = useParams();
  const { addToCart } = useContext(CartContext);


  const product = products.find((product) => product.id === parseInt(id));

  const [userRating, setUserRating] = useState(product.rating || 0);

  if (!product) {
    return <h2 className="text-center text-2xl mt-10">Product not found!</h2>;
  }

  return (
    <motion.div
      className="bg-gray-100 min-h-screen py-10 px-4"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="min-h-screen flex flex-col md:flex-row items-center justify-center p-10">
        {/* Product Image */}
        <img
          src={product.image}
          alt={product.name}
          className="w-80 h-80 object-cover rounded-lg shadow-lg"
        />

        {/* Product Info */}
        <div className="mt-8 md:mt-0 md:ml-10 max-w-lg">
          <h1 className="text-3xl font-bold mb-4">{product.name}</h1>
          <p className="text-gray-600 mb-2">{product.category} - {product.subcategory}</p>
          <p className="text-gray-700 mb-4">{product.description}</p>

          {/* Ingredients Section */}
          <div className="mb-6">
            <h3 className="text-xl font-semibold mb-2">Ingredients</h3>
            <p className="text-gray-700">
              {product.ingredients ? product.ingredients : "No ingredients information available."}
            </p>
          </div>

          {/* Usage / Dosage Section */}
          <div className="mb-6">
            <h3 className="text-xl font-semibold mb-2">Usage / Dosage</h3>
            <p className="text-gray-700">
              {product.dosage ? product.dosage : "No dosage information available."}
            </p>
          </div>

          {/* Customer Reviews Section */}
          <div className="mb-6">
            <h3 className="text-xl font-semibold mb-2">Customer Reviews</h3>
            <div className="space-y-2 text-gray-700">
              {product.reviews && product.reviews.length > 0 ? (
                product.reviews.map((review, index) => (
                  <p key={index}>"{review}"</p>
                ))
              ) : (
                <p>No reviews yet for this product.</p>
              )}
            </div>
          </div>

          {/* User Star Rating Section */}
          <div className="flex items-center space-x-1 mb-6">
            {[1, 2, 3, 4, 5].map((star) => (
              <FaStar
                key={star}
                className={`cursor-pointer text-2xl ${userRating >= star ? 'text-yellow-400' : 'text-gray-300'
                  }`}
                onClick={() => setUserRating(star)}
              />
            ))}
            <span className="ml-2 text-gray-700">{userRating} / 5</span>
          </div>



          <p className="text-2xl font-bold text-blue-600 mb-6">Ksh {product.price}</p>
          {/* Add to Cart Button */}
          <button
            onClick={() => addToCart(product)}
            className="bg-green-500 hover:bg-green-600 text-white font-semibold py-2 px-6 rounded"
          >
            Add to Cart
          </button>
        </div>
      </div>

      {/* Related Products Section */}
      <div className="mt-16">
        <h2 className="text-2xl font-bold text-gray-800 mb-6 text-center">RELATED PRODUCTS</h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {products
            .filter(p => p.id !== product.id && (p.category === product.category || p.subcategory === product.subcategory))
            .slice(0, 3)
            .map(related => (
              <div key={related.id} className="bg-white rounded-lg shadow-md p-4 hover:shadow-lg transition">
                <Link to={`/product/${related.id}`} className="block">
                  <img src={related.image} alt={related.name} className="w-full h-40 object-cover rounded-md mb-4" />
                  <h3 className="text-lg font-bold">{related.name}</h3>
                  <p className="text-blue-600 font-semibold mb-2">Ksh {related.price}</p>
                </Link>
                <button
                  onClick={() => addToCart(related)}
                  className="bg-green-500 hover:bg-green-600 text-white py-1 px-4 rounded text-sm mt-2"
                >
                  Add to Cart
                </button>
              </div>
            ))}
        </div>
      </div>
    </motion.div>
  );
};

export default ProductDetail;
