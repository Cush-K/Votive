import React, { useEffect } from "react";
import AboutHero from "../components/AboutHero";
import Navbar from "../components/Navbar";
import AboutContent from "../components/AboutContent";
import Footer from "../components/Footer";
import AboutC2A from "../components/AboutC2A";

function About() {

    useEffect(() => {
        document.title = 'About | Votive Laundry and Dry Cleaning';
    }, []);

    return (
        <div className="About">
            <Navbar />
            <AboutHero />
            <AboutContent />
            <AboutC2A />
            <Footer />
        </div>
    )
}

export default About;