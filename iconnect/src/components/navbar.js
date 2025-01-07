import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import './Navbar.css';

function Navbar() {
  return (
    <nav className="navbar">
      <div className="navbar-logo">
        <Link to="/">iConnect</Link>
      </div>
      <ul className="navbar-links">
        <li>
          <NavLink 
            to="/" 
            end 
            className={({ isActive }) => isActive ? 'active-link' : undefined}
          >
            Home
          </NavLink>
        </li>
        <li>
          <NavLink 
            to="/products" 
            className={({ isActive }) => isActive ? 'active-link' : undefined}
          >
            Products
          </NavLink>
        </li>
        <li>
          <NavLink 
            to="/contact" 
            className={({ isActive }) => isActive ? 'active-link' : undefined}
          >
            Contact
          </NavLink>
        </li>
        <li>
          <NavLink 
            to="/cart" 
            className={({ isActive }) => isActive ? 'active-link' : undefined}
          >
            Cart
          </NavLink>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;


