import React from "react";
import { Link } from "react-router-dom";

function AboutC2A(){
    return (
        <div className="c2a-container">
        <div className="about-c2a">
        <div className="c2a">
            <h2>Schedule with us and see what makes us stand out!</h2>
            <button><Link to='/votive-laundry-schedule-pick-up'>SCHEDULE PICK UP &rarr;</Link></button>
        </div>
        <img src="images/Dry Cleaned Shirts.png" alt="Dry Cleaned Shirts"/>
        </div>
        </div>
    )
}

export default AboutC2A;