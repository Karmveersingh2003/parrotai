import React from 'react';
import { useState, useRef, useEffect } from 'react';

import './Services.css';

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
// THE BLOCKBUSTER "SERVICES" PAGE COMPONENT
// ===================================================================================
const ServicesPage = () => {
     const [partnersRef, isPartnersVisible] = useScrollAnimation({ threshold: 0.2 });
  const logos = ["FORGE", "SUMMIT", "ORION", "NEXUS", "ZENITH", "APEX", "ECHO"];
  const [techRef, isTechVisible] = useScrollAnimation({ threshold: 0.2 });
  const techData = ["Figma", "React", "Next.js", "Node.js", "GraphQL", "TypeScript", "Vercel", "AWS", "Shopify", "Webflow"];
  // --- STATE AND DATA ---
  const [activeServiceIndex, setActiveServiceIndex] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);
  const navIndicatorRef = useRef(null);
  const navItemsRef = useRef([]);

  const servicesData = [
    { title: "Brand Identity", description: "We forge unforgettable brand identities, from foundational strategy and logo design to comprehensive brand guidelines that ensure consistency across all touchpoints.", image: "https://images.pexels.com/photos/323705/pexels-photo-323705.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" },
    { title: "Web Design & Development", description: "Our team crafts bespoke, high-performance websites that are not only visually stunning but also intuitive, responsive, and engineered for growth.", image: "https://images.pexels.com/photos/347141/pexels-photo-347141.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" },
    { title: "Digital Marketing", description: "We elevate your online presence through data-driven SEO, compelling content marketing, and targeted campaigns that engage your audience and convert leads.", image: "https://images.pexels.com/photos/6476587/pexels-photo-6476587.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" },
    { title: "E-commerce Solutions", description: "From elegant storefronts to complex marketplace integrations, we build powerful e-commerce platforms that drive sales and deliver seamless user experiences.", image: "https://images.pexels.com/photos/5632398/pexels-photo-5632398.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" }
  ];

  const processData = [
    { number: "01", title: "Discover & Define", description: "We begin with a deep dive into your world, understanding your vision, audience, and objectives to establish a clear roadmap for success." },
    { number: "02", title: "Design & Develop", description: "Our creatives and engineers collaborate to bring the vision to life, focusing on meticulous design, clean code, and intuitive user experience." },
    { number: "03", title: "Deliver & Grow", description: "We launch your project and continue to partner with you, analyzing performance and identifying new opportunities for growth and refinement." }
  ];
  
   const processDataStepper = [
    { number: "01", title: "Discover & Define", description: "We begin with a deep dive into your world, understanding your vision, audience, and objectives to establish a clear roadmap for success." },
    { number: "02", title: "Design & Develop", description: "Our creatives and engineers collaborate to bring the vision to life, focusing on meticulous design, clean code, and intuitive user experience." },
    { number: "03", title: "Deliver & Grow", description: "We launch your project and continue to partner with you, analyzing performance and identifying new opportunities for growth and refinement." }
  ];

  // --- ANIMATION HOOKS ---

  const [showcaseRef, isShowcaseVisible] = useScrollAnimation({ threshold: 0.1 });
  const [processRef, isProcessVisible] = useScrollAnimation({ threshold: 0.2 });
  const [ctaRef, isCtaVisible] = useScrollAnimation({ threshold: 0.4 });
  
  // --- EFFECT FOR NAVIGATION INDICATOR ---
  useEffect(() => {
    const activeNavItem = navItemsRef.current[activeServiceIndex];
    if (activeNavItem && navIndicatorRef.current) {
      navIndicatorRef.current.style.width = `${activeNavItem.offsetWidth}px`;
      navIndicatorRef.current.style.left = `${activeNavItem.offsetLeft}px`;
    }
  }, [activeServiceIndex]);

  // --- HANDLER FOR SERVICE CHANGE ---
  const handleServiceClick = (index) => {
    if (index === activeServiceIndex || isAnimating) return;
    
    setIsAnimating(true);
    setActiveServiceIndex(index);
    
    // Allow time for the CSS animations to complete
    setTimeout(() => {
      setIsAnimating(false);
    }, 800); // Should match the CSS transition duration
  };
  const [testimonialsRef, isTestimonialsVisible] = useScrollAnimation({ threshold: 0.3 });
  const [activeTestimonial, setActiveTestimonial] = useState(0);
  const testimonialsData = [
    { quote: "Working with them was a transformative experience. Their strategic vision and technical execution are unparalleled.", author: "Eleanor Vance, CEO of Orion" },
    { quote: "They didn't just build a website; they built a digital flagship for our brand. The results speak for themselves.", author: "James Knight, Founder of Zenith" },
    { quote: "The attention to detail is just incredible. Every interaction, every pixel feels intentional and perfectly crafted.", author: "Isabella Rossi, Apex Corp" }
  ];
