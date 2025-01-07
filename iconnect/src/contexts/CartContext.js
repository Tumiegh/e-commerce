import React, { createContext, useState } from 'react';

// Create CartContext
export const CartContext = createContext();

// CartProvider Component
export const CartProvider = ({ children }) => {
  const [cartItems, setCartItems] = useState([]);

  // Add product to cart
  const addToCart = (product) => {
    const existingProduct = cartItems.find(item => item.id === product.id);
    if (!existingProduct) {
      setCartItems((prevItems) => [...prevItems, product]);
    }
  };

  // Remove product from cart
  const removeFromCart = (productId) => {
    setCartItems((prevItems) => prevItems.filter(item => item.id !== productId));
  };

  return (
    <CartContext.Provider value={{ cartItems, addToCart, removeFromCart }}>
      {children}
    </CartContext.Provider>
  );
};

