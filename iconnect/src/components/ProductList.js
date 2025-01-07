import React, { useEffect, useState, useContext } from 'react';
import './ProductList.css';
import { CartContext } from '../contexts/CartContext';

// Sample Hardcoded Product Data
const sampleProducts = [
  {
    id: '1',
    name: 'iPhone 12',
    price: 8999.99,
    description: 'Latest iPhone with amazing features.',
    imageUrl: 'https://example.com/iphone12.jpg',
  },
  {
    id: '2',
    name: 'Samsung Galaxy S21',
    price: 7499.99,
    description: 'Premium smartphone with a stunning camera.',
    imageUrl: 'https://example.com/galaxy-s21.jpg',
  },
  {
    id: '3',
    name: 'MacBook Air',
    price: 17999.99,
    description: 'Lightweight and powerful laptop for professionals.',
    imageUrl: 'https://example.com/macbook-air.jpg',
  },
  {
    id: '4',
    name: 'Apple Watch Series 6',
    price: 7999.99,
    description: 'The latest in wearable tech with health monitoring.',
    imageUrl: 'https://example.com/apple-watch.jpg',
  },
];

// ProductCard Component
function ProductCard({ product }) {
  const { addToCart, removeFromCart, cartItems } = useContext(CartContext);
  const [isInCart, setIsInCart] = useState(false);

  useEffect(() => {
    const productInCart = cartItems.find(item => item.id === product.id);
    setIsInCart(!!productInCart);
  }, [cartItems, product.id]);

  const handleCartAction = () => {
    if (isInCart) {
      removeFromCart(product.id);
    } else {
      addToCart(product);
    }
  };

  const formattedPrice = new Intl.NumberFormat('en-ZA', {
    style: 'currency',
    currency: 'ZAR',
  }).format(product.price);

  return (
    <div className="product-card">
      <img src={product.imageUrl} alt={product.name} className="product-image" />
      <h3>{product.name}</h3>
      <p>{formattedPrice}</p>
      <p>{product.description}</p>
      <button
        className={`cart-button ${isInCart ? 'in-cart' : ''}`}
        onClick={handleCartAction}
      >
        {isInCart ? 'Remove from Cart' : 'Add to Cart'}
      </button>
    </div>
  );
}

// ProductList Component
function ProductList() {
  const [productList, setProductList] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const loadProducts = async () => {
      try {
        const productsFromDB = sampleProducts;
        setProductList(productsFromDB);
      } catch (err) {
        setError('Failed to load products. Please try again later.');
      } finally {
        setLoading(false);
      }
    };

    loadProducts();
  }, []);

  if (loading) {
    return <p className="loading-message">Loading products...</p>;
  }

  if (error) {
    return <p className="error-message">{error}</p>;
  }

  return (
    <div className="product-list">
      {productList.length > 0 ? (
        productList.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))
      ) : (
        <p className="no-products-message">No products available</p>
      )}
    </div>
  );
}

export default ProductList;



