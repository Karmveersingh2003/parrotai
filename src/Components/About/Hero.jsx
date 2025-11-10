import React from 'react';
import { useState, useRef, useEffect } from 'react';
import './Hero.css';

// ===================================================================================
// THE ELEGANT & CLASSY HERO SECTION COMPONENT
// ===================================================================================
const ElegantHero = () => {
  const [isLoaded, setIsLoaded] = useState(false);
  const parallaxRef = useRef(null);

  // Trigger load animation once the component mounts
  useEffect(() => {
    const timer = setTimeout(() => setIsLoaded(true), 100);
    return () => clearTimeout(timer);
  }, []);

  // Mouse Move Logic for the background parallax shapes
  useEffect(() => {
    const handleMouseMove = (e) => {
      // Only run on devices with a mouse for performance
      if (!window.matchMedia("(pointer: fine)").matches) return;

      const { clientX, clientY } = e;
      const x = (clientX / window.innerWidth - 0.5) * -40; // Reduced intensity
      const y = (clientY / window.innerHeight - 0.5) * -40; // Reduced intensity
      
      if (parallaxRef.current) {
        parallaxRef.current.style.transform = `translate(${x}px, ${y}px)`;
      }
    };
    
    window.addEventListener('mousemove', handleMouseMove);
    
    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  return (
    <section className={`elegant-hero-section ${isLoaded ? 'loaded' : ''}`}>
      {/* Background Elements */}
      <div className="elegant-hero-background-shapes" ref={parallaxRef}>
        <div className="elegant-hero-shape shape-1"></div>
        <div className="elegant-hero-shape shape-2"></div>
      </div>
      <div className="elegant-hero-noise-overlay"></div>

      {/* Main Content */}
      <div className="elegant-hero-content">
        <h1 className="elegant-hero-headline">
          <span className="elegant-hero-headline-static">We</span>
          <div className="elegant-hero-animation-wrapper">
            <div className="elegant-hero-animation-track">
              <span>Innovate.</span>
              <span>Design.</span>
              <span>Create.</span>
              <span>Launch.</span>
              <span>Innovate.</span> {/* Duplicate first item for a seamless loop */}
            </div>
          </div>
        </h1>
        <p className="elegant-hero-subheadline">
          An award-winning creative agency dedicated to building timeless brands and unforgettable digital experiences.
        </p>
        <div className="elegant-hero-cta-container">
          <a href="#contact" className="elegant-hero-cta-button">
            <span className="button-text">Start a Project</span>
            <span className="button-icon">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <line x1="5" y1="12" x2="19" y2="12"></line>
                <polyline points="12 5 19 12 12 19"></polyline>
              </svg>
            </span>
          </a>
        </div>
      </div>
    </section>
  );
};

export default ElegantHero;