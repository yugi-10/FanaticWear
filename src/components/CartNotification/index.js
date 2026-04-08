import React from 'react';
import { useCart } from '../../context/CartContext';
import './CartNotification.css';

const CartNotification = () => {
  const { showNotification } = useCart();

  return (
    <div className={`cart-notification ${showNotification ? 'cart-notification--visible' : ''}`}>
      <div className="cart-notification-icon">
        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
          <polyline points="20 6 9 17 4 12"/>
        </svg>
      </div>
      <span>Added to cart</span>
    </div>
  );
};

export default CartNotification;
