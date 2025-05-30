import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import './index.css';
import App from './App.jsx';
import CartProvider from './context/CartContext.jsx';
import { Toaster } from 'react-hot-toast';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
    <CartProvider>
      <Toaster position="top-center" reverseOrder={false} />
      <App />
    </CartProvider>
    </BrowserRouter>
  </StrictMode>
);
