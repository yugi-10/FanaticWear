import React from 'react';
import { Link } from 'react-router-dom';
import stadiumBg from '../../assets/images/hero-bg.jpg';
import './HeroSection.css';

const HeroSection = () => {
  return (
    <div className="hero-container">

      <div className="hero-glow" />
      <div className="hero-noise" />
      <div className="hero-stripe" />

      {/* Right: full bleed bg image */}
      <div
        className="hero-right"
        style={{ backgroundImage: `url(${stadiumBg})` }}
      />

      {/* Corner tag */}
      <div className="hero-corner-tag">
        <span>Collection</span>
        <strong>2024/25</strong>
      </div>

      {/* Left: editorial content */}
      <div className="hero-left">
        <div className="hero-badge">
          <div className="hero-badge-dot" />
          <div className="hero-badge-line" />
          <span>Official Season Collection</span>
        </div>

        <h1 className="hero-title">
          <span className="outline">WEAR</span>
          YOUR
          <span className="accent">PASSION</span>
        </h1>

        <p className="hero-subtitle">Official Jerseys &amp; Sports Merchandise</p>

        <div className="hero-divider">
          <div className="hero-divider-line" />
          <span className="hero-divider-text">Since 2020 · Ambur, Tamil Nadu</span>
        </div>

        <p className="hero-description">
          Premium official jerseys from the world's greatest clubs and national
          teams. Half sleeve and full sleeve — for fans who live and breathe the sport.
        </p>

        <div className="hero-stats">
          <div className="stat-item">
            <span className="stat-number">12+</span>
            <span className="stat-label">Jerseys</span>
          </div>
          <div className="stat-item">
            <span className="stat-number">12K</span>
            <span className="stat-label">Members</span>
          </div>
          <div className="stat-item">
            <span className="stat-number">100%</span>
            <span className="stat-label">Authentic</span>
          </div>
        </div>

        <div className="hero-buttons">
          <Link to="/products" className="btn-primary">
            <span>Shop Jerseys</span>
          </Link>
          <Link to="/register" className="btn-secondary">Join the Club</Link>
        </div>
      </div>

      <div className="hero-scroll-hint">
        <span>Scroll</span>
        <div className="scroll-line" />
      </div>

    </div>
  );
};

export default HeroSection;
