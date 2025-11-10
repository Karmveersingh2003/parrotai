import React from 'react';
import { useState, useEffect } from 'react';
import './Contact.css';

// ===================================================================================
// THE "MASTERPIECE" CONTACT PAGE (FINAL & FIXED)
// ===================================================================================
const ContactFinal = () => {
  // --- STATE AND REFS ---
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    inquiryType: '',
    phoneNumber: '',
    company: '',
    role: '',
    country: '',
    message: '',
    agreed: false
  });
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  
  // --- DATA for form fields ---
  const inquiryOptions = [
    "AI Refinery", "Academic or Professional Researcher", "Accenture new hires", "Accounts Payable & Receivable",
    "Alliance Partner - Potential Alliance Partner", "Current Client", "Current Employee", "Current employee requests (IT & HR)",
    "Financial or Consulting Industry Analyst", "Former Client", "Former Employee", "Investor - Potential Investor",
    "Job Seeker", "Journalist", "Media and press inquiries", "New Supplier - Vendor", "New business requests",
    "New partnerships and alliances", "Potential Client", "Procurement vendors", "Resilience Response"
  ];

  // --- EFFECTS ---
  // Cursor Spotlight Effect
  useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  // --- HANDLERS ---
  const handleChange = (e) => {
    const { id, value, type, checked } = e.target;
    setFormData(prev => ({ ...prev, [id]: type === 'checkbox' ? checked : value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.agreed) {
      alert("Please agree to the privacy statement to continue.");
      return;
    }
    // Here you would typically send the form data to a server
    console.log("Form Submitted:", formData);
    setIsSubmitted(true);
  };

  return (
    <div className="contact-final-page" style={{ '--mouse-x': `${mousePosition.x}px`, '--mouse-y': `${mousePosition.y}px` }}>
      <div className="contact-container-final">
        {/* --- Left Side: The Invitation --- */}
        <div className="contact-intro-panel-final">
          <p className="contact-subtitle-final">Get in Touch</p>
          <h1 className="contact-title-final">We’d love to hear from you!</h1>
          <p className="contact-description-final">
            Fill out the form and we’ll get back to you as soon as possible.
          </p>
          <div className="contact-info-wrapper-final">
            <div className="contact-info-item-final">
              <h3>Email Us</h3>
              <a href="mailto:hello@creative.studio">hello@creative.studio</a>
            </div>
            <div className="contact-info-item-final">
              <h3>Call Us</h3>
              <a href="tel:+1234567890">+1 (234) 567-890</a>
            </div>
          </div>
        </div>

        {/* --- Right Side: The Form --- */}
        <div className={`contact-form-panel-final ${isSubmitted ? 'submitted' : ''}`}>
          <form onSubmit={handleSubmit} className="contact-form-final">
            {/* --- Form Fields --- */}
            <div className="form-field-final" style={{ transitionDelay: '0.1s' }}>
                <input type="text" id="name" value={formData.name} onChange={handleChange} required placeholder=" "/>
                <label htmlFor="name">Your Name*</label>
            </div>
            <div className="form-field-final" style={{ transitionDelay: '0.2s' }}>
                <input type="email" id="email" value={formData.email} onChange={handleChange} required placeholder=" "/>
                <label htmlFor="email">Your Email*</label>
            </div>
            <div className="form-field-final" style={{ transitionDelay: '0.3s' }}>
                <select id="inquiryType" value={formData.inquiryType} onChange={handleChange} required>
                    <option value="" disabled></option>
                    {inquiryOptions.map(option => <option key={option} value={option}>{option}</option>)}
                </select>
                <label htmlFor="inquiryType">Inquiry Type*</label>
            </div>
            <div className="form-field-final" style={{ transitionDelay: '0.4s' }}>
                <input type="tel" id="phoneNumber" value={formData.phoneNumber} onChange={handleChange} placeholder=" "/>
                <label htmlFor="phoneNumber">Phone Number (Include country code)</label>
            </div>
            <div className="form-field-final" style={{ transitionDelay: '0.5s' }}>
                <input type="text" id="company" value={formData.company} onChange={handleChange} required placeholder=" "/>
                <label htmlFor="company">Company/Organization*</label>
            </div>
            <div className="form-field-final" style={{ transitionDelay: '0.6s' }}>
                <input type="text" id="role" value={formData.role} onChange={handleChange} placeholder=" "/>
                <label htmlFor="role">Your Role/Function</label>
            </div>
            <div className="form-field-final" style={{ transitionDelay: '0.7s' }}>
                <input type="text" id="country" value={formData.country} onChange={handleChange} required placeholder=" "/>
                <label htmlFor="country">Country/Region*</label>
            </div>
            <div className="form-field-final" style={{ transitionDelay: '0.8s' }}>
                <textarea id="message" value={formData.message} onChange={handleChange} required placeholder=" " rows="5"/>
                <label htmlFor="message">How can we help you?*</label>
            </div>

            {/* --- Privacy Checkbox --- */}
            <div className="form-field-checkbox" style={{ transitionDelay: '0.9s' }}>
                <input type="checkbox" id="agreed" checked={formData.agreed} onChange={handleChange} required />
                <label htmlFor="agreed">
                    I agree to the use or processing of my personal information by Parrot for the purpose of fulfilling this request and in accordance with the <a href="#privacy">Parrot Privacy Statement</a>.
                </label>
            </div>
            
            <button type="submit" className="contact-submit-button-final" style={{ transitionDelay: '1s' }}>
              Submit
            </button>
          </form>

          {/* The Success Message */}
          <div className="contact-success-message-final">
            <div className="success-icon-final">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M0 0h24v24H0z" fill="none"/><path d="M9 16.2L4.8 12l-1.4 1.4L9 19 21 7l-1.4-1.4L9 16.2z"/></svg>
            </div>
            <h2>Thank You!</h2>
            <p>Your message has been sent. We'll be in touch shortly.</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactFinal;