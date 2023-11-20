import { BrowserRouter } from "react-router-dom";

import { About, Contact, Team, Solutions, SolutionsText, Hero, Navbar, Vision } from "./components";

const App = () => {
  return (
    <BrowserRouter>
      <div className='relative z-0 bg-primary'>
        <div className='bg-hero-pattern relative bg-cover bg-no-repeat bg-center'>
          <Navbar />
          <Hero />
        </div>
        <About />
        <div className="w-full bg-[#010B15] bg-cover">
          <Vision />
        </div>
        <div className="w-full">
          <SolutionsText />
          <Solutions />
          <Team />
        </div>
        <div className='bg-[#010b15] relative z-0'>
          <Contact />
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;