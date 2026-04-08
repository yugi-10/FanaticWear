import React from 'react';
import { useCart } from '../../context/CartContext';
import { Link } from 'react-router-dom';

const Cart = () => {
  const { cartItems } = useCart();

  return (
    <Link to="/cart" style={{ textDecoration: 'none', color: 'inherit' }}>
      Cart ({cartItems.length})
    </Link>
  );
};

export default Cart;
