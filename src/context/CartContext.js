import { createContext, useContext, useState } from 'react';

export const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [cartItems, setCartItems] = useState([]);
  const [showNotification, setShowNotification] = useState(false);

  const addToCart = (product) => {
    // product already has size and quantity from modal
    const item = {
      ...product,
      quantity: product.quantity || 1,
      size: product.size || 'M',
    };
    setCartItems(prev => [...prev, item]);
    setShowNotification(true);
    setTimeout(() => setShowNotification(false), 2500);
  };

  const removeFromCart = (index) => {
    setCartItems(prev => prev.filter((_, i) => i !== index));
  };

  return (
    <CartContext.Provider value={{ cartItems, addToCart, removeFromCart, showNotification }}>
      {children}
    </CartContext.Provider>
  );
};

export const useCart = () => useContext(CartContext);
export default CartContext;
