import React from 'react';
import './Navbar.css';

function Navbar() {
  return (
    <nav className="navbar">
      <div className="navbar-logo">iConnect</div>
      <ul className="navbar-links">
        <li>Home</li>
        <li>Products</li>
        <li>Contact</li>
      </ul>
    </nav>
  );
}

export default Navbar;
