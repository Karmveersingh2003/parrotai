import React, { useEffect, useRef, useState } from 'react';
import './About.css';
import Hero from "./Hero"
import AboutUsPage from '../NewAboutus/About';
import img1 from './img/1.png'
import img2 from './img/2.png'
import img3 from './img/3.png'
import img4 from './img/4.png'
import img5 from './img/5.png'
import img6 from './img/1.png'
// ===================================================================================
// UTILITY HOOK: For scroll-triggered animations (Intersection Observer)
// ===================================================================================
const useScrollAnimation = (options) => {
    const elementRef = useRef(null);
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        const observer = new IntersectionObserver(([entry]) => {
            if (entry.isIntersecting) {
                setIsVisible(true);
                observer.unobserve(entry.target);
            }
        }, options);

        const currentElement = elementRef.current;
        if (currentElement) {
            observer.observe(currentElement);
        }

        return () => {
            if (currentElement) {
                observer.unobserve(currentElement);
            }
        };
    }, [elementRef, options]);

    return [elementRef, isVisible];
};


// ===================================================================================
// SECTION 1: "Foundations of Trust" Section (Previously Security)
// ===================================================================================

const TrustFeatureCard = ({ icon, title, description, delay }) => {
    const [cardRef, isVisible] = useScrollAnimation({ threshold: 0.1 });
    return (
        <div 
            ref={cardRef}
            className={`trust-feature-card ${isVisible ? 'is-visible' : ''}`}
            style={{ transitionDelay: `${delay * 100}ms` }}
        >
            <div className="trust-card-shine"></div>
            <div className="trust-icon-wrapper">{icon}</div>
            <h3 className="trust-card-title">{title}</h3>
            <p className="trust-card-description">{description}</p>
        </div>
    );
};

