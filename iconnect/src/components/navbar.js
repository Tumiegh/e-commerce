import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';

function Navbar() {
  return (
    <nav className="navbar">
      <div className="navbar-logo">
        <Link to="/">iConnect</Link>
      </div>
      <ul className="navbar-links">
        <li>
          <a href="#about">Home</a> {/* Updated to anchor tag with href */}
        </li>
        <li>
          <a href="#products">Products</a> {/* Updated to anchor tag with href */}
        </li>
        <li>
          <a href="#reviews">Reviews</a> {/* Updated to anchor tag with href */}
        </li>
        <li>
          <a href="#contact">Contact</a> {/* Updated to anchor tag with href */}
        </li>
        <li>
          <Link to="/cart">Cart</Link>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;




