"use client";

import React from "react";
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper/modules';
import Image from "next/image";

import 'swiper/css';

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
            <h5 className="text-[#C4C4C4] text-center text-2xl font-medium mb-10">
                Partnered with worldwide leading companies
            </h5>
            <Swiper
                modules={[Autoplay]}
                spaceBetween={30}
                slidesPerView={5}
                loop={true}
                autoplay={{
                    delay: 1000,
                    disableOnInteraction: false,
                    pauseOnMouseEnter: false,
                }}
                speed={2000}
                allowTouchMove={false}
                breakpoints={{
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
                {logos.map((logo, index) => (
                    <SwiperSlide key={index}>
                        <div className="relative w-[150px] h-[80px] mx-auto">
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