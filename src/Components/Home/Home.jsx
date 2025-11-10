import React, { useEffect, useRef ,useState} from 'react';
import './Home.css';
import HeroSlider from '../Herosection/Hero';

// --- Section 1: Security Section ---

// --- Section 2: Flavors Section ---

const FlavorsSection = () => {
    // Data for the six flavor cards
    const cardData = [
      { title: 'AI-Powered Growth', description: 'Driving Revenue Growth with AI-Based Dynamic Pricing at a leading Outdoor Advertising company.', imageSrc: 'https://media.istockphoto.com/id/2200550660/photo/ai-data-analysis-business-people-use-ai-to-analyze-financial-related-data-big-data-complex.jpg?s=612x612&w=0&k=20&c=ujKhJPhsm3P2i_uIbdnG24X_j2airid7iudukSI0yRY=' },
      { title: '    Cloud Migration', description: 'Seamless Migration of M365 Infrastructure to Azure Cloud for a Retail Store.', imageSrc: 'https://t3.ftcdn.net/jpg/05/67/78/16/360_F_567781689_dw3m1kgVbUAC7EobtXAY9cBCZBwqNANv.jpg' },
      { title: 'ERP Transformation', description: 'End-to-End NetSuite ERP Implementation for a Pharma Giant based at Europe.', imageSrc: 'https://w0.peakpx.com/wallpaper/40/749/HD-wallpaper-erp.jpg' },
      { title: 'Game QA Excellence', description: 'Cross-Platform Mobile Game QA for a leading Game Studio.', imageSrc: 'https://www.ixiegaming.com/wp-content/uploads/2024/05/Blog-banner-4-1110x550.png' },
      { title: 'AI Innovation', description: 'Revolutionizing Operations with Generative AI at a Leading Health Network.', imageSrc: 'https://thumbs.dreamstime.com/b/k-ai-generated-image-artificial-intelligence-machine-learning-business-internet-technology-concept-exclusive-323031100.jpg' },
      { title: 'Intelligent Automation  ', description: 'By integrating Generative AI into core healthcare operations, the organization streamlined clinical workflows, enhanced diagnostic accuracy, and improved patient engagement.', imageSrc: 'https://img.freepik.com/free-photo/human-hand-passing-gear-robotic-hand_23-2152006116.jpg?semt=ais_hybrid&w=740&q=80' }
    ];

    return (
        <section id="home-services-section">
            <div id="home-services-container">
                <div id="home-services-header">
                    <p className="home-services-subtitle">Case Study</p>
                    <div className="home-services-decorator"></div>
                    <h2 className="home-services-title">Customer Growth & Transformation</h2>
                    <p className="home-services-description">Our Customer Growth & Transformation initiative empowered clients to accelerate digital adoption, streamline operations, and achieve measurable business impact driving sustainable growth and long-term success.</p>
                </div>
                <div id="home-services-grid">
                    {cardData.map((card, index) => (
                        <div className="home-services-card-wrapper" key={index} style={{ '--delay': index }}>
                            <div className="home-services-card">
                                <img src={card.imageSrc} alt={card.title} className="home-services-image" />
                                <div className="home-services-hover-panel">
                                    <h3 className="home-services-hover-title">{card.title}</h3>
                                    <p className="home-services-hover-description">{card.description}</p>
                                </div>
                            </div>
                            <h3 className="home-services-card-title">{card.title}</h3>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

// --- Section 3: Story Section ---

const StorySection = () => {
    // Image URLs for the component
    const restaurantImageUrl = 'https://images.pexels.com/photos/262047/pexels-photo-262047.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1';
    const chefImageUrl = 'https://media.istockphoto.com/id/1742364118/vector/website-development-build-homepage-layout-or-html-designer-seo-search-engine-optimization-or.jpg?s=612x612&w=0&k=20&c=_hC27uqAPswe88JKBQgUUjFWw4TKfS6a592CMsGYRmA=';

    return (
        <section id="ourstory-section">
            <div className="ourstory-container">
                <div className="ourstory-text-content">
                    <div className="ourstory-animated-line"><p className="ourstory-subtitle">OUR STORY</p></div>
                    <div className="ourstory-decorator"></div>
                    <h2 className="ourstory-title">
                        <span className="ourstory-animated-line"><span>Every Flavor</span></span>
                        <span className="ourstory-animated-line"><span>Tells a Story</span></span>
                    </h2>
                    <div className="ourstory-animated-line">
                        <p className="ourstory-description">Founded in 2025 and headquartered in Delhi, our self-owned Information Technology & Services company empowers businesses with innovative digital solutions. With a skilled team of 11–50 professionals, we specialize in ERP development, cloud infrastructure, AI integration, and end-to-end software services. Our expertise spans NetSuite, DevOps, data analytics, and web development driving digital transformation and long-term client success through scalable, customer centric solutions.</p>
                    </div>
                    <div className="ourstory-booking-info">
                        <p className="ourstory-booking-title">Book Through Mail</p>
                        <p className="ourstory-phone-number">Contact@parrotai.ai</p>
                    </div>
                    <a href="/about" className="ourstory-read-more-btn">READ MORE</a>
                </div>
                <div className="ourstory-image-content">
                    <div className="ourstory-image-wrapper">
                        <img src={restaurantImageUrl} alt="Elegant restaurant interior" className="ourstory-main-image" />
                        <img src={chefImageUrl} alt="Chef meticulously preparing a dish" className="ourstory-secondary-image" />
                        <div className="ourstory-deco-pattern"></div>
                    </div>
                    <div className="ourstory-badge">
                        <div className="ourstory-badge-revolving-text">
                            <svg viewBox="0 0 120 120">
                                <path id="circlePath" fill="none" d="M 60, 10 a 50,50 0 1,1 0,100 a 50,50 0 1,1 0,-100" />
                                <text><textPath href="#circlePath">SERVICES • Information Technology •</textPath></text>
                            </svg>
                        </div>
                        <div className="ourstory-badge-inner-circle">
                            <span className="ourstory-badge-since">SINCE</span>
                            <span className="ourstory-badge-year">2025</span>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

const Homesec = () => {
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
    if (currentElement) { observer.observe(currentElement); }
    return () => { if (currentElement) { observer.unobserve(currentElement); } };
  }, [elementRef, options]);

  return [elementRef, isVisible];
};

      // --- ANIMATION HOOKS for each section ---
    const [kineticRef, isKineticVisible] = useScrollAnimation({ threshold: 0.5 });
    const [securityRef, isSecurityVisible] = useScrollAnimation({ threshold: 0.1 });
    const [ctaRef, isCtaVisible] = useScrollAnimation({ threshold: 0.1 });

    // --- DATA for security section ---
    const securityFeaturesData = [
        { title: "AI Expertise", description: "Where artificial intelligence meets human expertise to transform your business operations" },
        { title: "Cloud Migration", description: "Strategic technology leadership without the full-time commitment.Get executive-level tech guidance when you need it most." },
        { title: "ERP Excellence", description: "End-to-end NetSuite implementation services tailored to your business needs. Seamless migration, scalable deployment, and future-ready solutions." },
        { title: "Reliable QA Service", description: "e offer a full suite of QA and QC services designed to ensure that your software products meet the highest standards of quality, performance, security, and user satisfaction." },
        { title: "CMS Based Webdevelopment", description: "We help businesses harness the power of open-source technologies and content management systems to build scalable, secure, and cost-effective digital solutions." },
        { title: "Back Office Processing", description: "Enhance efficiency and accuracy with our expert back-office solutions and skilled IT professionals, empowering your business to focus on innovation and growth." },
    ];

    return (
         <div className="focused-sections-wrapper">
            {/* --- Section 1: Kinetic Typography --- */}
            <section ref={kineticRef} id="kinetic-section" className={`hp-section ${isKineticVisible ? 'is-visible' : ''}`}>
                <div className="hp-container">
                    <h2 className="kinetic-text">
                        We Create <span className="word-1">Branding.</span> <span className="word-2">Websites.</span> <span className="word-3">Experiences.</span> That Inspire Action.
                    </h2>
                </div>
            </section>

            {/* --- Section 2: Security Section --- */}
            <section ref={securityRef} id="security-section" className={`hp-section ${isSecurityVisible ? 'is-visible' : ''}`}>
                <div className="hp-container security-container">
                    <div className="security-text-content">
                        <p className="hp-subtitle">SERVICES</p>
                        <h2 className="hp-section-title">Reimagine What’s Possible with Advanced Technology</h2><br/>
                        <p className="security-description">Unlock new possibilities by harnessing the power of advanced technologies to drive innovation, efficiency, and growth. From intelligent automation to cloud transformation, we help businesses reimagine their potential and create future-ready digital ecosystems.</p>
                    </div>
                    <div className="security-grid">
                        {securityFeaturesData.map((feature, index) => (
                            <div className="security-feature-card" key={index} style={{ transitionDelay: `${index * 100}ms` }}>
                                <h3>{feature.title}</h3>
                                <p>{feature.description}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* --- Section 3: Infinite Scroll CTA --- */}
            <section ref={ctaRef} id="cta-section" className={`hp-section ${isCtaVisible ? 'is-visible' : ''}`}>
                <div className="cta-gradient-bg"></div>
                <div className="cta-marquee">
                    <div className="cta-track">
                        <span>Let's Talk</span><span>Let's Talk</span><span>Let's Talk</span><span>Let's Talk</span>
                        <span>Let's Talk</span><span>Let's Talk</span><span>Let's Talk</span><span>Let's Talk</span>
                    </div>
                </div>
                <a href="/contact" className="cta-button">Start a Project</a>
            </section>
        </div>
    );
};
// --- Main App Component ---
 const testimonial = {
      quote: "Thriving in a World of Constant Change. Agile, innovative enterprises adapt with confidence, turning disruption into opportunity and redefining what success looks like.",
        };

const Home = () => {
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
    if (currentElement) { observer.observe(currentElement); }
    return () => { if (currentElement) { observer.unobserve(currentElement); } };
  }, [elementRef, options]);

  return [elementRef, isVisible];
};
     const [testimonialsRef, isTestimonialsVisible] = useScrollAnimation({ threshold: 0.4 });
  return (
    <>
    <HeroSlider/>
     {/* --- NEW Section 5: Quote Reveal Testimonial --- */}
        <section ref={testimonialsRef} className={`hp2-testimonials-section ${isTestimonialsVisible ? 'is-visible' : ''}`}>
          <div className="hp2-container">
            <div className="hp2-testimonial-wrapper">
              <div className="hp2-quote-mark">“</div>
              <blockquote>{testimonial.quote}</blockquote>
             
            </div>
          </div>
        </section>
      <StorySection />
      <FlavorsSection />
      <Homesec/>
    </>
  );
};

export default Home;