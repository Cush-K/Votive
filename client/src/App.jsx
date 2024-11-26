import React, {useEffect } from "react";
import Navbar from "./components/Navbar";
import SwipeImages from "./components/Swiper";
import Hero from "./components/Hero";
import Plans from "./components/Plans";
import HowItWorks from "./components/HowItWorks";
import Footer from "./components/Footer";


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
