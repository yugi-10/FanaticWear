import React, { useState } from 'react';
import ProductCard from '../../components/ProductCard';
import ProductModal from '../../components/ProductModal';
import { products } from '../../data/products';
import Navbar from '../../components/Navbar';
import './ProductsPage.css';

const ProductsPage = () => {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [searchQuery, setSearchQuery] = useState('');

  const categories = [
    { id: 'all', name: 'All Jerseys' },
    { id: 'short-sleeve', name: 'Half Sleeve' },
    { id: 'long-sleeve', name: 'Full Sleeve' },
  ];

  const filteredProducts = products
    .filter(p => selectedCategory === 'all' || p.category === selectedCategory)
    .filter(p => {
      const q = searchQuery.toLowerCase().trim();
      if (!q) return true;
      return (
        p.name?.toLowerCase().includes(q) ||
        p.brand?.toLowerCase().includes(q) ||
        p.category?.toLowerCase().includes(q) ||
        p.sleeve?.toLowerCase().includes(q)
      );
    });

  return (
    <>
      <Navbar />
      <div className="products-page">
        <div className="products-header">
          <div className="products-header-watermark">JERSEYS</div>
          <div className="products-header-label">Official Collection 2024/25</div>
          <h1 className="page-title">JERSEY<br /><span>STORE</span></h1>
          <p className="products-count">{filteredProducts.length} Jerseys Available</p>
        </div>

        <div className="products-search-bar">
          <div className="search-input-wrapper">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <circle cx="11" cy="11" r="8"/><line x1="21" y1="21" x2="16.65" y2="16.65"/>
            </svg>
            <input
              className="search-input"
              type="text"
              placeholder="Search jerseys, clubs, brands..."
              value={searchQuery}
              onChange={e => setSearchQuery(e.target.value)}
            />
            {searchQuery && (
              <button className="search-clear-btn" onClick={() => setSearchQuery('')}>
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                  <line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/>
                </svg>
              </button>
            )}
          </div>
        </div>

        <div className="category-filter">
          {categories.map(cat => (
            <button
              key={cat.id}
              className={`category-btn ${selectedCategory === cat.id ? 'active' : ''}`}
              onClick={() => setSelectedCategory(cat.id)}
            >
              {cat.name}
            </button>
          ))}
        </div>

        {filteredProducts.length > 0 ? (
          <div className="product-grid">
            {filteredProducts.map((product, i) => (
              <ProductCard
                key={product.id}
                product={product}
                style={{ animationDelay: `${i * 0.06}s` }}
                onViewDetails={setSelectedProduct}
              />
            ))}
          </div>
        ) : (
          <div className="no-products">
            <p>{searchQuery ? `No jerseys found for "${searchQuery}"` : 'No jerseys in this category'}</p>
          </div>
        )}
      </div>

      {selectedProduct && (
        <ProductModal
          product={selectedProduct}
          onClose={() => setSelectedProduct(null)}
        />
      )}
    </>
  );
};

export default ProductsPage;