const [processStepperRef, isProcessStepperVisible] = useScrollAnimation({ threshold: 0.2 });
  useEffect(() => {
    if (isTestimonialsVisible) {
      const interval = setInterval(() => {
        setActiveTestimonial(prev => (prev + 1) % testimonialsData.length);
      }, 2000); // Change slide every 5 seconds
      return () => clearInterval(interval);
    }
  }, [isTestimonialsVisible, testimonialsData.length]);
  return (
    <div className="services-page">
      {/* --- Section 1: Introduction --- */}
       <section className="v2-hero-section">
      <div className="v2-video-background">
        <video autoPlay loop muted playsInline src="https://videos.pexels.com/video-files/3209828/3209828-hd_1920_1080_25fps.mp4" />
        <div className="v2-video-overlay"></div>
      </div>
      <div className="v2-hero-content">
        <p className="v2-subtitle">Our Expertise</p>
        <h1 className="v2-main-title">
          {"Crafting Digital Excellence.".split("").map((char, index) => (
            <span key={index} className="v2-char" style={{transitionDelay: `${index * 30}ms`}}>{char === " " ? "\u00A0" : char}</span>
          ))}
        </h1>
      </div>
    </section>

      {/* --- Section 2: Service Showcase --- */}
      <section ref={showcaseRef} className={`service-showcase-section ${isShowcaseVisible ? 'is-visible' : ''}`}>
        <div className="service-showcase-background">
          {servicesData.map((service, index) => (
            <div 
              key={index} 
              className={`service-bg-image ${index === activeServiceIndex ? 'active' : ''}`}
              style={{ backgroundImage: `url(${service.image})` }}
            ></div>
          ))}
        </div>
        <div className="service-showcase-content">
          <nav className="service-navigation">
            <div className="service-nav-indicator" ref={navIndicatorRef}></div>
            {servicesData.map((service, index) => (
              <button 
                key={index}
                ref={el => navItemsRef.current[index] = el}
                className={`service-nav-item ${index === activeServiceIndex ? 'active' : ''}`}
                onClick={() => handleServiceClick(index)}
              >
                {service.title}
              </button>
            ))}
          </nav>
          <div className="service-display">
            <div className={`service-detail-pane ${isAnimating ? 'animating' : ''}`}>
              <h2 className="service-detail-title">
                {servicesData[activeServiceIndex].title}
              </h2>
              <p className="service-detail-description">
                {servicesData[activeServiceIndex].description}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* --- Section 3: Our Process --- */}
      <section ref={processRef} className={`process-section ${isProcessVisible ? 'is-visible' : ''}`}>
        <div className="services-container">
          <p className="services-subtitle">Our Methodology</p>
          <h2 className="services-section-title">A Blueprint for Brilliance</h2>
          <div className="process-grid">
            {processData.map((step, index) => (
              <div key={index} className="process-step-card" style={{ transitionDelay: `${index * 200}ms` }}>
                <span className="step-number-bg">{step.number}</span>
                <h3 className="process-step-title">{step.title}</h3>
                <p>{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

   {/* --- Section 4: process grill--- */}
<section ref={processRef} className={`v2-process-section ${isProcessVisible ? 'is-visible' : ''}`}>
      <div className="v2-container">
        <p className="v2-subtitle">Our Methodology</p>
        <h2 className="v2-section-title">A Blueprint for Brilliance</h2>
        <div className="v2-process-grid">
          {processData.map((step, index) => (
            <div key={index} className="v2-process-card" style={{ transitionDelay: `${index * 200}ms` }}>
              <span className="v2-process-number">{step.number}</span>
              <h3>{step.title}</h3>
              <p>{step.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>

  <section ref={partnersRef} className={`v2-partners-section ${isPartnersVisible ? 'is-visible' : ''}`}>
      <div className="v2-container">
        <h2 className="v2-section-title v2-partners-title">Trusted By Visionaries</h2>
        <div className="v2-marquee">
          <div className="v2-marquee-track">
            {[...logos, ...logos].map((logo, index) => (
              <div key={index} className="v2-marquee-logo">{logo}</div>
            ))}
          </div>
        </div>
      </div>
    </section>


 {/* --- Section 4: Process Section (Stepper Style) --- */}
      <section ref={processStepperRef} className={`mp-process-stepper-section ${isProcessStepperVisible ? 'is-visible' : ''}`}>
        <div className="mp-container">
          <p className="mp-subtitle">Our Approach</p>
          <h2 className="mp-section-title">A Blueprint for Brilliance (Stepper)</h2>
          <div className="mp-process-stepper">
            {processDataStepper.map((step, index) => (
              <div key={index} className="mp-process-step" style={{ transitionDelay: `${index * 200}ms` }}>
                <div className="mp-step-number-container"><div className="mp-step-number">{step.number}</div></div>
                <div className="mp-step-content">
                    <h3>{step.title}</h3>
                    <p>{step.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      

 <section ref={techRef} className={`mp-tech-section ${isTechVisible ? 'is-visible' : ''}`}>
      <div className="mp-container">
        <div className="mp-section-header">
          <p className="mp-subtitle">Our Arsenal</p>
          <h2 className="mp-section-title">Technology We Trust</h2>
        </div>
        <div className="mp-tech-grid">
          {techData.map((tech, index) => (
            <div key={index} className="mp-tech-item" style={{transitionDelay: `${index * 50}ms`}}>
              {tech}
            </div>
          ))}
        </div>
      </div>
    </section>

    <section ref={testimonialsRef} className={`mp-testimonials-section ${isTestimonialsVisible ? 'is-visible' : ''}`}>
      <div className="mp-container">
        <div className="mp-testimonials-wrapper">
          <div className="mp-testimonial-track" style={{transform: `translateX(-${activeTestimonial * 100}%)`}}>
            {testimonialsData.map((testimonial, index) => (
              <div key={index} className="mp-testimonial-item">
                <blockquote>“{testimonial.quote}”</blockquote>
                <cite>– {testimonial.author}</cite>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>


      {/* --- Section : Call to Action --- */}
      <section ref={ctaRef} className={`services-cta-section ${isCtaVisible ? 'is-visible' : ''}`}>
        <div className="services-container">
          <h2 className="services-cta-title">Ready to build the future?</h2>
          <p className="services-cta-description">Let's discuss how our expertise can bring your vision to life.</p>
          <a href="#contact" className="services-cta-button">
            Start a Conversation
          </a>
        </div>
      </section>
    </div>
  );
};

export default ServicesPage;