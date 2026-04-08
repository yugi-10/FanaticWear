import React from 'react';
import { Link } from 'react-router-dom';
import { useAuth } from '../../context/AuthContext';
import { useCart } from '../../context/CartContext';
import './Navbar.css';

const Navbar = () => {
  const { user, logout } = useAuth();
  const { cartItems } = useCart();

  return (
    <nav className="navbar">
      <Link to="/" className="logo">
        <img src="/images/logo.jpeg" alt="Fanatic Wear" className="logo-img" />
        <span className="logo-text">FENATIC<span className="logo-accent">WEAR</span></span>
      </Link>
      <div className="nav-links">
        <Link to="/products">Shop</Link>
        <Link to="/contact">Contact</Link>
        {user ? (
          <button className="nav-logout-btn" onClick={logout}>Logout</button>
        ) : (
          <Link to="/login">Login</Link>
        )}
        <Link to="/cart" className="nav-cart">
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <path d="M6 2L3 6v14a2 2 0 002 2h14a2 2 0 002-2V6l-3-4z"/>
            <line x1="3" y1="6" x2="21" y2="6"/>
            <path d="M16 10a4 4 0 01-8 0"/>
          </svg>
          Cart
          {cartItems.length > 0 && (
            <span className="nav-cart-count">{cartItems.length}</span>
          )}
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
