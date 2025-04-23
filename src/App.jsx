import React, { useState, useEffect } from 'react';
import { Routes, Route } from 'react-router-dom';
import Shop from './pages/Shop';
import Cart from './pages/Cart';
import Navbar from './components/Navbar';
import ProductDetail from './pages/ProductDetail';
import Success from './pages/Success';
import Checkout from './pages/Checkout';
import Loader from './components/Loader';

const App = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    },1000); // Simulate a loading time of 2 seconds

    return () => clearTimeout(timer); // Cleanup the timer on component unmount
  }
  , []);
  if (loading) {
    return <Loader />;
  }
  return (
    <>
    <Navbar /> 
      <Routes>
        <Route path="/" element={<Shop />} />
        <Route path="/cart" element={<Cart />} />
        <Route path = "/product/:id" element={<ProductDetail />} />
        <Route path="/checkout" element={<Checkout />} />
        <Route path="/success" element={<Success />} />
      </Routes>
    </>
  );
};

export default App;