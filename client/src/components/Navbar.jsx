import React, { useState, useEffect } from "react";
import { FaWhatsapp, FaPhoneAlt, FaFacebookF, FaInstagram } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { FaTimes, FaBars } from "react-icons/fa";
import { Link, NavLink, useLocation, useNavigate } from "react-router-dom";
import { useAuth } from "./AuthContext";

function Navbar() {
  const [isVisible, setIsVisible] = useState(true);
  const [menuOpen, setMenuOpen] = useState(false); // State for burger menu
  const { user, setUser } = useAuth(); // Access user context
  const { pathname } = useLocation(); // Get current route
  const navigate = useNavigate(); // Navigation hook

  useEffect(() => {
    const handleScroll = () => {
      const heroElement = document.querySelector('.hero-section');
      const aboutHeroElement = document.querySelector('.about-hero');
      const servicesHeroElement = document.querySelector('.services-hero');
      const iframeElement = document.querySelector('.iframe');
      const formElement = document.querySelector('.form-container h1');

      const heroHeight = heroElement?.offsetHeight || 0;
      const aboutHeroHeight = aboutHeroElement?.offsetHeight || 0;
      const servicesHeroHeight = servicesHeroElement?.offsetHeight || 0;
      const iframeHeight = iframeElement?.offsetHeight || 0;
      const formHeight = formElement?.offsetHeight || 0;

      // Determine which page section to track based on the presence of each element
      if (heroElement && window.scrollY >= heroHeight) {
        setIsVisible(false); // Hide Navbar after scrolling past hero-section
      } else if (aboutHeroElement && window.scrollY >= aboutHeroHeight) {
        setIsVisible(false); // Hide Navbar after scrolling past about-hero
      } else if (servicesHeroElement && window.scrollY >= servicesHeroHeight) {
        setIsVisible(false); // Hide Navbar after scrolling past services-hero
      }else if (iframeElement && window.scrollY >= iframeHeight) {
        setIsVisible(false); // Hide Navbar after scrolling past services-hero
      } else if (iframeElement && window.scrollY >= iframeHeight) {
        setIsVisible(false); // Hide Navbar after scrolling past iframe
      } else if (formElement && window.scrollY >= formHeight) {
        setIsVisible(false); // Hide Navbar after scrolling past form header
      } else {
        setIsVisible(true); // Show Navbar if neither section is fully scrolled past
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleLogout = async () => {
    try {
      const response = await fetch("/api/logout", {
        method: "DELETE",
        credentials: "include",
      });

      if (response.ok) {
        setUser(null); // Clear user context
        navigate("/admin-login"); // Redirect to admin login
      } else {
        throw new Error("Failed to logout");
      }
    } catch (error) {
      console.error("Logout error:", error);
    }
  };

  return (
    <nav className={`navbar ${isVisible ? "visible" : "hidden"}`}>
      {/* Top section with logo */}
      <div className="nav-top">
        <Link to="/">
          <img src="images/votive_logo.png" alt="Votive Logo" className="logo" />
        </Link>
        <div className="contact">
          <FaPhoneAlt className="icon phone-icon" />
          <FaWhatsapp className="icon whatsapp-icon" />
          <h1>+254 757 167022</h1>
        </div>
        {/* Burger menu for mobile */}
        <button
          className="burger-menu"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {menuOpen ? <FaTimes className="close" /> : <FaBars />}
        </button>
        {/* Socials for desktop */}
        {!user && pathname !== "/admindashboard" && (
          <div className="socials desktop-only">
            <Link to="https://x.com/votive_Laundry" target="_blank">
              <FaXTwitter className="icon" />
            </Link>
            <Link to="https://www.facebook.com/VotiveLaundry" target="_blank">
              <FaFacebookF className="icon" />
            </Link>
            <Link to="https://www.instagram.com/votive_laundry" target="_blank">
              <FaInstagram className="icon" />
            </Link>
          </div>
        )}
        {/* Admin section */}
        {pathname === "/admindashboard" && user && (
          <div className="admin-section">
            <span>Welcome, {user.name || "Admin"}</span>
            <button onClick={handleLogout}>Logout</button>
          </div>
        )}
      </div>

      {/* Menu items */}
      <div
  className={`nav-menu ${menuOpen ? "menu-open" : ""}`}
  onClick={() => setMenuOpen(false)} // Close menu when clicking outside
>
  <ul>
    <li>
      <NavLink to="/">Home</NavLink>
    </li>
    <li>
      <NavLink to="/about-votive-laundry">About</NavLink>
    </li>
    <li>
      <NavLink to="/votive-laundry-services-pricing">Services & Pricing</NavLink>
    </li>
    <li>
      <NavLink to="/contact-votive-laundry">Contact</NavLink>
    </li>
    <li>
      <NavLink to="/votive-laundry-schedule-pick-up">SCHEDULE PICK-UP</NavLink>
    </li>
  </ul>
  {/* Socials inside burger menu */}
  {!user && pathname !== "/admindashboard" && (
    <div className="socials mobile-only">
      <Link to="https://x.com/votive_Laundry" target="_blank">
        <FaXTwitter className="icon" />
      </Link>
      <Link to="https://www.facebook.com/VotiveLaundry" target="_blank">
        <FaFacebookF className="icon" />
      </Link>
      <Link to="https://www.instagram.com/votive_laundry" target="_blank">
        <FaInstagram className="icon" />
      </Link>
    </div>
  )}
</div>

    </nav>
  );
}

export default Navbar;
