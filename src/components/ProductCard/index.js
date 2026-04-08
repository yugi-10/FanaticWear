import React, { useContext } from 'react';
import { CartContext } from '../../context/CartContext';
import './ProductCard.css';

const FALLBACK_IMG = "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='400' height='533'%3E%3Crect width='100%25' height='100%25' fill='%23141414'/%3E%3Ctext x='50%25' y='50%25' font-family='sans-serif' font-size='14' fill='%23444' text-anchor='middle' dy='.3em'%3EJERSEY%3C/text%3E%3C/svg%3E";

const ProductCard = ({ product, style, onViewDetails }) => {
  const { addToCart } = useContext(CartContext);

  return (
    <div className="product-card" style={style}>
      <div className="product-image">
        <img
          src={product.image}
          alt={product.name}
          loading="lazy"
          onError={(e) => { e.target.src = FALLBACK_IMG; }}
        />
        <div className="product-image-overlay" />
        <span className="product-badge">{product.sleeve}</span>
        <button className="product-quick-view" onClick={() => onViewDetails(product)}>
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"/>
            <circle cx="12" cy="12" r="3"/>
          </svg>
          View Details
        </button>
      </div>
      <div className="product-details">
        <div className="product-meta">
          <span className="product-brand">{product.brand}</span>
          <span className="product-sleeve-tag">{product.sleeve}</span>
        </div>
        <h3 className="product-title">{product.name}</h3>
        <div className="product-footer">
          <span className="product-price">₹{product.price.toFixed(2)}</span>
          <button className="add-to-cart-btn" onClick={() => addToCart(product)}>
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
              <path d="M6 2L3 6v14a2 2 0 002 2h14a2 2 0 002-2V6l-3-4z"/>
              <line x1="3" y1="6" x2="21" y2="6"/>
              <path d="M16 10a4 4 0 01-8 0"/>
            </svg>
            Add
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
