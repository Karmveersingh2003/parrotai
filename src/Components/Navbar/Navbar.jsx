import React, { useState, useEffect, useRef } from 'react';
import './Navbar.css';
import Logo from './logo.png'
// ===================================================================================
// THE "MASTERPIECE" NAVBAR COMPONENT (FINAL & FIXED)
// ===================================================================================
const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const navLinksRef = useRef(null);

  // Effect to handle navbar background change on scroll
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Toggle the main hamburger menu
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
    // If we are closing the main menu, ensure the dropdown also closes
    if (isMenuOpen) {
      setIsDropdownOpen(false);
    }
  };
  
  // Handles the CLICK on "Services" in mobile view to toggle the dropdown
  const handleDropdownToggle = (e) => {
    if (window.innerWidth <= 992) {
      e.preventDefault(); // Prevents link from navigating on click
      setIsDropdownOpen(!isDropdownOpen);
    }
  };
  // Close dropdown when clicking outside (optional polish)
useEffect(() => {
  const handleClickOutside = (e) => {
    if (isDropdownOpen && !e.target.closest('.mp-dropdown')) {
      setIsDropdownOpen(false);
    }
  };
  document.addEventListener('click', handleClickOutside);
  return () => document.removeEventListener('click', handleClickOutside);
}, [isDropdownOpen]);


  return (
    <nav id="mp-navbar" className={isScrolled ? 'scrolled' : ''}>
      <div className="mp-navbar-container">
        {/* --- LOGO --- */}
        <a href="/" className="mp-navbar-logo">
         <img src={Logo} alt="logo"  />
          {/* <span>Parrot</span> */}
        </a>

        {/* --- HAMBURGER MENU ICON --- */}
        <div className={`mp-hamburger-menu ${isMenuOpen ? 'open' : ''}`} onClick={toggleMenu}>
          <div></div>
          <div></div>
          <div></div>
        </div>

        {/* --- NAVIGATION LINKS --- */}
        <ul ref={navLinksRef} className={`mp-nav-links ${isMenuOpen ? 'open' : ''}`}>
          <li><a href="/">Home</a></li>
          <li><a href="/about">About</a></li>
         
          {/* --- Dropdown Menu --- */}
          <li className={`mp-dropdown ${isDropdownOpen ? 'dropdown-open' : ''}`}>
            <a href="/services" onClick={handleDropdownToggle}>
              Services
              <svg className="mp-dropdown-chevron" xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
                <path fillRule="evenodd" d="M1.646 4.646a.5.5 0 0 1 .708 0L8 10.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708z"/>
              </svg>
            </a>
            <div className="mp-dropdown-content">
              <a href="#security" style={{'--delay': 1}}>Brand Identity</a>
              <a href="#maritime" style={{'--delay': 2}}>Web Development</a>
              <a href="#risk" style={{'--delay': 3}}>Digital Marketing</a>
              <a href="#management" style={{'--delay': 4}}>E-commerce</a>
            </div>
          </li>
          
          {/* <li><a href="/portfolio">Portfolio</a></li> */}
          
          {/* --- CTA Link --- */}
          <li className="mp-nav-cta"><a href="/contact">Contact Us</a></li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;