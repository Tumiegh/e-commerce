import React from 'react';
import './ProductList.css';
import React, { useEffect, useState } from 'react';
import './ProductList.css';
import { fetchProducts } from '../firebaseService';

const products = [
  { id: 1, name: 'Product 1', price: 10000 },
  { id: 2, name: 'Product 2', price: 12000 },
  { id: 3, name: 'Product 3', price: 22000 },
];

function ProductCard({ product }) {
  const formattedPrice = new Intl.NumberFormat('en-ZA', {
    style: 'currency',
    currency: 'ZAR',
  }).format(product.price);

  return (
    <div className="product-card">
      <h3>{product.name}</h3>
      <p>{formattedPrice}</p>
    </div>
  );
}

function ProductList() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const loadProducts = async () => {
      const productsList = await fetchProducts();
      setProducts(productsList);
    };
    loadProducts();
  }, []);

  return (
    <div className="product-list">
      {products.map((product) => (
        <ProductCard key={product.id} product={product} />
      ))}
    </div>
  );
}

export default ProductList;

