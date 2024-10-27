import React, { useState, useEffect } from "react";
import { FaWhatsapp, FaPhoneAlt, FaFacebookF, FaInstagram, FaTwitter } from "react-icons/fa";

function Navbar() {
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      const heroHeight = document.querySelector('.hero-section')?.offsetHeight || 0;
            
      if (window.scrollY >= heroHeight) {
        setIsVisible(false);  // Hide Navbar after scrolling past hero + carousel
      } else {
        setIsVisible(true);   // Show Navbar before reaching the carousel
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`navbar ${isVisible ? 'visible' : 'hidden'}`}>
      {/* Top section with logo, phone number, and socials */}
      <div className="nav-top">
        <img src="images/votive_logo.png" alt="Votive Logo" className="logo" />
        <div className="contact">
          <FaPhoneAlt className="icon phone-icon" />
          <FaWhatsapp className="icon whatsapp-icon" />
          <h1>+254 757 167022</h1>
        </div>
        <div className="socials">
          <FaTwitter className="icon" />
          <FaFacebookF className="icon" />
          <FaInstagram className="icon" />
        </div>
      </div>
      
      {/* Bottom section with menu items */}
      <div className="nav-menu">
        <ul>
          <li><a href="/">Home</a></li>
          <li><a href="/about-votive-laundry">About</a></li>
          <li><a href="/votive-laundry-services-pricing">Services & Pricing</a></li>
          <li><a href="/contact-votive-laundry">Contact</a></li>
          <li><a href="/votive-laundry-schedule-pick-up">SCHEDULE PICK-UP</a></li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
