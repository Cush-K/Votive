import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FaXTwitter, FaRegThumbsUp } from "react-icons/fa6";
import { FaFacebookF, FaInstagram } from "react-icons/fa";
import { CiLocationOn } from "react-icons/ci";
import { TfiEmail } from "react-icons/tfi";
import { FiPhone } from "react-icons/fi";
import { useSnackbar } from "notistack";

function ContactForm() {
    const { enqueueSnackbar } = useSnackbar();
    const [messages, setMessages] = useState({
        firstName: "",
        lastName: "",
        email: "",
        phoneNumber: "",
        message: "",
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setMessages((prevMessages) => ({
            ...prevMessages,
            [name]: value,
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        if (!messages.firstName || !messages.email || !messages.message) {
            enqueueSnackbar("Please fill out all required fields.", { variant: "warning" });
            return;
        }

        // Send data to the backend
        fetch("http://127.0.0.1:5555/api/messages", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            credentials: "include",
            body: JSON.stringify(messages),
        })
            .then((res) => {
                if (res.ok) {
                    enqueueSnackbar("Message sent successfully", { variant: "success" });
                    setMessages({
                        firstName: "",
                        lastName: "",
                        email: "",
                        phoneNumber: "",
                        message: "",
                    });
                } else {
                    enqueueSnackbar("Failed to send the message. Please try again.", { variant: "error" });
                }
            })
            .catch((error) => {
                console.error(error);
                enqueueSnackbar("An error occurred while trying to send the message.", { variant: "error" });
            });
    };

    return (
        <div className="contact-info">
            <div className="info-container">
                <div className="our-info">
                    <h1>Our Info</h1>
                    <div className="info-item">
                        <CiLocationOn className="info-icon location" />
                        <h3>50 meters from Total Petrol Station, Kiambu road (Opp. Entrance to Edenville)</h3>
                    </div>
                    <div className="info-item phone">
                        <FiPhone className="info-icon" />
                        <h3>
                            <Link to="tel:+254757167022">+254 757 167022</Link>
                        </h3>
                    </div>
                    <div className="info-item">
                        <TfiEmail className="info-icon" />
                        <h3>
                            <Link to="mailto:votivelaundry@gmail.com">info@votivelaundry.co.ke</Link>
                        </h3>
                    </div>
                    <div className="info-item">
                        <FaRegThumbsUp className="info-icon" />
                        <div className="social-icons">
                            <Link to="https://www.facebook.com/VotiveLaundry" target="_blank">
                                <FaFacebookF className="icon" />
                            </Link>
                            <Link to="https://x.com/votive_Laundry" target="_blank">
                                <FaXTwitter className="icon" />
                            </Link>
                            <Link to="https://www.instagram.com/votive_laundry" target="_blank">
                                <FaInstagram className="icon" />
                            </Link>
                        </div>
                    </div>
                </div>
                <div className="form">
                    <h1>Leave Us A Message</h1>
                    <form onSubmit={handleSubmit}>
                        <div className="name-fields">
                            <input
                                type="text"
                                name="firstName"
                                value={messages.firstName}
                                placeholder="First Name"
                                onChange={handleChange}
                                required
                            />
                            <input
                                type="text"
                                name="lastName"
                                value={messages.lastName}
                                placeholder="Last Name"
                                onChange={handleChange}
                                required
                            />
                        </div>
                        <div className="contact-fields">
                            <input
                                type="email"
                                name="email"
                                value={messages.email}
                                placeholder="Email"
                                onChange={handleChange}
                                required
                            />
                            <input
                                type="text"
                                name="phoneNumber"
                                value={messages.phoneNumber}
                                placeholder="Phone"
                                onChange={handleChange}
                                required
                            />
                        </div>
                        <textarea
                            name="message"
                            value={messages.message}
                            placeholder="Type Your Message Here ..."
                            onChange={handleChange}
                            required
                        />
                        <button type="submit">Submit</button>
                    </form>
                </div>
            </div>
        </div>
    );
}

export default ContactForm;
