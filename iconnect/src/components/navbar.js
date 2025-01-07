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
          <NavLink to="/" exact activeClassName="active-link">Home</NavLink>
        </li>
        <li>
          <NavLink to="/products" activeClassName="active-link">Products</NavLink>
        </li>
        <li>
          <NavLink to="/contact" activeClassName="active-link">Contact</NavLink>
        </li>
        <li>
          <NavLink to="/cart" activeClassName="active-link">Cart</NavLink>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;

