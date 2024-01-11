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
        {/* <div className="w-full">
          <SolutionsText />
        </div> */}
        <SavingsTool />
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
