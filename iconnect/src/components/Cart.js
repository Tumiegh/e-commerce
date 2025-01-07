import React, { useContext } from 'react';
import { CartContext } from '../contexts/CartContext';
import './Cart.css'; // Import a CSS file for styling

function Cart() {
  const { cartItems, removeFromCart } = useContext(CartContext);

  const totalPrice = cartItems.reduce((total, item) => total + item.price, 0);

  return (
    <div className="cart-container">
      <h2>Your Cart</h2>
      {cartItems.length === 0 ? (
        <p className="empty-cart-message">Your cart is empty.</p>
      ) : (
        <>
          {cartItems.map(item => (
            <div className="cart-item" key={item.id}>
              <h3>{item.name}</h3>
              <p>Price: R{item.price.toFixed(2)}</p>
              <button 
                className="remove-button" 
                onClick={() => removeFromCart(item.id)}
              >
                Remove
              </button>
            </div>
          ))}
          <div className="cart-total">
            <h3>Total: R{totalPrice.toFixed(2)}</h3>
          </div>
        </>
      )}
    </div>
  );
}

export default Cart;

