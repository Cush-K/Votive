import React, { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/autoplay"; // Import autoplay CSS
import { Navigation, Autoplay } from "swiper/modules"; // Import Autoplay module
import { FaHeart } from "react-icons/fa"; // Like button icon
import { SlActionRedo } from "react-icons/sl"; // Share button icon

function SwipeImages() {
    const [swiperImages, setSwiperImages] = useState([]);

    useEffect(() => {
        fetch("/api/images")
            .then((response) => response.json())
            .then((data) => {
                setSwiperImages(data);
            })
            .catch((error) => console.error(error));
    }, []);

    return (
        <Swiper
            navigation={true}
            modules={[Navigation, Autoplay]} // Add Autoplay to modules
            className="mySwiper"
            spaceBetween={5} // Adjust spacing between slides
            slidesPerView={4} // Shows 4 slides at once
            loop={true} // Enables infinite looping
            autoplay={{
                delay: 3000, // Delay between transitions (in milliseconds)
                disableOnInteraction: false, // Keeps autoplay running after user interaction
                pauseOnMouseEnter: true, // Pauses autoplay on hover
            }}
            breakpoints={{
                300: { slidesPerView: 1, spaceBetween: 0 },
                500: { slidesPerView: 2, spaceBetween: 5 },
                640: { slidesPerView: 2, spaceBetween: 5 },
                768: { slidesPerView: 3, spaceBetween: 5 },
                1024: { slidesPerView: 4, spaceBetween: 5 },
            }}
        >
            {swiperImages.map((image) => (
                <SwiperSlide key={image.id}>
                    <div className="image-container">
                        <img
                            className="image-slide"
                            src={image.image_url}
                            alt={image.name}
                        />
                        <div className="hover-overlay">
                            <div className="overlay-buttons">
                                <button className="like-btn">
                                    <FaHeart />
                                </button>
                                <button className="share-btn">
                                    <SlActionRedo />
                                </button>
                            </div>
                        </div>
                    </div>
                </SwiperSlide>
            ))}
        </Swiper>
    );
}

export default SwipeImages;
