import React, { useState, useEffect } from 'react';
import { BrowserRouter } from "react-router-dom";

import {
  About,
  SavingsTool,
  Contact,
  Team,
  Solutions,
  SolutionsText,
  Hero,
  Navbar,
  Vision,
  Experience,
  HomeCommercialInfo,
  Footer,
} from "./components";

const App = () => {
  const [isDesktop, setIsDesktop] = useState(window.innerWidth > 768);

  useEffect(() => {
    const handleResize = () => {
      setIsDesktop(window.innerWidth > 768);
    };

    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <BrowserRouter>
      <div className="relative z-0 bg-background">
        {/* Outer Container for Hero Section */}
        <div
          style={{ height: "80vh" }}
          className="relative bg-no-repeat bg-center"
        >
          {/* Background Image Container */}
          <div className="bg-hero-pattern bg-cover" style={{ height: "105%" }}>
            <Navbar />
            <Hero />
          </div>
        </div>
        <About />
        <HomeCommercialInfo />
        {isDesktop && <SavingsTool />}
        <div className="w-full bg-[#010B15] bg-cover">
          <Vision />
        </div>
        <div className="w-full">
          <Team />
        </div>
        <div className="bg-primary-complement relative z-0">
          <Contact />
        </div>
      </div>
      <Footer />
    </BrowserRouter>
  );
};

export default App;
