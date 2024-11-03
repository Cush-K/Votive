import React, { useEffect } from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import ContactForm from './ContactForm';


function Contacts() {
    useEffect(() => {
        document.title = 'Contact | Votive Laundry and Dry Cleaning';
    }, [])
    return (
        <div className='contacts'>
            <Navbar />
            <div className='contact-container'>
                <h1>Contact Us</h1>
                <div>
                    <iframe
                        width="100%"
                        height="300"
                        frameborder="0"
                        marginheight="0"
                        marginwidth="0"
                        src="https://maps.google.com/maps?width=100%25&amp;height=600&amp;hl=en&amp;q=votive%20laundry%20and%20dry%20cleaning+(votive%20laundry%20and%20drycleaning)&amp;t=&amp;z=14&amp;ie=UTF8&amp;iwloc=B&amp;output=embed">
                    </iframe>
                </div>
            </div>
            <ContactForm />
            <Footer />
        </div>
    )
}

export default Contacts;