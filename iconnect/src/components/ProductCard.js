import React, { useState, useContext } from 'react';
import './ProductCard.css';
import { CartContext } from '../contexts/CartContext';

function ProductCard({ image, name, price, id }) {
  const { addToCart } = useContext(CartContext);
  const [isAdded, setIsAdded] = useState(false);

  const formattedPrice = new Intl.NumberFormat('en-ZA', {
    style: 'currency',
    currency: 'ZAR',
  }).format(price);

  const handleAddToCart = () => {
    addToCart({ image, name, price, id });
    setIsAdded(true);
  };

  return (
    <div className="product-card">
      <img src={image} alt={name} className="product-image" />
      <h3>{name}</h3>
      <p>{formattedPrice}</p>
      <button
        className={`add-to-cart-btn ${isAdded ? 'added' : ''}`}
        onClick={handleAddToCart}
        disabled={isAdded}
      >
        {isAdded ? 'Added to Cart' : 'Add to Cart'}
      </button>
    </div>
  );
}

export default ProductCard;



