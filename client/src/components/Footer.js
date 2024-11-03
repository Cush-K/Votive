import React from "react";
import { FaFacebookF, FaInstagram } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { Link } from "react-router-dom";

function Footer() {
    return (
        <div className="footer-section">
            <div className="footer-boxes">
                <div className="footer-box1">
                    <h3>WHY US?</h3>
                    <p>We not only ensure that your laundry items are in perfect condition
                         after our service, we also repair those that may need it. And that is all a call away.</p>
                </div>
                <div className="footer-box2">
                    <h3>CONTACT US</h3>
                    <p>50 meters from Total Petrol Station, Kiambu road (Opp. Entrance to Edenville)</p>
                    <p>Phone: <Link to='tel:+254 757 167022'>+254 757 167022</Link></p>
                    <p>Email: <Link to='mailto: votivelaundry@gmail.com'>info@votivelaundry.co.ke</Link></p>
                    <p><Link to='https://www.google.com/maps/dir/Quick+Mart,+Kiambu+Rd,+Kiambu+Road/VOTIVE+LAUNDRY+AND+DRY+CLEANING,+Kiambu+Road/@-1.2041953,36.8303312,17z/data=!3m1!4b1!4m14!4m13!1m5!1m1!1s0x182f3d987cd4fa71:0x72c82e3e5865e834!2m2!1d36.8334242!2d-1.2024414!1m5!1m1!1s0x182f3d61e849531b:0xcd00684529e1bf42!2m2!1d36.8335029!2d-1.2051006!3e0' target="_blank">HERE ARE THE DIRECTIONS</Link></p>
                </div>
                <div className="footer-box3">
                    <h3>QUICK LINKS</h3>
                    <p><Link to='/about-votive-laundry'>About us</Link></p>
                    <p><Link to='/votive-laundry-services-pricing'>Services</Link></p>
                    <p><Link to='/votive-laundry-schedule-pick-up'>SCHEDULE PICKUP</Link></p>
                </div>
            </div>
            <div className="bot-footer">
                <p>© 2021-2024 by Votive Laundry and Dry Cleaning. All Rights Reserved</p>
                <div>
                <Link to='https://www.facebook.com/VotiveLaundry' target="_blank"><FaFacebookF /></Link>
                <Link to='https://x.com/votive_Laundry' target="_blank"><FaXTwitter /></Link>
                <Link to='https://www.instagram.com/votive_laundry' target="_blank"><FaInstagram /></Link>
                </div>
            </div>
        </div>
    )
}

export default Footer;