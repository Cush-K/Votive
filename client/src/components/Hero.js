import React from "react";
import { FaClock, FaTruck, FaMobileAlt } from "react-icons/fa"; 

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
            <p><strong>Monday - Friday:</strong> 08:00AM - 6:00PM</p>
            <p><strong>Saturday:</strong> 08:00AM - 5:00PM</p>
            <p><strong>Sunday:</strong> Closed</p>
            <button className="hero-btn">See More &rarr;</button> {/* Hover Button */}
          </div>

          {/* Pickup and Delivery Section */}
          <div className="hero-box hero-pickup">
            <FaTruck className="hero-icon" />
            <h4>Pickup and Delivery</h4>
            <p>We offer Pick Up and Delivery services around Kiambu and parts of Nairobi, and ensure it is on time as specified in your order!</p>
            <button className="hero-btn">Schedule Now &rarr;</button> {/* Hover Button */}
          </div>

          {/* Contact Us Section */}
          <div className="hero-box hero-contact">
            <FaMobileAlt className="hero-icon" />
            <h4>Contact Us</h4>
            <p>Call us today and make your order. We'll pick wherever you are at your convenience.</p>
            <button className="hero-btn">Call Now &rarr;</button> {/* Hover Button */}
          </div>
        </div>
      </div>
    )
}

export default Hero;