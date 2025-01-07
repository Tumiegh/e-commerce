import React, { useEffect, useState, useContext } from 'react';
import './ProductList.css';
import { CartContext } from '../contexts/CartContext';
import { fetchProducts } from '../firebaseService';

// ProductCard Component for displaying each product
function ProductCard({ product }) {
  const { addToCart } = useContext(CartContext);

  const formattedPrice = new Intl.NumberFormat('en-ZA', {
    style: 'currency',
    currency: 'ZAR',
  }).format(product.price);

  return (
    <div className="product-card">
      <h3>{product.name}</h3>
      <p>{formattedPrice}</p>
      <button className="add-to-cart-button" onClick={() => addToCart(product)}>
        Add to Cart
      </button>
    </div>
  );
}

// ProductList Component to fetch and display all products
function ProductList() {
  const [productList, setProductList] = useState([]); // State for product list
  const [loading, setLoading] = useState(true); // Loading state
  const [error, setError] = useState(null); // Error state

  // Fetch products when the component mounts
  useEffect(() => {
    const loadProducts = async () => {
      try {
        const productsFromDB = await fetchProducts();
        if (productsFromDB && Array.isArray(productsFromDB)) {
          setProductList(productsFromDB);
        } else {
          throw new Error('Invalid data format');
        }
      } catch (err) {
        setError('Failed to load products. Please try again later.');
      } finally {
        setLoading(false);
      }
    };

    loadProducts();
  }, []); // Empty dependency array to run once when the component mounts

  // Loading or error message
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


