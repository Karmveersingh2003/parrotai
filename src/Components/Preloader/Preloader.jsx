import React, { useState, useEffect } from 'react';
import './Preloader.css';

// ===================================================================================
// THE "MASTERPIECE" PRELOADER COMPONENT
// ===================================================================================
const Preloader = ({ onLoaded }) => {
  const [isReady, setIsReady] = useState(false);
  const [isExiting, setIsExiting] = useState(false);

  useEffect(() => {
    // Simulate page loading
    const loadingTimer = setTimeout(() => {
      setIsReady(true);
    }, 2500); // The logo drawing animation takes 2.5 seconds

    // Trigger the exit animation after the main animations are complete
    const exitTimer = setTimeout(() => {
        setIsExiting(true);
        // Notify the parent component that the preloader is finished
        if(onLoaded) {
            setTimeout(onLoaded, 800); // 800ms for the slide-up exit animation
        }
    }, 3500); // Total time before the exit starts

    return () => {
      clearTimeout(loadingTimer);
      clearTimeout(exitTimer);
    };
  }, [onLoaded]);

  return (
    <div className={`preloader-container ${isExiting ? 'exiting' : ''}`}>
      <div className={`preloader-content ${isReady ? 'ready' : ''}`}>
        {/* The Animated SVG Parrot Logo */}
        <svg className="preloader-logo" viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
          {/* This is a single-line art representation of a parrot */}
          <path 
            d="M 50,5 C 25,5 10,25 10,50 C 10,75 25,95 50,95 C 60,95 70,90 75,80 C 85,65 80,40 65,30 C 50,20 40,35 50,50 C 60,65 75,60 85,50 C 95,40 90,20 75,10 C 65,5 55,5 50,5 M 48,42 a 3,3 0 1,0 6,0 a 3,3 0 1,0 -6,0"
          />
        </svg>
        
        {/* The Brand Name Text */}
        <div className="preloader-text-wrapper">
          <span className="brand-name">Parrot</span>
          <span className="brand-suffix">AI</span>
        </div>
      </div>
    </div>
  );
};

export default Preloader;