const TrustSection = () => {
    const [headerRef, isHeaderVisible] = useScrollAnimation({ threshold: 0.5 });
    const trustData = [
        { icon: <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"></path><circle cx="12" cy="12" r="4"></circle></svg>, title: "Real-Time Threat Detection", description: "Our AI systems continuously monitor and neutralize threats before they can impact your operations." },
        { icon: <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="3" y="11" width="18" height="11" rx="2" ry="2"></rect><path d="M7 11V7a5 5 0 0 1 10 0v4"></path></svg>, title: "Advanced Data Encryption", description: "We utilize end-to-end, military-grade encryption to ensure your sensitive data remains confidential." },
        { icon: <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10z"></path><path d="M12 6v6l4 2"></path></svg>, title: "24/7 Proactive Monitoring", description: "Our dedicated security operations center (SOC) works around the clock to protect your digital assets." },
        { icon: <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M17.5 19H9a7 7 0 1 1 6.71-9h1.79a4.5 4.5 0 1 1 0 9Z"></path></svg>, title: "Secure Cloud Infrastructure", description: "Benefit from our hardened cloud environments, designed for maximum security, scalability, and uptime." },
        { icon: <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"></polygon></svg>, title: "Rapid Incident Response", description: "In the event of a breach, our expert team is deployed instantly to mitigate damage and restore systems." },
        { icon: <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m12 15 2 5-7-7-5 2 5-7-5-2 7 5 2-5 7 7-2 5Z"></path></svg>, title: "Compliance & Governance", description: "We help you navigate complex regulatory landscapes and maintain full compliance with industry standards." },
    ];

    return (
      
        
        <section className="trust-section">
            <div className="trust-container">
                <div ref={headerRef} className={`trust-header ${isHeaderVisible ? 'is-visible' : ''}`}>
                    <p className="trust-subtitle">Our Commitment to Excellence</p>
                    <h2 className="trust-title">The Foundations of Trust</h2>
                    <p className="trust-description">We build digital fortresses with cutting-edge technology and unwavering dedication, ensuring your peace of mind is our top priority.</p>
                </div>
                <div className="trust-features-grid">
                    {trustData.map((feature, index) => (
                        <TrustFeatureCard key={index} {...feature} delay={index} />
                    ))}
                </div>
            </div>
        </section>
    );
};

// ===================================================================================
// SECTION 2: "Symphony of Flavors" Section (Previously Flavors)
// ===================================================================================

const FlavorCard = ({ title, description, imageSrc }) => {
    return (
        <div className="flavor-card">
            <div className="flavor-image-wrapper">
                <img src={imageSrc} alt={title} className="flavor-image" />
            </div>
            <div className="flavor-text-content">
                <h3 className="flavor-card-title">{title}</h3>
                <p className="flavor-card-description">{description}</p>
                <a href="#menu" className="flavor-card-link">View Dish <span>&rarr;</span></a>
            </div>
        </div>
    );
};

const FlavorsSection = () => {
    const [containerRef, isVisible] = useScrollAnimation({ threshold: 0.1 });
   const flavorData = [
  { title: 'Cloud Computing Solutions', description: 'Scalable and flexible cloud infrastructure to power your business.', imageSrc: img1 },
  { title: 'AI-Powered Analytics', description: 'Harness the power of AI to gain actionable insights from your data.', imageSrc: img2 },
  { title: 'Cybersecurity Solutions', description: 'Protect your organization with next-gen security protocols and encryption.', imageSrc: img3 },
  { title: 'Blockchain Development', description: 'Decentralized ledger technology to revolutionize digital transactions.', imageSrc: img4 },
  { title: 'IoT Solutions', description: 'Integrating connected devices for smarter homes and workplaces.', imageSrc: img5 },
  { title: 'Big Data Management', description: 'Efficiently store, process, and analyze massive data sets with cutting-edge tools.', imageSrc: img6  }
];


    return (
        <section className="flavors-section">
            <div ref={containerRef} className={`flavors-container ${isVisible ? 'is-visible' : ''}`}>
                <div className="flavors-sticky-header">
                   <p className="flavors-subtitle">Innovation for the Future</p>
<h2 className="flavors-title">A Symphony of Technology</h2>
<p className="flavors-description">
Each solution is crafted with precision, powered by innovation, and driven by a passion for excellence in technology.
</p>
   </div>
                <div className="flavors-scrolling-panel">
                    <div className="flavors-card-track">
                        {flavorData.map((flavor, index) => <FlavorCard key={index} {...flavor} />)}
                        {/* Duplicate for infinite scroll effect */}
                        {flavorData.map((flavor, index) => <FlavorCard key={`dup-${index}`} {...flavor} />)}
                    </div>
                </div>
            </div>
        </section>
    );
};


// ===================================================================================
// SECTION 3: "Our Heritage, Our Passion" Section (Previously Story)
// ===================================================================================

const HeritageSection = () => {
    const restaurantImageUrl = 'https://images.pexels.com/photos/262047/pexels-photo-262047.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1';
    const chefImageUrl = 'https://img.freepik.com/free-photo/person-playing-3d-video-games-device_23-2151005751.jpg?semt=ais_hybrid&w=740&q=80';
    const [containerRef, isVisible] = useScrollAnimation({ threshold: 0.3 });
    const parallaxRef = useRef(null);

    useEffect(() => {
        const handleMouseMove = (e) => {
            if (!parallaxRef.current) return;
            const { clientX, clientY } = e;
            const x = (clientX / window.innerWidth - 0.5) * -40; // Intensity
            const y = (clientY / window.innerHeight - 0.5) * -40;
            parallaxRef.current.style.transform = `translate(${x}px, ${y}px)`;
        };
        window.addEventListener('mousemove', handleMouseMove);
        return () => window.removeEventListener('mousemove', handleMouseMove);
    }, []);

    return (
        <section className="heritage-section">
            <div ref={containerRef} className={`heritage-container ${isVisible ? 'is-visible' : ''}`}>
               <div className="heritage-text-content">
  <p className="heritage-subtitle">Our Legacy</p>
  <h2 className="heritage-title">Our Innovation, Our Passion</h2>
  <p className="heritage-description">
    <span className="drop-cap">S</span>ince 2025, our team has been dedicated to advancing technology and transforming ideas into reality. 
    What started as a small software lab has evolved into a trusted leader in digital innovation, built on a foundation of creativity, 
    collaboration, and a relentless drive for excellence. Each solution we deliver is a reflection of our history and a step toward a smarter, more connected future.
  </p>
  <a href="" className="heritage-button">
    Discover Our Journey
  </a>
</div>

                <div className="heritage-image-collage">
                    <div className="heritage-image-parallax-wrapper" ref={parallaxRef}>
                        <img src={restaurantImageUrl} alt="Elegant restaurant interior" className="heritage-main-image" />
                        <img src={chefImageUrl} alt="Chef preparing a dish" className="heritage-secondary-image" />
                        <div className="heritage-badge">
                            <div className="heritage-badge-text">Since</div>
                            <div className="heritage-badge-year">2025</div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};


// ===================================================================================
// MAIN APP COMPONENT
// Assembles all the creative, light-mode sections.
// ===================================================================================
const CreativeSections = () => {
  return (
    <>
    <Hero/>
    <div className="creative-sections-wrapper">
      <TrustSection />
      <FlavorsSection />
      <HeritageSection />
    </div>
    <AboutUsPage />
    </>
  );
};

export default CreativeSections;