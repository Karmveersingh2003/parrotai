import React, { useState, useEffect, useRef } from 'react';
import './Hero.css';
import slider1 from './1.png';
import slide2 from './2.png';
import slide3 from './3.png';
const slides = [
 {
  image: slider1,
  subtitle: 'INNOVATIVE & RELIABLE',
  title: 'Empowering the Future with Technology',
},
{
  image: slide2,
  subtitle: 'CUTTING-EDGE SOLUTIONS',
  title: 'Transforming Ideas into Digital Reality',
},
{
  image: slide3,
  subtitle: 'SMART & EFFICIENT',
  title: 'Where Innovation Drives Progress',
}
];


const HeroSlider = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isHovering, setIsHovering] = useState(false);
  const timeoutRef = useRef(null);

  const resetTimeout = () => {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }
  };

  useEffect(() => {
    resetTimeout();
    if (!isHovering) {
      timeoutRef.current = setTimeout(
        () =>
          setCurrentIndex((prevIndex) =>
            prevIndex === slides.length - 1 ? 0 : prevIndex + 1
          ),
        5000 // Change slide every 5 seconds
      );
    }

    return () => {
      resetTimeout();
    };
  }, [currentIndex, isHovering]);

  const goToSlide = (slideIndex) => {
    setCurrentIndex(slideIndex);
  };

  const goToPrevious = () => {
    const isFirstSlide = currentIndex === 0;
    const newIndex = isFirstSlide ? slides.length - 1 : currentIndex - 1;
    setCurrentIndex(newIndex);
  };

  const goToNext = () => {
    const isLastSlide = currentIndex === slides.length - 1;
    const newIndex = isLastSlide ? 0 : currentIndex + 1;
    setCurrentIndex(newIndex);
  };

  return (
    <div
      id="herosection-home-slider-container"
      onMouseEnter={() => setIsHovering(true)}
      onMouseLeave={() => setIsHovering(false)}
    >
      <div className="herosection-home-arrow herosection-home-left-arrow" onClick={goToPrevious}>
        <span>&#10094;</span>
      </div>
      <div className="herosection-home-arrow herosection-home-right-arrow" onClick={goToNext}>
        <span>&#10095;</span>
      </div>
      
      <div className="herosection-home-slides-wrapper" style={{ transform: `translateX(${-currentIndex * 100}%)` }}>
        {slides.map((slide, index) => (
          <div
            key={index}
            className="herosection-home-slide"
          >
             <div className="herosection-home-slide-bg" style={{ backgroundImage: `url(${slide.image})` }}></div>
          </div>
        ))}
      </div>

      <div className="herosection-home-overlay"></div>

      {/* This key forces the text container to re-render and re-animate on slide change */}
      <div key={currentIndex} className="herosection-home-text-container">
          <p className="herosection-home-subtitle">{slides[currentIndex].subtitle}</p>
          <h1 className="herosection-home-title">{slides[currentIndex].title}</h1>
      </div>

      <div className="herosection-home-dots-container">
        {slides.map((_, slideIndex) => (
          <div
            key={slideIndex}
            className={`herosection-home-dot ${currentIndex === slideIndex ? 'herosection-home-active' : ''}`}
            onClick={() => goToSlide(slideIndex)}
          ></div>
        ))}
      </div>
    </div>
  );
};

export default HeroSlider;