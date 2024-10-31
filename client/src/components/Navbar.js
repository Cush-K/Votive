import React, { useState, useEffect } from "react";
import { FaWhatsapp, FaPhoneAlt, FaFacebookF, FaInstagram, FaTwitter } from "react-icons/fa";

function Navbar() {
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      const heroElement = document.querySelector('.hero-section');
      const aboutHeroElement = document.querySelector('.about-hero');

      const heroHeight = heroElement?.offsetHeight || 0;
      const aboutHeroHeight = aboutHeroElement?.offsetHeight || 0;

      // Determine which page section to track based on the presence of each element
      if (heroElement && window.scrollY >= heroHeight) {
        setIsVisible(false); // Hide Navbar after scrolling past hero-section
      } else if (aboutHeroElement && window.scrollY >= aboutHeroHeight) {
        setIsVisible(false); // Hide Navbar after scrolling past about-hero
      } else {
        setIsVisible(true); // Show Navbar if neither section is fully scrolled past
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