import React, { useState, useEffect } from 'react';
import './Privacy.css';

// ===================================================================================
// UTILITY HOOK: For scroll-triggered animations (Intersection Observer)
// ===================================================================================
const useScrollAnimation = (options) => {
    const elementRef = React.useRef(null);
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

// ===================================================================================
// THE "MASTERPIECE" PRIVACY POLICY PAGE
// ===================================================================================
const PrivacyPolicy = () => {
    const [isMobileTocOpen, setIsMobileTocOpen] = useState(false);
    
    // Create refs for each section to animate them
    const sections = [
        { id: "data-controller", title: "1. Data Controller and Contact Information" },
        { id: "data-collection", title: "2. Personal Data We Collect" },
        { id: "legal-basis", title: "3. Legal Basis for Processing" },
        { id: "data-use", title: "4. Use of Personal Data" },
        { id: "data-sharing", title: "5. Data Sharing and Disclosure" },
        { id: "data-transfers", title: "6. International Data Transfers" },
        { id: "data-retention", title: "7. Data Retention" },
        { id: "security-measures", title: "8. Security Measures" },
        { id: "your-rights", title: "9. Your Rights" },
        { id: "childrens-privacy", title: "10. Children’s Privacy" },
        { id: "cookies", title: "11. Cookies and Tracking Technologies" },
        { id: "policy-changes", title: "12. Changes to This Policy" }
    ];

    return (
        <div className="privacy-policy-page">
            {/* --- Hero Section --- */}
            <header className="pp-hero-section">
                <div className="pp-container">
                    <h1 className="pp-main-title">Privacy Policy</h1>
                    <p className="pp-hero-subtitle">
                        At Parrot AI, we are committed to protecting your privacy. This Privacy Policy outlines our practices regarding the collection, use, and disclosure of your information when you use our services.
                    </p>
                </div>
            </header>

            <main className="pp-main-content">
                <div className="pp-container pp-layout-grid">
                    {/* --- Floating Table of Contents (Desktop) --- */}
                    <aside className="pp-toc-desktop">
                        <nav>
                            <h3>On this page</h3>
                            <ul>
                                {sections.map(section => (
                                    <li key={section.id}><a href={`#${section.id}`}>{section.title}</a></li>
                                ))}
                            </ul>
                        </nav>
                    </aside>

                    {/* --- Dropdown Table of Contents (Mobile) --- */}
                    <div className="pp-toc-mobile">
                        <button onClick={() => setIsMobileTocOpen(!isMobileTocOpen)}>
                            <span>On this page</span>
                            <svg className={isMobileTocOpen ? 'open' : ''} xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
                                <path fillRule="evenodd" d="M1.646 4.646a.5.5 0 0 1 .708 0L8 10.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708z"/>
                            </svg>
                        </button>
                        <nav className={isMobileTocOpen ? 'open' : ''}>
                            <ul>
                                {sections.map(section => (
                                    <li key={section.id}><a href={`#${section.id}`} onClick={() => setIsMobileTocOpen(false)}>{section.title}</a></li>
                                ))}
                            </ul>
                        </nav>
                    </div>

                    {/* --- Policy Content --- */}
                    <article className="pp-policy-content">
                        <AnimatedSection id="intro">
                            <p>This Privacy Policy describes how Parrot AI Technologies Private Limited (“Parrot AI”, “we”, “our”, or “us”) collects, uses, processes, stores, and discloses your personal data through its website, applications, platforms, and related services (collectively, the “Platform”). This Policy is designed to comply with applicable privacy laws, including the Indian Information Technology Act, 2000, the EU General Data Protection Regulation 2016/679 (“GDPR”), and applicable U.S. federal and state privacy regulations.</p>
                        </AnimatedSection>
                        
                        <AnimatedSection id="data-controller">
                            <h2>1. Data Controller and Contact Information</h2>
                            <p>Parrot AI Technologies Private Limited is the controller of your personal data unless otherwise stated. We may also act as a data processor on behalf of our clients in certain contexts. For all questions or concerns regarding this Policy, or to exercise your data rights, please contact our Grievance Officer at <a href="mailto:operations@parrotai.com">operations@parrotai.com</a>.</p>
                        </AnimatedSection>

                        <AnimatedSection id="data-collection">
                            <h2>2. Personal Data We Collect</h2>
                            <p>“Personal Data” means any information relating to an identified or identifiable natural person. We collect personal data that you provide to us directly, such as when you create an account, request services, interact with our platform, or contact us for support. This may include your name, email address, phone number, professional information, account credentials, payment details, and any other information you submit. We may also collect data automatically through cookies, analytics tools, and similar technologies, including IP address, browser type, device identifiers, usage patterns, and location data.</p>
                        </AnimatedSection>

                        <AnimatedSection id="legal-basis">
                            <h2>3. Legal Basis for Processing</h2>
                            <p>We process your personal data only where we have a valid legal basis to do so. Depending on the context, the legal basis may include your consent, the necessity of processing for the performance of a contract, compliance with a legal obligation, or the pursuit of our legitimate interests in improving our services, ensuring platform security, and maintaining business operations. Where processing is based on consent, you may withdraw that consent at any time.</p>
                        </AnimatedSection>
                        
                        <AnimatedSection id="data-use">
                            <h2>4. Use of Personal Data</h2>
                            <p>We use your personal data to deliver, operate, and enhance our services. This includes creating and managing user accounts, authenticating users, providing customer support, personalising content, communicating updates, conducting internal research, and fulfilling legal and contractual obligations. We do not use personal data for automated decision-making or profiling without your explicit consent where required by law.</p>
                        </AnimatedSection>

                        <AnimatedSection id="data-sharing">
                            <h2>5. Data Sharing and Disclosure</h2>
                            <p>We do not sell your personal data. We may share personal data with trusted third-party service providers who process data on our behalf under written agreements that require them to safeguard your data. We may also disclose data to authorities where required under applicable law or in response to valid legal processes. In the context of corporate restructuring, mergers, or acquisitions, personal data may be transferred as part of the transaction with appropriate safeguards.</p>
                        </AnimatedSection>

                        <AnimatedSection id="data-transfers">
                            <h2>6. International Data Transfers</h2>
                            <p>Your data may be transferred to and processed in jurisdictions outside your country of residence, including India, the European Economic Area (EEA), and the United States. Where such transfers occur, we implement safeguards in accordance with applicable laws, including standard contractual clauses under the GDPR and contractual protections for U.S. or Indian transfers. These ensure your data continues to receive a level of protection that is substantially equivalent to the originating jurisdiction.</p>
                        </AnimatedSection>

                        <AnimatedSection id="data-retention">
                            <h2>7. Data Retention</h2>
                            <p>We retain personal data for as long as necessary to fulfill the purposes for which it was collected, to comply with our legal obligations, to resolve disputes, and to enforce our agreements. Retention periods may vary depending on the type of data and the legal or operational necessity.</p>
                        </AnimatedSection>

                        <AnimatedSection id="security-measures">
                            <h2>8. Security Measures</h2>
                            <p>We maintain administrative, technical, and physical safeguards to protect personal data against unauthorised access, loss, misuse, alteration, or destruction. Access to personal data is strictly limited to personnel who need it to perform their duties, and they are bound by confidentiality obligations.</p>
                        </AnimatedSection>

                        <AnimatedSection id="your-rights">
                            <h2>9. Your Rights</h2>
                            <p>Subject to applicable law, you have the right to access, correct, update, or delete your personal data. You may also have the right to object to or restrict the processing of your data and to request portability of your data. Residents of the European Union, United Kingdom, and certain U.S. states such as California may have additional rights. You may exercise these rights by contacting us at <a href="mailto:operations@parrotai.com">operations@parrotai.com</a>. We will respond within the timelines prescribed by law.</p>
                        </AnimatedSection>
                        
                        <AnimatedSection id="childrens-privacy">
                            <h2>10. Children’s Privacy</h2>
                            <p>Our services are not intended for use by children under the age of 16. We do not knowingly collect personal data from children. If we become aware that data has been collected from a minor without verifiable parental consent, we will take appropriate steps to delete such information.</p>
                        </AnimatedSection>

                        <AnimatedSection id="cookies">
                            <h2>11. Cookies and Tracking Technologies</h2>
                            <p>We use cookies and similar technologies to enhance user experience, analyse usage, and deliver personalised content. You can manage cookie preferences through your browser settings or opt out of certain trackers using industry-standard mechanisms. For EU users, we honour the requirements of the ePrivacy Directive and GDPR regarding consent for non-essential cookies.</p>
                        </AnimatedSection>

                        <AnimatedSection id="policy-changes">
                            <h2>12. Changes to This Policy</h2>
                            <p>We may update this Privacy Policy from time to time to reflect changes in legal requirements, business operations, or technological developments. We will notify you of material changes through prominent notices on our Platform or by direct communication, where required by law. Continued use of the Platform following such updates constitutes your acceptance of the revised Policy.</p>
                        </AnimatedSection>
                    </article>
                </div>
            </main>
        </div>
    );
};

// A helper component to wrap sections for animation
const AnimatedSection = ({ id, children }) => {
    const [ref, isVisible] = useScrollAnimation({ threshold: 0.1, triggerOnce: true });
    return (
        <section ref={ref} id={id} className={`pp-content-section ${isVisible ? 'is-visible' : ''}`}>
            {children}
        </section>
    );
};

export default PrivacyPolicy;