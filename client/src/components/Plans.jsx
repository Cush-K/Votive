import React, { useEffect, useRef } from "react";
import { Link } from "react-router-dom"

function Plans() {
    const plansRef = useRef(null);

    useEffect(() => {
        const plansContainer = plansRef.current;
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        entry.target.classList.add("visible");
                    } else {
                        entry.target.classList.remove("visible");
                    }
                });
            },
            { threshold: 0.5 }
        );

        const plans = plansContainer.querySelectorAll(".plans");
        plans.forEach((plan) => observer.observe(plan));

        return () => {
            plans.forEach((plan) => observer.unobserve(plan));
        };
    }, []);

    return (
        <section className="plans-section">
            <div className="plans-container" ref={plansRef}>
                <h1>Choose Your Perfect Monthly Plan</h1>
                <div className="plans-boxes">
                    <div className="plans">
                        <img src="images/bronze.png" alt="bronze" />
                        <div className="plans-details">
                            <div className="plan-item">
                                <span className="tick-mark"></span>
                                <p>Standard Bag (Suitable for 1-2 people)</p>
                            </div>
                            <div className="plan-item">
                                <span className="tick-mark"></span>
                                <p>1 free duvet wash</p>
                            </div>
                            <div className="plan-item">
                                <span className="tick-mark"></span>
                                <p>2 pickups per month</p>
                            </div>
                            <div className="plan-item">
                                <span className="tick-mark"></span>
                                <p>Up to 20% savings on normal pricing*</p>
                            </div>
                        </div>
                        <Link to='/contact-votive-laundry'>
                        <button>Get Started</button>
                        </Link>
                    </div>

                    <div className="plans">
                        <img src="images/silver.png" alt="bronze" />
                        <div className="plans-details">
                            <div className="plan-item">
                                <span className="tick-mark"></span>
                                <p>2 Standard Bags (Suitable for 3-5 people)</p>
                            </div>
                            <div className="plan-item">
                                <span className="tick-mark"></span>
                                <p>1 free duvet wash</p>
                            </div>
                            <div className="plan-item">
                                <span className="tick-mark"></span>
                                <p>2 pickups per month</p>
                            </div>
                            <div className="plan-item">
                                <span className="tick-mark"></span>
                                <p>Free Minor Repairs</p>
                            </div>
                            <div className="plan-item">
                                <span className="tick-mark"></span>
                                <p>Up to 30% savings on normal pricing*</p>
                            </div>
                        </div>
                        <Link to='/contact-votive-laundry'>
                        <button>Get Started</button>
                        </Link>
                    </div>

                    <div className="plans">
                        <img src="images/gold.png" alt="bronze" />
                        <div className="plans-details">
                            <div className="plan-item">
                                <span className="tick-mark"></span>
                                <p>4 Standard Bags (Suitable for 6+ people)</p>
                            </div>
                            <div className="plan-item">
                                <span className="tick-mark"></span>
                                <p>1 free duvet wash</p>
                            </div>
                            <div className="plan-item">
                                <span className="tick-mark"></span>
                                <p>2 pickups per month</p>
                            </div>
                            <div className="plan-item">
                                <span className="tick-mark"></span>
                                <p>Free Minor Repairs</p>
                            </div>
                            <div className="plan-item">
                                <span className="tick-mark"></span>
                                <p>Up to 40% savings on normal pricing*</p>
                            </div>
                        </div>
                        <Link to='/contact-votive-laundry'>
                        <button>Get Started</button>
                        </Link>
                    </div>

                </div>
                <p>*Terms and Conditions Apply</p>
            </div>
        </section>
    );
}

export default Plans;
