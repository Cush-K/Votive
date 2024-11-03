import React from "react";
import { Link } from 'react-router-dom';
import { FaXTwitter, FaRegThumbsUp } from "react-icons/fa6";
import { FaFacebookF, FaInstagram } from 'react-icons/fa';
import { CiLocationOn } from "react-icons/ci";
import { TfiEmail } from "react-icons/tfi";
import { FiPhone } from "react-icons/fi";

function ContactForm() {
    return (
        <div className="contact-info">
            <div className="our-info">
                <h1>Our Info</h1>
                <div className="info-item">
                    <CiLocationOn className="icon" /> 
                    <p>50 meters from Total Petrol Station, Kiambu road (Opp. Entrance to Edenville)</p>
                </div>
                <div className="info-item">
                    <FiPhone className="icon" />
                    <h3>Phone: +254 757 167022</h3>
                </div>
                <div className="info-item">
                    <TfiEmail className="icon" />
                    <h3>info@votivelaundry.co.ke</h3>
                </div>
                <div className="info-item">
                <FaRegThumbsUp className="icon"/>
                <div className="social-icons">
                    <Link to='https://www.facebook.com/VotiveLaundry' target="_blank"><FaFacebookF className="icon" /></Link>
                    <Link to='https://x.com/votive_Laundry' target="_blank"><FaXTwitter className="icon" /></Link>
                    <Link to='https://www.instagram.com/votive_laundry' target="_blank"><FaInstagram className="icon" /></Link>
                </div>
                </div>
            </div>
            <div className="form">
                <h1>Leave Us A Message </h1>
                <form>
                    <div className="name-fields">
                        <input type="text" placeholder="First Name" required />
                        <input type="text" placeholder="Last Name" required />
                    </div>
                    <div className="contact-fields">
                        <input type="email" placeholder="Email" required />
                        <input type="Phone" placeholder="Phone" required />
                    </div>
                    <textarea placeholder="Message" required />
                    <button type="submit">Submit</button>
                </form>
            </div>
        </div>
    );
}

export default ContactForm;
