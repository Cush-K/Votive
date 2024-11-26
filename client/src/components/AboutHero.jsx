import React from "react";
import { Link } from "react-router-dom";

function AboutHero() {
    return (
        <div className="about-hero">
            <h1>About Votive Laundry and Dry Cleaning!</h1>
            <h4>48 Hour Turnaround | Competitive Pricing | Discounts Available</h4>
            <button><Link to='/votive-laundry-schedule-pick-up'>SCHEDULE PICK UP &rarr;</Link></button>

            <div className="timeline">
                <h3>Working Hours</h3>
                <p><span>Mon - Fri</span> <span>08:00AM - 07:00PM</span></p>
                <p><span>Saturday</span> <span>08:00AM - 05:00PM</span></p>
                <p><span>Sunday</span> <span>Closed</span></p>
            </div>
        </div>
    );
}

export default AboutHero;