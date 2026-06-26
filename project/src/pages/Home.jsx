// import React from "react";
// import Herosection from "../components/Herosection.jsx"
// function Home() {
//   return (
//     <div>
//       <Herosection/>
//     </div>
//   );
// }

// export default Home;
import React from "react";
import HeroSection from "../components/Herosection.jsx";
import Features from "../components/Features";
import Programs from "../components/Programs";
import HowItWorks from "../components/HowItWorks";
import CTA from "../components/CTA";


const Home = () => {
  return (
    <>
      <HeroSection />
      <Features />
      <Programs />
      <HowItWorks />
      <CTA />
    </>
  );
};

export default Home;
