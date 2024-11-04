import React, { useState, useEffect } from "react";
import { FaWhatsapp, FaPhoneAlt, FaFacebookF, FaInstagram } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { Link, NavLink } from "react-router-dom";

function Navbar() {
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      const heroElement = document.querySelector('.hero-section');
      const aboutHeroElement = document.querySelector('.about-hero');
      const servicesHeroElement = document.querySelector('.services-hero');
      const iframeElement = document.querySelector('.iframe');



      const heroHeight = heroElement?.offsetHeight || 0;
      const aboutHeroHeight = aboutHeroElement?.offsetHeight || 0;
      const servicesHeroHeight = servicesHeroElement?.offsetHeight || 0;
      const iframeHeight = iframeElement?.offsetHeight || 0;


      // Determine which page section to track based on the presence of each element
      if (heroElement && window.scrollY >= heroHeight) {
        setIsVisible(false); // Hide Navbar after scrolling past hero-section
      } else if (aboutHeroElement && window.scrollY >= aboutHeroHeight) {
        setIsVisible(false); // Hide Navbar after scrolling past about-hero
      } else if (servicesHeroElement && window.scrollY >= servicesHeroHeight) {
        setIsVisible(false); // Hide Navbar after scrolling past services-hero
      }else if (iframeElement && window.scrollY >= iframeHeight) {
        setIsVisible(false); // Hide Navbar after scrolling past services-hero
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
        <Link to='/'><img src="images/votive_logo.png" alt="Votive Logo" className="logo" /></Link>
        <div className="contact">
          <FaPhoneAlt className="icon phone-icon" />
          <FaWhatsapp className="icon whatsapp-icon" />
          <h1>+254 757 167022</h1>
        </div>
        <div className="socials">
          <Link to='https://x.com/votive_Laundry' target="_blank"><FaXTwitter  className="icon" /></Link>
          <Link to='https://www.facebook.com/VotiveLaundry' target="_blank"><FaFacebookF className="icon" /></Link>
          <Link to='https://www.instagram.com/votive_laundry' target="_blank"><FaInstagram className="icon" /></Link>
        </div>
      </div>
      
      {/* Bottom section with menu items */}
      <div className="nav-menu">
        <ul>
          <li><NavLink to="/">Home</NavLink></li>
          <li><NavLink to="/about-votive-laundry">About</NavLink></li>
          <li><NavLink to="/votive-laundry-services-pricing">Services & Pricing</NavLink></li>
          <li><NavLink to="/contact-votive-laundry">Contact</NavLink></li>
          <li><NavLink to="/votive-laundry-schedule-pick-up">SCHEDULE PICK-UP</NavLink></li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;