import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

// Import all your components
import Navbar from './Components/Navbar/Navbar';
import Home from './Components/Home/Home';
import About from "./Components/About/About";
import ServicesPage from './Components/Services/Services';
import ContactPageAdvanced from './Components/ContactUs/Contact';
import Footer from './Components/Footer/Footer';
import PrivacyPolicy from './Components/PrivacyPolicy/Privacy';
import TermsAndConditions from './Components/TermsandConditions/Terms';
import Preloader from './Components/Preloader/Preloader'; // Adjust path to your Preloader component
import HomepageV2 from './Components/Home/Homet';

// ===================================================================================
// A new wrapper component specifically for the Home page to handle its preloader
// ===================================================================================
const HomePageWrapper = () => {
  const [isLoading, setIsLoading] = useState(true);
  // We use a key to force the Home component to remount and replay animations
  const [homeKey, setHomeKey] = useState(0); 

  // This effect runs every time the component is mounted (i.e., every time you visit '/')
  useEffect(() => {
    setIsLoading(true);
    // Reset the key to ensure animations replay on subsequent visits
    setHomeKey(prevKey => prevKey + 1); 
  }, []);

  // This function will be called by the preloader when its exit animation is done
  const handleLoadingComplete = () => {
    setIsLoading(false);
  };

  return (
    <>
      {isLoading && <Preloader onLoaded={handleLoadingComplete} />}
      
      <div style={{ visibility: isLoading ? 'hidden' : 'visible' }}>
        <Home key={homeKey} /> 
      </div>
    </>
  );
};


// ===================================================================================
// The main App component now handles routing and layout
// ===================================================================================
export default function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        {/* The Home Page route now uses our special wrapper */}
        <Route path="/" element={<HomePageWrapper />} />
        <Route path="/home" element={<HomepageV2 />} />

        {/* All other pages render directly */}
        <Route path="/about" element={<About />} />
     
        <Route path="/services" element={<ServicesPage />} />
        <Route path="/contact" element={<ContactPageAdvanced />} />
        <Route path="/privacy" element={<PrivacyPolicy />} />
        <Route path="/terms" element={<TermsAndConditions />} />

        {/* Fallback route */}
        <Route path="*" element={<h2 style={{ textAlign: 'center', marginTop: '50px' }}>404 - Page Not Found</h2>} />
      </Routes>
      <Footer />
    </Router>
  );
}