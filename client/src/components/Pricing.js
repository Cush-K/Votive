import React from "react";
import { Link } from "react-router-dom";

function Pricing(){
    return (
        <div className="pricing">
        <div className="bulk-pricing">
            <h2>Bulk Pricing</h2>
            <p><span>Laundry Per Kilo</span> <span>Sh. 300</span></p>
            <p><span>Curtains Per Kilo</span> <span>Sh. 500</span></p>
            <p><span>Shoes Per Pair</span> <span>Sh. 200</span></p>
            <p><span>Carpets Per SQFT</span> <span>Sh. 40</span></p>
            <button className="pricing-button"><Link to='/votive-laundry-schedule-pick-up'>SCHEDULE PICK UP &rarr;</Link></button>

        </div>
        <div className="item-pricing">
            <h2>Pricing Per Item</h2>
            <div className="item-list">
                <p><span><strong>2 Piece Suit (Male/Female)</strong></span><span>Sh. 500</span></p>
                <p><span><strong>3 Piece Suit (Male/Female)</strong></span><span>Sh. 700</span></p>
                <p><span><strong>Shirt</strong></span><span>Sh. 200</span></p>
                <p><span><strong>Blouse/Top</strong></span><span>Sh. 150</span></p>
                <p><span><strong>Suit Coat</strong></span><span>Sh. 300</span></p>
                <p><span><strong>Sweater</strong></span><span>Sh. 250</span></p>
                <p><span><strong>Trouser/Skirt</strong></span><span>Sh. 200</span></p>
                <p><span><strong>Shorts</strong></span><span>Sh. 150</span></p>
                <p><span><strong>Dress</strong> </span><span>Sh. 300</span></p>
                <p><span><strong>Dinner Dress </strong></span><span>Sh. 350</span></p>
                <p><span><strong>Pleated Skirt</strong> </span><span>Sh. 400</span></p>
                <p><span><strong>Jumper</strong> </span><span>Sh. 300</span></p>
                <p><span><strong>Jacket (Regular)</strong> </span><span>Sh. 350</span></p>
                <p><span><strong>College Jacket</strong> </span><span>Sh. 500</span></p>
                <p><span><strong>College Jacket (Leather Patches)</strong> </span><span>Sh. 350</span></p>
                <p><span><strong>Leather Jacket (Synthetic)</strong> </span><span>Sh. 700</span></p>
                <p><span><strong>Leather Jacket (Natural)</strong> </span><span>Sh. 1,200</span></p>
                <p><span><strong>Linen and Corduroy Coats</strong> </span><span>Sh. 550</span></p>
                <p><span><strong>Kaunda Suit</strong> </span><span>Sh. 450</span></p>
                <p><span><strong>African Suit</strong> </span><span>Sh. 500</span></p>
                <p><span><strong>Baseball Cap</strong> </span><span>Sh. 100</span></p>
                <p><span><strong>Dust Coat</strong> </span><span>Sh. 300</span></p>
                <p><span><strong>Half Coat</strong> </span><span>Sh. 200</span></p>
                <p><span><strong>Wedding Gown</strong> </span><span>Sh. 5,500</span></p>
                <p><span><strong>Graduation Gown</strong> </span><span>Sh. 800</span></p>
                <p><span><strong>Towel (Small)</strong> </span><span>Sh. 400</span></p>
                <p><span><strong>Towel (Large)</strong> </span><span>Sh. 500</span></p>
                <p><span><strong>Duvet (4x6)</strong> </span><span>Sh. 550</span></p>
                <p><span><strong>Duvet (5x6)</strong> </span><span>Sh. 750</span></p>
                <p><span><strong>Duvet (6x6)</strong> </span><span>Sh. 950</span></p>
                <p><span><strong>Duvet (7x8)</strong> </span><span>Sh. 1,200</span></p>
                <p><span><strong>Blanket (4x6)</strong> </span><span>Sh. 600</span></p>
                <p><span><strong>Blanket (5x6)</strong> </span><span>Sh. 800</span></p>
                <p><span><strong>Blanket (6x6)</strong> </span><span>Sh. 1,000</span></p>
                <p><span><strong>Throw Blanket</strong> </span><span>Sh. 300</span></p>
                <p><span><strong>Quilt (4x6)</strong> </span><span>Sh. 400</span></p>
                <p><span><strong>Quilt (5x6)</strong> </span><span>Sh. 600</span></p>
                <p><span><strong>Quilt (6x6)</strong> </span><span>Sh. 800</span></p>
                <p><span><strong>Quilt (7x8) </strong></span><span>Sh. 1,000</span></p>
                <p><span><strong>Bedsheet</strong> </span><span>Sh. 200</span></p>
                <p><span><strong>Mattress/Duvet Cover</strong> </span><span>Sh. 400</span></p>
                <p><span><strong>Pillow (Fibre)</strong> </span><span>Sh. 300</span></p>
                <p><span><strong>Pillow (Feather)</strong> </span><span>Sh. 500</span></p>
                <p><span><strong>Pillow Case</strong> </span><span>Sh. 100</span></p>
                <p><span><strong>Hand Bag</strong> </span><span>Sh. 350</span></p>
                <p><span><strong>Backpack</strong> </span><span>Sh. 400</span></p>
                </div>
                <button className="pricing-button"><Link to='/votive-laundry-schedule-pick-up'>SCHEDULE PICK UP &rarr;</Link></button>
                <div className="caveat">
                    <p>Please note that these are our current base prices.
                         We do assess reasonable additional charges for garments and details that demand extraordinary care or additional labor in order to clean properly.</p>
                </div>
            </div>
        </div>
    );
}

export default Pricing;