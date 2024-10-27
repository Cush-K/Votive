import React from "react";
import { FaFacebookF, FaInstagram, FaTwitter } from "react-icons/fa";

function Footer() {
    return (
        <div className="footer-section">
            <div className="footer-boxes">
                <div className="footer-box">
                    <h3>WHY US?</h3>
                    <p>We not only ensure that your laundry items are in perfect condition after our service, we also repair those that may need it. And that is all a call away.</p>
                </div>
                <div className="footer-box">
                    <h3>CONTACT US</h3>
                    <p>50 meters from Total Petrol Station, Kiambu road (Opp. Entrance to Edenville)</p>
                    <p>Phone: +254 757 167022</p>
                    <p>Email: info@votivelaundry.co.ke</p>
                    <p>HERE ARE THE DIRECTIONS</p>
                </div>
                <div className="footer-box">
                    <h3>QUICK LINKS</h3>
                    <p>About us</p>
                    <p>Services</p>
                    <p>SCHEDULE PICKUP</p>
                </div>
            </div>
            <div className="bot-footer">
                <p>© 2021-2024 by Votive Laundry and Dry Cleaning. All Rights Reserved</p>
                <div>
                <FaFacebookF />
                <FaTwitter />
                <FaInstagram />
                </div>
            </div>
        </div>
    )
}

export default Footer;