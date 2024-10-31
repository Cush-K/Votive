import React, { useEffect } from "react";
import AboutHero from "../components/AboutHero";
import Navbar from "../components/Navbar";
import AboutContent from "../components/AboutContent";

function About() {

    useEffect(() => {
        document.title = 'About | Votive Laundry and Dry Cleaning';
    }, []);

    return (
        <div className="About">
            <Navbar />
            <AboutHero />
            <AboutContent />
        </div>
    )
}

export default About;