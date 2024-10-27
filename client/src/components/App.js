import React, {useEffect } from "react";
import Navbar from "./Navbar";
import SwipeImages from "./Swiper";
import Hero from "./Hero";
import Plans from "./Plans";
import HowItWorks from "./HowItWorks";
import Footer from "./Footer";


function App() {
  useEffect(() => {
    document.title = 'Laundry At Your Doorstep | Votive Laundry and Dry Cleaning | Kiambu Road';
  }, []);

  return (
    <div className="App">
      <Navbar />
      <Hero />
      <SwipeImages />
      <Plans />
      <HowItWorks />
      <Footer />
    </div>
  );
}

export default App;
