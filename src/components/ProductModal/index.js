import React, { useContext, useEffect, useState } from 'react';
import { CartContext } from '../../context/CartContext';
import './ProductModal.css';

const FALLBACK_IMG = "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='400' height='400'%3E%3Crect width='100%25' height='100%25' fill='%23141414'/%3E%3C/svg%3E";
const SIZES = ['XS', 'S', 'M', 'L', 'XL', 'XXL'];

const ProductModal = ({ product, onClose }) => {
  const { addToCart } = useContext(CartContext);
  const [selectedSize, setSelectedSize] = useState('M');
  const [quantity, setQuantity] = useState(1);

  useEffect(() => {
    document.body.style.overflow = 'hidden';
    const handleKey = (e) => { if (e.key === 'Escape') onClose(); };
    window.addEventListener('keydown', handleKey);
    return () => {
      document.body.style.overflow = '';
      window.removeEventListener('keydown', handleKey);
    };
  }, [onClose]);

  if (!product) return null;

  const handleAddToCart = () => {
    addToCart({ ...product, size: selectedSize, quantity });
    onClose();
  };

  const changeQty = (delta) => {
    setQuantity(prev => Math.max(1, Math.min(10, prev + delta)));
  };

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-panel" onClick={(e) => e.stopPropagation()}>
        <button className="modal-close" onClick={onClose}>
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
            <path d="M18 6L6 18M6 6l12 12"/>
          </svg>
        </button>

        <div className="modal-image-wrap">
          <img
            src={product.image}
            alt={product.name}
            onError={(e) => { e.target.src = FALLBACK_IMG; }}
          />
          <div className="modal-img-badge">{product.sleeve}</div>
        </div>

        <div className="modal-info">
          <div className="modal-top">
            <span className="modal-brand">{product.brand}</span>
          </div>
          <h2 className="modal-title">{product.name}</h2>
          <div className="modal-price-row">
            <span className="modal-price">₹{product.price.toFixed(2)}</span>
            <span className="modal-stock">In Stock</span>
          </div>
          <div className="modal-divider" />
          <p className="modal-description">{product.description}</p>

          {/* Size selector */}
          <div className="modal-section">
            <div className="modal-section-label">
              Size <span className="selected-size">{selectedSize}</span>
            </div>
            <div className="size-grid">
              {SIZES.map(size => (
                <button
                  key={size}
                  className={`size-btn ${selectedSize === size ? 'size-btn--active' : ''}`}
                  onClick={() => setSelectedSize(size)}
                >
                  {size}
                </button>
              ))}
            </div>
          </div>

          {/* Quantity selector */}
          <div className="modal-section">
            <div className="modal-section-label">Quantity</div>
            <div className="qty-row">
              <button className="qty-btn" onClick={() => changeQty(-1)}>−</button>
              <span className="qty-value">{quantity}</span>
              <button className="qty-btn" onClick={() => changeQty(1)}>+</button>
            </div>
          </div>

          <div className="modal-features">
            <div className="modal-feature">
              <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><polyline points="20 6 9 17 4 12"/></svg>
              Official Licensed Jersey
            </div>
            <div className="modal-feature">
              <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><polyline points="20 6 9 17 4 12"/></svg>
              Free Worldwide Delivery
            </div>
            <div className="modal-feature">
              <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><polyline points="20 6 9 17 4 12"/></svg>
              30-Day Easy Returns
            </div>
          </div>

          <button className="modal-add-btn" onClick={handleAddToCart}>
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
              <path d="M6 2L3 6v14a2 2 0 002 2h14a2 2 0 002-2V6l-3-4z"/>
              <line x1="3" y1="6" x2="21" y2="6"/>
              <path d="M16 10a4 4 0 01-8 0"/>
            </svg>
            <span>Add {quantity > 1 ? `${quantity} items` : 'to Cart'} — ₹{(product.price * quantity).toFixed(2)}</span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductModal;
