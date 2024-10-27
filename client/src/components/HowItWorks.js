import React from "react";
import { FaShippingFast} from "react-icons/fa";
import { MdLocalLaundryService, MdMoped, MdPhonelinkRing } from 'react-icons/md';

function HowItWorks(){
    return (
        <div className="how-it-works-section">
            <h1>How It Works</h1>
            <p>FOUR Easy Steps!</p>
            <div className="how-it-works-boxes">
                <div className="how-it-works-box">
                    <div className="how-it-works-icon">
                    <MdPhonelinkRing />
                    </div>
                    <p><strong>CALL</strong>/Whatsapp/SMS us to make your order</p>
                </div>
                <div className="how-it-works-box">
                    <div className="how-it-works-icon">
                    <MdMoped />
                    </div>
                    <p>We <strong>PICK</strong> laundry from most parts of Kiambu and Nairobi Counties</p>
                </div>
                <div className="how-it-works-box">
                    <div className="how-it-works-icon">
                        <MdLocalLaundryService />
                    </div>
                    <p>We <strong>CLEAN</strong>, press, and fold your laundry with attention to quality</p>
                </div>
                <div className="how-it-works-box">
                    <div className="how-it-works-icon">
                    <FaShippingFast />
                    </div>
                    <p>We <strong>DELIVER</strong> your items back to you clean and ready to wear!</p>
                </div>
            </div>
        </div>
    )
}

export default HowItWorks;