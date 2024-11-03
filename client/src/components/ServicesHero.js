import React from "react";
import { Link } from "react-router-dom";

function ServicesHero() {
    return (
        <div className="services-hero">
            <div className="services-container">
                <div className='services-img'>
                    <img src="images/iron.png" alt="services" />
                </div>
                <div className="services-content">
                    <h1>Votive's Services</h1>
                    <p>We clean pretty much anything. From tiny little sneakers to king-size duvets,
                        if it’s made of flexible material and can fit in our delivery vehicle, odds are we can clean it up beautifully.
                        If you’ve got an item that needs scrubbing, but isn’t featured here, <Link to='/contact-votive-laundry'>contact us</Link> for a quote!</p>
                </div>
            </div>
        </div>
    )
}

export default ServicesHero;