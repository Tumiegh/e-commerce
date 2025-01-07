import React, { createContext, useState } from 'react';

// Create CartContext to hold cart state and methods
export const CartContext = createContext();

// Create CartProvider component to manage and provide the cart state
export const CartProvider = ({ children }) => {
  const [cartItems, setCartItems] = useState([]);

  // Function to add product to cart
  const addToCart = (product) => {
    // Check if product already exists in cart
    const existingProduct = cartItems.find(item => item.id === product.id);
    
    if (!existingProduct) {
      // If not, add the product to the cart
      setCartItems((prevItems) => [...prevItems, product]);
    }
  };

  // Function to remove product from cart
  const removeFromCart = (productId) => {
    setCartItems((prevItems) => prevItems.filter(item => item.id !== productId));
  };

  // Return CartContext.Provider to provide the context to children
  return (
    <CartContext.Provider value={{ cartItems, addToCart, removeFromCart }}>
      {children}
    </CartContext.Provider>
  );
};
