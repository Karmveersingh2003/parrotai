import React from 'react';
import './Homet.css'; // Your new CSS file

const HeroSection = () => {
  return (
    <header className="hp-hero-section">
      <div className="hp-hero-background-image"></div>
      <div className="hp-hero-content">
        <h1 className="hp-main-title">
          <span className="line"><span>Crafting Digital</span></span>
          <span className="line"><span>Excellence.</span></span>
        </h1>
        <p className="hp-hero-subtitle">
          An award-winning creative agency dedicated to building timeless brands and unforgettable digital experiences.
        </p>
      </div>
      <div className="hp-scroll-indicator">Scroll to explore</div>
    </header>
  );
};

export default HeroSection;