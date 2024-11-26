import React from "react";
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/autoplay'; // Import autoplay CSS
import { Navigation, Autoplay } from 'swiper/modules'; // Import Autoplay module
import { FaHeart} from 'react-icons/fa'; // Import icons for like and share buttons
import { SlActionRedo } from 'react-icons/sl';
function SwipeImages() {
    return (
        <>
            <Swiper
                navigation={true} 
                modules={[Navigation, Autoplay]} // Add Autoplay to modules
                className="mySwiper"
                spaceBetween={5} /* Adjust spacing between slides */
                slidesPerView={4} /* Shows 4 slides at once */
                loop={true} /* Enables infinite looping */
                autoplay={{
                    delay: 3000, // Delay between transitions (in milliseconds)
                    disableOnInteraction: false, // Keeps autoplay running after user interaction
                    pauseOnMouseEnter: true // Pauses the autoplay on hover
                }}
                breakpoints={{
                    640: { slidesPerView: 2, spaceBetween: 5 },
                    768: { slidesPerView: 3, spaceBetween: 5 },
                    1024: { slidesPerView: 4, spaceBetween: 5 },
                }}
            >
                <SwiperSlide>
                    <div className="image-container">
                        <img src="images/curtains.jpeg" alt="Votive Logo" />
                        <div className="hover-overlay">
                            <div className="overlay-buttons">
                                <button className="like-btn"><FaHeart /></button>
                                <button className="share-btn"><SlActionRedo /></button>
                            </div>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="image-container">
                        <img src="images/curtains.jpeg" alt="Votive Logo" />
                        <div className="hover-overlay">
                            <div className="overlay-buttons">
                                <button className="like-btn"><FaHeart /></button>
                                <button className="share-btn"><SlActionRedo /></button>
                            </div>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="image-container">
                        <img src="images/curtains.jpeg" alt="Votive Logo" />
                        <div className="hover-overlay">
                            <div className="overlay-buttons">
                                <button className="like-btn"><FaHeart /></button>
                                <button className="share-btn"><SlActionRedo /></button>
                            </div>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="image-container">
                        <img src="images/curtains.jpeg" alt="Votive Logo" />
                        <div className="hover-overlay">
                            <div className="overlay-buttons">
                                <button className="like-btn"><FaHeart /></button>
                                <button className="share-btn"><SlActionRedo /></button>
                            </div>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="image-container">
                        <img src="images/curtains.jpeg" alt="Votive Logo" />
                        <div className="hover-overlay">
                            <div className="overlay-buttons">
                                <button className="like-btn"><FaHeart /></button>
                                <button className="share-btn"><SlActionRedo /></button>
                            </div>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="image-container">
                        <img src="images/curtains.jpeg" alt="Votive Logo" />
                        <div className="hover-overlay">
                            <div className="overlay-buttons">
                                <button className="like-btn"><FaHeart /></button>
                                <button className="share-btn"><SlActionRedo /></button>
                            </div>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="image-container">
                        <img src="images/curtains.jpeg" alt="Votive Logo" />
                        <div className="hover-overlay">
                            <div className="overlay-buttons">
                                <button className="like-btn"><FaHeart /></button>
                                <button className="share-btn"><SlActionRedo /></button>
                            </div>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="image-container">
                        <img src="images/curtains.jpeg" alt="Votive Logo" />
                        <div className="hover-overlay">
                            <div className="overlay-buttons">
                                <button className="like-btn"><FaHeart /></button>
                                <button className="share-btn"><SlActionRedo /></button>
                            </div>
                        </div>
                    </div>
                </SwiperSlide>
            </Swiper>
        </>
    );
}

export default SwipeImages;