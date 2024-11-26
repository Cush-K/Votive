import React, { useState, useEffect } from "react";
import { FaWhatsapp, FaPhoneAlt, FaFacebookF, FaInstagram } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { Link, NavLink, useLocation, useNavigate } from "react-router-dom";
import { useAuth } from "./AuthContext";

function Navbar() {
  const [isVisible, setIsVisible] = useState(true);
  const { user, setUser } = useAuth(); // Access user context
  const { pathname } = useLocation(); // Get current route
  const navigate = useNavigate(); // Navigation hook

  useEffect(() => {
    const handleScroll = () => {
      const heroElement = document.querySelector(".hero-section");
      const aboutHeroElement = document.querySelector(".about-hero");
      const servicesHeroElement = document.querySelector(".services-hero");
      const iframeElement = document.querySelector(".iframe");
      const formElement = document.querySelector(".form-container h1");

      const heroHeight = heroElement?.offsetHeight || 0;
      const aboutHeroHeight = aboutHeroElement?.offsetHeight || 0;
      const servicesHeroHeight = servicesHeroElement?.offsetHeight || 0;
      const iframeHeight = iframeElement?.offsetHeight || 0;
      const formHeight = formElement?.offsetHeight || 0;

      if (heroElement && window.scrollY >= heroHeight) {
        setIsVisible(false);
      } else if (aboutHeroElement && window.scrollY >= aboutHeroHeight) {
        setIsVisible(false);
      } else if (servicesHeroElement && window.scrollY >= servicesHeroHeight) {
        setIsVisible(false);
      } else if (iframeElement && window.scrollY >= iframeHeight) {
        setIsVisible(false);
      } else if (formElement && window.scrollY >= formHeight) {
        setIsVisible(false);
      } else {
        setIsVisible(true);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleLogout = async () => {
    try {
      const response = await fetch("http://127.0.0.1:5555/api/logout", {
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
      {/* Top section with logo, phone number, and socials */}
      <div className="nav-top">
        <Link to="/">
          <img src="images/votive_logo.png" alt="Votive Logo" className="logo" />
        </Link>
        <div className="contact">
          <FaPhoneAlt className="icon phone-icon" />
          <FaWhatsapp className="icon whatsapp-icon" />
          <h1>+254 757 167022</h1>
        </div>
        {/* Hide socials if admin is logged in */}
        {!user && pathname !== "/admindashboard" && (
          <div className="socials">
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
        {/* Admin section: Only visible on /admindashboard */}
        {pathname === "/admindashboard" && user && (
          <div className="admin-section">
            <span>Welcome, {user.name || "Admin"}</span>
            <button onClick={handleLogout}>Logout</button>
          </div>
        )}
      </div>

      {/* Bottom section with menu items */}
      <div className="nav-menu">
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
      </div>
    </nav>
  );
}

export default Navbar;
