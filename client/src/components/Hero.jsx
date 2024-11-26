import React from "react";
import { FaClock, FaTruck, FaMobileAlt } from "react-icons/fa";
import { Link } from "react-router-dom";

function Hero(){
    return (
        <div className="hero-section">
        <div className="hero-header">
          <h1>Home and Commercial Solutions to Laundry and Upholstery Cleaning</h1>
        </div>
        
        <div className="hero-boxes">
          {/* Working Hours Section */}
          <div className="hero-box hero-time">
            <FaClock className="hero-icon" />
            <h4>Working Hours</h4>
            <p><span><strong>Monday - Friday:</strong></span> <span>08:00AM - 6:00PM</span></p>
            <p><span><strong>Saturday:</strong></span> <span>08:00AM - 5:00PM</span></p>
            <p><span><strong>Sunday:</strong></span> <span>Closed</span></p>
            <Link to="/about-votive-laundry">
            <button className="hero-btn">See More &rarr;</button>
            </Link>
          </div>

          {/* Pickup and Delivery Section */}
          <div className="hero-box hero-pickup">
            <FaTruck className="hero-icon" />
            <h4>Pickup and Delivery</h4>
            <p>We offer Pick Up and Delivery services around Kiambu and parts of Nairobi, and ensure it is on time as specified in your order!</p>
            <Link to='/votive-laundry-schedule-pick-up'>
            <button className="hero-btn">Schedule Now &rarr;</button>
            </Link>
          </div>

          {/* Contact Us Section */}
          <div className="hero-box hero-contact">
            <FaMobileAlt className="hero-icon" />
            <h4>Contact Us</h4>
            <p>Call us today and make your order. We'll pick wherever you are at your convenience.</p>
            <Link to='tel:+254 757 167022'> <button className="hero-btn">Call Now &rarr;</button> </Link>
          </div>
        </div>
      </div>
    )
}

export default Hero;