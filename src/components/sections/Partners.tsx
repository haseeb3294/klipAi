"use client";

import React from "react";
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper/modules';
import Image from "next/image";

// Import Swiper styles
import 'swiper/css';

// Array of partner logo image paths
const logos = [
    "/logo/logo1.png",
    "/logo/logo2.png",
    "/logo/logo3.png",
    "/logo/logo4.png",
    "/logo/logo5.png",
    "/logo/logo6.png",
];

const Partners: React.FC = () => {
    return (
        <div className="my-20 w-11/12 mx-auto">
            {/* Section heading */}
            <h5 className="text-[#C4C4C4] text-center text-2xl font-medium mb-10">
                Partnered with worldwide leading companies
            </h5>

            {/* Swiper carousel for partner logos */}
            <Swiper
                modules={[Autoplay]} // Enable autoplay module
                spaceBetween={30} // Default space between slides
                slidesPerView={5} // Default number of visible slides
                loop={true} // Enable infinite loop
                autoplay={{
                    delay: 1000, // Delay between auto-slide transitions
                    disableOnInteraction: false, // Don't stop autoplay on user interaction
                    pauseOnMouseEnter: false, // Autoplay continues on hover
                }}
                speed={2000} // Transition speed
                allowTouchMove={false} // Disable manual swipe
                breakpoints={{
                    // Responsive slide settings
                    320: {
                        slidesPerView: 1,
                        spaceBetween: 20,
                    },
                    480: {
                        slidesPerView: 2,
                        spaceBetween: 20,
                    },
                    768: {
                        slidesPerView: 3,
                        spaceBetween: 25,
                    },
                    1024: {
                        slidesPerView: 4,
                        spaceBetween: 30,
                    },
                    1280: {
                        slidesPerView: 5,
                        spaceBetween: 30,
                    },
                }}
                className="partners-swiper"
            >
                {/* Map each logo to a Swiper slide */}
                {logos.map((logo, index) => (
                    <SwiperSlide key={index}>
                        <div className="relative w-[150px] h-[80px] mx-auto">
                            {/* Partner logo image */}
                            <Image
                                src={logo}
                                alt={`Partner logo ${index + 1}`}
                                fill
                                className="object-contain"
                            />
                        </div>
                    </SwiperSlide>
                ))}
            </Swiper>
        </div>
    );
};

export default Partners;
