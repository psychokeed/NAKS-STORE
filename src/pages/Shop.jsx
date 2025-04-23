import React, { useState } from 'react';
import products from '../data/products.js';
import ProductCard from '../components/ProductCard.jsx';
import { FaSearch } from 'react-icons/fa';
import { motion } from 'framer-motion';

const categories = [
  "All",
  
  // Main Categories
  "Health and wellness supplements",
  "Vitamins & Minerals",
  "Essential Fatty Acids",
  "Proteins & Sports Supplements",
  "Herbs",
  "Probiotics",
  "Blood Booster Supplements",
  
  // Subcategories
  "Chronic Illness",
  "Child Health Supplements",
  "Sports Performance",
  "Pregnancy",
  "Neurodevelopmental Problems",
  "Gynecological Issues",
  "Men’s Sexual Performance",
  "Fertility Enhancement",
  "Menopause & Neurodegenerative Disorders"
];


const priceRanges = [
  { label: 'All', min: 0, max: Infinity },
  { label: 'Below 2000', min: 0, max: 1999 },
  { label: '2000 - 4000', min: 2000, max: 4000 },
  { label: 'Above 4000', min: 4001, max: Infinity },
];


const Shop = () => {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [selectedPrice, setSelectedPrice] = useState('All');
  const [searchQuery, setSearchQuery] = useState('');



  const filteredProducts = products.filter((product) => {
    const matchesCategory =
      selectedCategory === 'All' ||
      product.category === selectedCategory ||
      product.subcategory === selectedCategory;

    const matchesPrice = (() => {
      const priceRange = priceRanges.find(range => range.label === selectedPrice) || priceRanges[0];
      return product.price >= priceRange.min && product.price <= priceRange.max;
    })();

    const matchesSearch =
      product.name.toLowerCase().includes(searchQuery.toLowerCase());

    return matchesCategory && matchesPrice && matchesSearch;
  });



  return (
    <motion.div
      className="bg-gray-100 min-h-screen py-10 px-4"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
    >

      <div className="bg-gray-100 min-h-screen py-10 px-4">
        <h1 className="text-3xl font-bold text-center text-blue-600 mb-8">OUR PRODUCTS</h1>

        {/* Categories Filter */}
        <div className="flex flex-wrap gap-3 justify-center mb-8">
          {categories.map((cat, index) => (
            <button
              key={index}
              onClick={() => setSelectedCategory(cat)}
              className={`py-2 px-4 rounded-full border ${selectedCategory === cat ? 'bg-blue-500 text-white' : 'bg-white text-gray-700'
                } hover:bg-blue-400 hover:text-white transition`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* price-Ranges */}
        <div className="flex flex-wrap gap-3 justify-center mb-8">
          {priceRanges.map((range, index) => (
            <button
              key={index}
              onClick={() => setSelectedPrice(range.label)}
              className={`py-2 px-4 rounded-full border ${selectedPrice === range.label ? 'bg-green-500 text-white' : 'bg-white text-gray-700'
                } hover:bg-green-400 hover:text-white transition`}
            >
              {range.label}
            </button>
          ))}
        </div>

        {/* Search Bar */}
        <div className="flex justify-center mb-8">
          <div className="relative">
            <input
              type="text"
              placeholder="Search products..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="border rounded-lg p-2 pl-10 w-64 focus:outline-none focus:ring-2 focus:ring-blue-400"
            />
            <FaSearch className="absolute top-1/2 left-3 transform -translate-y-1/2 text-gray-400" />
          </div>
        </div>


        {/* product grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {filteredProducts.length > 0 ? (
            filteredProducts.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))
          ) : (
            <p className="text-center col-span-full text-gray-600">No products found.</p>
          )}
        </div>
      </div>
    </motion.div>
  );
};

export default Shop;
