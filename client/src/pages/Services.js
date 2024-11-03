import React from 'react';
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import ServicesHero from '../components/ServicesHero';
import Pricing from '../components/Pricing';

function Services() {
    return (
        <div>
            <Navbar />
            <ServicesHero />
            <Pricing />
            <Footer />
        </div>

    )
}

export default Services;