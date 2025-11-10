import React, { useState } from 'react';
import './Terms.css';

// ===================================================================================
// THE "MASTERPIECE" TERMS & CONDITIONS PAGE (HORIZONTAL ACCORDION)
// ===================================================================================
const TermsAndConditions = () => {
    const [activeIndex, setActiveIndex] = useState(0); // Default to the first panel being open

    const sections = [
        { 
            title: "Acceptance of Terms",
            shortTitle: "Acceptance",
            content: "By accessing and using this site, you accept the following Terms of Use, without limitation or qualification.",
            image: "https://images.pexels.com/photos/1181298/pexels-photo-1181298.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
        },
        { 
            title: "Intellectual Property Rights",
            shortTitle: "IP Rights",
            content: "Unless otherwise stated, the contents of this site, including but not limited to the text, images, code, models, and their arrangement, are the property of Parrot AI Private Limited (“Parrot AI”). All trademarks, service marks, logos, and names used or referred to in this website are the property of their respective owners and protected by applicable intellectual property laws. Nothing contained on this site shall be construed as granting, by implication, estoppel or otherwise, any license or right to use any trademark, copyright, patent, or other proprietary interest of Parrot AI or any third party. The site and the content provided, including but not not limited to graphical elements, written materials, software, AI models, design layouts, HTML code, and interface elements, may not be copied, reproduced, republished, uploaded, posted, transmitted, or distributed in any form without the prior written consent of Parrot AI. However, users may download, display, or print a single copy of the materials strictly for personal, non-commercial use, provided the material is not modified in any manner and all proprietary notices remain intact.",
            image: "https://images.pexels.com/photos/326514/pexels-photo-326514.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
        },
        { 
            title: "Disclaimers and Limitation of Liability",
            shortTitle: "Liability",
            content: "The information available on this website is provided free of charge and for informational purposes only. Use of this information does not create a business, advisory, or professional services relationship between you and Parrot AI. Any links provided on this site to external websites or services not operated by Parrot AI do not constitute an endorsement. You assume full responsibility for any use you make of the information or content on this site. This site and its content are provided “as is”. Parrot AI disclaims all express or implied warranties of any kind. In no event shall Parrot AI be liable for any direct, indirect, incidental, consequential, special, exemplary, or punitive damages whatsoever, arising out of the use or inability to use this site.",
            image: "https://images.pexels.com/photos/4050315/pexels-photo-4050315.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
        },
        { 
            title: "Governing Law and Jurisdiction",
            shortTitle: "Jurisdiction",
            content: "By accessing this site, you agree that any disputes arising from your use of this site will be governed by the laws of India, without reference to any principles of conflict of laws. You further agree that courts located in New Delhi shall have exclusive jurisdiction over all such matters. If you initiate any legal proceedings against Parrot AI, you expressly agree that Parrot AI shall have the right to select the jurisdiction in which to respond to such proceedings.",
            image: "https://images.pexels.com/photos/210186/pexels-photo-210186.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
        },
        {
            title: "User Conduct and Submissions",
            shortTitle: "Submissions",
            content: "You are responsible for complying with the laws of the jurisdiction from which you access this site and you agree not to use the information or materials on this site in violation of any such laws. Unless expressly stated otherwise, any information submitted by you through this site shall be deemed non-confidential and non-proprietary. Parrot AI does not accept unsolicited ideas, proposals, or content submissions outside the scope of an established business relationship. By submitting any idea, suggestion, or material through this website, you acknowledge and agree to be bound by these terms.",
            image: "https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
        }
    ];

    const handlePanelInteraction = (index) => {
        setActiveIndex(index);
    };

    return (
        <div className="terms-page">
            {/* --- Hero Section --- */}
            <header className="terms-hero-section">
                <div className="terms-hero-content">
                    <h1 className="terms-main-title">Terms and Conditions</h1>
                    <p className="terms-hero-subtitle">
                        Welcome to Parrot AI. By using our services, you agree to the following terms and conditions. Please read them carefully.
                    </p>
                </div>
            </header>

            {/* --- Main Accordion Section --- */}
            <main className="terms-accordion-section">
                <div className="terms-accordion-container">
                    {sections.map((section, index) => (
                        <div 
                            key={index}
                            className={`terms-accordion-panel ${activeIndex === index ? 'active' : ''}`}
                            onMouseEnter={() => handlePanelInteraction(index)}
                            onClick={() => handlePanelInteraction(index)} // For mobile tap
                        >
                            <div className="panel-background" style={{ backgroundImage: `url(${section.image})` }}></div>
                            <div className="panel-content">
                                <h2 className="panel-title-short">{section.shortTitle}</h2>
                                <div className="panel-inner-content">
                                    <h3 className="panel-title-full">{section.title}</h3>
                                    <p>{section.content}</p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </main>
        </div>
    );
};

export default TermsAndConditions;