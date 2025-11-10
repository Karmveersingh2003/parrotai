import React from 'react';
import { useState, useRef, useEffect } from 'react';
import './About.css';

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
// NEW TIMELINE MILESTONE SUB-COMPONENT
// Each milestone has its own scroll observer for a staggered effect
// ===================================================================================
const TimelineMilestone = ({ year, title, description, alignment, delay }) => {
    const [milestoneRef, isMilestoneVisible] = useScrollAnimation({ 
        threshold: 0.5,
        triggerOnce: true 
    });

    return (
        <div ref={milestoneRef} className={`timeline-milestone ${alignment} ${isMilestoneVisible ? 'is-visible' : ''}`}>
            <div className="milestone-content">
                <span className="milestone-year">{year}</span>
                <h3 className="milestone-title">{title}</h3>
                <p>{description}</p>
            </div>
        </div>
    );
};


// ===================================================================================
// THE ADVANCED & STUNNING "ABOUT US" PAGE
// ===================================================================================
const AboutUsAdvanced = () => {
  // --- STATE AND REFS ---
  const [mousePosition, setMousePosition] = useState({ x: -100, y: -100 });
  const [activeValueIndex, setActiveValueIndex] = useState(0);
  
  // --- DATA ---
 const timelineData = [
  {
    year: "2025",
    title: "The Vision Takes Shape",
    description:
      "Our journey began in 2025 with a shared dream — to redefine the future of information technology through innovation, creativity, and purpose-driven solutions.",
  },
  {
    year: "2025",
    title: "Building the Foundation",
    description:
      "We assembled a passionate team of technologists, designers, and strategists committed to crafting impactful digital experiences from day one.",
  },
  {
    year: "2025",
    title: "First Project Launch",
    description:
      "Within months of our inception, we successfully delivered our first enterprise software project, showcasing our dedication to quality and innovation.",
  },
  {
    year: "2025",
    title: "Expanding Our Reach",
    description:
      "Our growing reputation attracted new clients and partnerships, establishing us as a trusted name in the emerging tech landscape.",
  },
];


  const valuesData = [
    { title: "Purpose-Driven Creativity", description: "We believe true creativity isn't just about aesthetics; it's about solving real-world problems and driving meaningful results. Every pixel and line of code serves a purpose.", image: "https://images.pexels.com/photos/3184339/pexels-photo-3184339.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" },
    { title: "Radical Collaboration", description: "We are an extension of your team. Through open communication and mutual trust, we forge partnerships that turn ambitious goals into reality.", image: "https://images.pexels.com/photos/3184418/pexels-photo-3184418.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" },
    { title: "Unwavering Quality", description: "From the initial sketch to the final deployment, we are obsessed with quality. We meticulously craft every detail to deliver polished, resilient, and beautiful digital products.", image: "https://images.pexels.com/photos/1779487/pexels-photo-1779487.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" }
  ];

  const teamData = [
    { name: "Eleanor Vance", role: "Founder & Creative Director", image: "https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=600" },
    { name: "Marcus Holloway", role: "Lead Developer", image: "https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg?auto=compress&cs=tinysrgb&w=600" },
    { name: "Isabella Rossi", role: "Head of Strategy", image: "https://images.pexels.com/photos/1065084/pexels-photo-1065084.jpeg?auto=compress&cs=tinysrgb&w=600" },
    { name: "James Knight", role: "Senior UI/UX Designer", image: "https://images.pexels.com/photos/846741/pexels-photo-846741.jpeg?auto=compress&cs=tinysrgb&w=600" }
  ];
  
  // --- EFFECTS ---
  // Cursor Light Effect
  useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  // Scroll-triggered animations for sections
  const [introRef, isIntroVisible] = useScrollAnimation({ threshold: 0.3 });
  const [timelineRef, isTimelineVisible] = useScrollAnimation({ threshold: 0.1 });
  const [valuesRef, isValuesVisible] = useScrollAnimation({ threshold: 0.2 });
  const [teamRef, isTeamVisible] = useScrollAnimation({ threshold: 0.1 });
  const [partnersRef, isPartnersVisible] = useScrollAnimation({ threshold: 0.2 });

  return (
    <div className="advanced-about-page">
      <div id="cursor-light" style={{ left: mousePosition.x, top: mousePosition.y }}></div>

      {/* --- Section 1: Introduction --- */}
      <section ref={introRef} className={`adv-intro-section ${isIntroVisible ? 'is-visible' : ''}`}>
        <div className="adv-container">
          <p className="adv-subtitle">Our Philosophy</p>
          <h1 className="adv-main-title">
            <span className="char">D</span><span className="char">e</span><span className="char">s</span><span className="char">i</span><span className="char">g</span><span className="char">n</span><span className="char">&nbsp;</span>
            <span className="char">w</span><span className="char">i</span><span className="char">t</span><span className="char">h</span><span className="char">&nbsp;</span>
            <span className="char">I</span><span className="char">n</span><span className="char">t</span><span className="char">e</span><span className="char">n</span><span className="char">t</span><span className="char">.</span>
          </h1>
          <p className="adv-intro-description">
            We are a creative studio that believes in the power of thoughtful design to shape perceptions, inspire action, and build lasting brands.
          </p>
        </div>
      </section>

      {/* --- Section 2: NEW Advanced Vertical Timeline --- */}
      <section ref={timelineRef} className={`timeline-section-adv ${isTimelineVisible ? 'is-visible' : ''}`}>
        <div className="adv-container">
          <p className="adv-subtitle">Our Journey</p>
          <h2 className="adv-section-title">A History Forged in Creativity</h2>
          <div className="timeline-container-adv">
            <div className="timeline-path-container">
                <svg className="timeline-svg" width="2" height="100%" viewBox="0 0 2 1200" preserveAspectRatio="none">
                    <path d="M 1 0 V 1200" stroke="var(--color-elegant-border)" strokeWidth="2" fill="none" />
                    <path className="timeline-path-animated" d="M 1 0 V 1200" stroke="var(--color-elegant-accent)" strokeWidth="2" fill="none" />
                </svg>
            </div>
            <div className="milestones-wrapper">
                {timelineData.map((item, index) => (
                    <TimelineMilestone 
                        key={index}
                        year={item.year}
                        title={item.title}
                        description={item.description}
                        alignment={index % 2 === 0 ? 'align-left' : 'align-right'}
                    />
                ))}
            </div>
          </div>
        </div>
      </section>

      {/* --- Section 3: Guiding Principles (Values) --- */}
      <section ref={valuesRef} className={`principles-section ${isValuesVisible ? 'is-visible' : ''}`}>
        <div className="adv-container principles-container">
          <div className="principles-text-content">
            <p className="adv-subtitle">Our Principles</p>
            <h2 className="adv-section-title">The Core of Our Character</h2>
            <ul className="principles-list">
              {valuesData.map((value, index) => (
                <li 
                  key={index} 
                  className={`principle-item ${index === activeValueIndex ? 'active' : ''}`}
                  onMouseEnter={() => setActiveValueIndex(index)}
                >
                  <h3>{value.title}</h3>
                  <p>{value.description}</p>
                </li>
              ))}
            </ul>
          </div>
          <div className="principles-image-content">
            <div className="principles-image-wrapper">
              {valuesData.map((value, index) => (
                <div 
                  key={index} 
                  className={`principle-image ${index === activeValueIndex ? 'active' : ''}`}
                  style={{ backgroundImage: `url(${value.image})` }}
                ></div>
              ))}
            </div>
          </div>
        </div>
      </section>
      
      {/* --- Section 4: The Artisans (Team) --- */}
      <section ref={teamRef} className={`team-section-adv ${isTeamVisible ? 'is-visible' : ''}`}>
        <div className="adv-container">
          <p className="adv-subtitle">Our Experts</p>
          <h2 className="adv-section-title">The Minds Behind the Magic</h2>
          <div className="team-grid-adv">
            {teamData.map((member, index) => (
              <div key={index} className="team-member-card-adv" style={{ transitionDelay: `${index * 150}ms` }}>
                <div className="team-card-image-wrapper">
                  <div className="team-card-image" style={{backgroundImage: `url(${member.image})`}}></div>
                </div>
                <div className="team-card-text-content">
                  <h3 className="team-member-name-adv">{member.name}</h3>
                  <p className="team-member-role-adv">{member.role}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* --- Section 5: Partners Marquee --- */}
      <section ref={partnersRef} className={`partners-section ${isPartnersVisible ? 'is-visible' : ''}`}>
        <div className="adv-container">
          <h2 className="adv-section-title">Trusted By Visionaries</h2>
          <div className="marquee">
            <div className="marquee-track">
              {["FORGE", "SUMMIT", "ORION", "NEXUS", "ZENITH", "APEX", "ECHO", "FORGE", "SUMMIT", "ORION", "NEXUS", "ZENITH", "APEX", "ECHO"].map((logo, index) => (
                <div key={index} className="marquee-logo">{logo}</div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AboutUsAdvanced;