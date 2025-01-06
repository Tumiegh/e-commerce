import React from 'react';
import './Footer.css';

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-links">
        <a href="#home">Home</a>
        <a href="#products">Products</a>
        <a href="#reviews">Reviews</a>
        <a href="#contact">Contact</a>
        <a href="#orders">Orders</a>
        <a href="#cart">Cart</a>
        <a href="#track-order">Track Order</a>
        <a href="#terms">Terms & Conditions</a>
        <a href="#policy">Privacy Policy</a>
      </div>
      <p>&copy; 2025 Your E-commerce Site. All Rights Reserved.</p>
    </footer>
  );
}

export default Footer;

