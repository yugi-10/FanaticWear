import React from 'react';
import { useCart } from '../../context/CartContext';
import Navbar from '../../components/Navbar';
import { Link } from 'react-router-dom';
import './CartPage.css';

const FALLBACK_IMG = "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100' height='133'%3E%3Crect width='100%25' height='100%25' fill='%23141414'/%3E%3C/svg%3E";

const CartPage = () => {
  const { cartItems, removeFromCart } = useCart();
  const subtotal = cartItems.reduce((sum, item) => sum + (item.price * (item.quantity || 1)), 0);
  const shipping = cartItems.length > 0 ? 0 : 0;
  const total = subtotal + shipping;

  return (
    <>
      <Navbar />
      <div className="cart-page">
        <div className="cart-header">
          <div className="cart-header-label">Your Selection</div>
          <h1 className="cart-title">YOUR<br /><span>CART</span></h1>
          <p className="cart-count">{cartItems.length} {cartItems.length === 1 ? 'item' : 'items'}</p>
        </div>

        {cartItems.length === 0 ? (
          <div className="cart-empty">
            <div className="cart-empty-icon">
              <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                <path d="M6 2L3 6v14a2 2 0 002 2h14a2 2 0 002-2V6l-3-4z"/>
                <line x1="3" y1="6" x2="21" y2="6"/>
                <path d="M16 10a4 4 0 01-8 0"/>
              </svg>
            </div>
            <p className="cart-empty-text">Your cart is empty</p>
            <Link to="/products" className="cart-shop-btn">
              <span>Browse Jerseys</span>
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                <path d="M5 12h14M12 5l7 7-7 7"/>
              </svg>
            </Link>
          </div>
        ) : (
          <div className="cart-layout">
            {/* Items */}
            <div className="cart-items">
              {cartItems.map((item, index) => (
                <div key={index} className="cart-item">
                  <div className="cart-item-image">
                    <img src={item.image} alt={item.name}
                      onError={(e) => { e.target.src = FALLBACK_IMG; }} />
                  </div>
                  <div className="cart-item-details">
                    <span className="cart-item-brand">{item.brand}</span>
                    <h3 className="cart-item-name">{item.name}</h3>
                    <div className="cart-item-meta">
                      {item.size && (
                        <span className="cart-item-tag">Size: <strong>{item.size}</strong></span>
                      )}
                      {item.quantity && (
                        <span className="cart-item-tag">Qty: <strong>{item.quantity}</strong></span>
                      )}
                      <span className="cart-item-tag">{item.sleeve}</span>
                    </div>
                    <span className="cart-item-price">₹{(item.price * (item.quantity || 1)).toLocaleString('en-IN')}</span>
                  </div>
                  <button className="cart-remove-btn" onClick={() => removeFromCart(index)}>
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                      <path d="M18 6L6 18M6 6l12 12"/>
                    </svg>
                  </button>
                </div>
              ))}

              {/* Payment methods info */}
              <div className="cart-payment-info">
                <div className="payment-info-title">
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <rect x="1" y="4" width="22" height="16" rx="2" ry="2"/>
                    <line x1="1" y1="10" x2="23" y2="10"/>
                  </svg>
                  We Accept
                </div>
                <div className="payment-methods">
                  <span className="payment-badge">💳 Credit Card</span>
                  <span className="payment-badge">🏦 Debit Card</span>
                  <span className="payment-badge">📱 UPI</span>
                  <span className="payment-badge">🏧 Net Banking</span>
                  <span className="payment-badge">💰 Cash on Delivery</span>
                </div>
              </div>
            </div>

            {/* Summary */}
            <div className="cart-summary">
              <div className="summary-header">Order Summary</div>
              <div className="summary-rows">
                <div className="summary-row">
                  <span>Subtotal ({cartItems.length} items)</span>
                  <span>₹{subtotal.toLocaleString('en-IN')}</span>
                </div>
                <div className="summary-row">
                  <span>Shipping</span>
                  <span className="free-tag">FREE</span>
                </div>
                <div className="summary-row">
                  <span>GST (18%)</span>
                  <span>Included</span>
                </div>
                <div className="summary-row summary-row--total">
                  <span>Total</span>
                  <span>₹{total.toLocaleString('en-IN')}</span>
                </div>
              </div>

              <button className="checkout-btn">
                <span>Proceed to Checkout</span>
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                  <path d="M5 12h14M12 5l7 7-7 7"/>
                </svg>
              </button>

              {/* Payment badges in summary */}
              <div className="summary-payment-icons">
                <span title="UPI">UPI</span>
                <span title="Visa">VISA</span>
                <span title="Mastercard">MC</span>
                <span title="RuPay">RuPay</span>
              </div>

              <Link to="/products" className="continue-shopping">← Continue Shopping</Link>

              {/* Guarantees */}
              <div className="cart-guarantees">
                <div className="guarantee-item">
                  <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><polyline points="20 6 9 17 4 12"/></svg>
                  100% Authentic Jerseys
                </div>
                <div className="guarantee-item">
                  <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><polyline points="20 6 9 17 4 12"/></svg>
                  Free Delivery Pan India
                </div>
                <div className="guarantee-item">
                  <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><polyline points="20 6 9 17 4 12"/></svg>
                  Easy 30-Day Returns
                </div>
                <div className="guarantee-item">
                  <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><polyline points="20 6 9 17 4 12"/></svg>
                  Secure Payment
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </>
  );
};

export default CartPage;
