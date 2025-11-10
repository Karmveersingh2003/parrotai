import React from 'react';
// Note: useState, useRef, and useEffect are no longer needed for this component
import './Footer.css';
import logo from './logo.png'
// ===================================================================================
// THE "MASTERPIECE" FULL-WIDTH FOOTER COMPONENT (FINAL & FIXED)
// ===================================================================================
const Footer = () => {
    // The 3D tilt effect logic has been completely removed.
    // The component is now purely presentational.

    return (
        <footer className="masterpiece-footer">
            <div className="mp-footer-container">
                <div className="mp-footer-card">
                    {/* --- Top Section with CTA --- */}
                    <div className="mp-footer-top">
                        <h2>Have a project in mind?</h2>
                        <a href="/contact" className="mp-footer-cta">Let's Talk</a>
                    </div>

                    {/* --- Main Content Grid --- */}
                    <div className="mp-footer-main">
                        <div className="mp-footer-column brand">
                            <a href="#home" className="mp-footer-logo">
                               <img src={logo}  alt="Company logo" />
                               
                            </a>
                            <p>Crafting digital excellence, one pixel at a time.</p>
                        </div>
                        <div className="mp-footer-column links">
                            <h3>Explore</h3>
                            <ul>
                                <li><a href="/">Home</a></li>
                                <li><a href="/about">About Us</a></li>
                                <li><a href="/services">Services</a></li>
                                <li><a href="/contact">Contact Us</a></li>
                            </ul>
                        </div>
                        <div className="mp-footer-column contact">
                            <h3>Get in Touch</h3>
                            <p>
                                123 Elegance Avenue,<br/>
                                Design City, DC 12345
                            </p>
                            <a href="mailto:hello@parrot.studio">hello@parrot.studio</a>
                        </div>
                        <div className="mp-footer-column social">
                            <h3>Connect</h3>
                            <div className="mp-social-icons">
                                <a href="#linkedin" aria-label="LinkedIn"><i>Li</i></a>
                                <a href="#twitter" aria-label="Twitter"><i>Tw</i></a>
                                <a href="#instagram" aria-label="Instagram"><i>In</i></a>
                                <a href="#dribbble" aria-label="Dribbble"><i>Dr</i></a>
                            </div>
                        </div>
                    </div>

                    {/* --- Bottom Bar --- */}
                    <div className="mp-footer-bottom">
                        <p>&copy; {new Date().getFullYear()} Parrot Studio. All Rights Reserved.</p>
                        <div className="mp-bottom-links">
                            <a href="/privacy">Privacy Policy</a>
                            <a href="/terms">Terms of Service</a>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;