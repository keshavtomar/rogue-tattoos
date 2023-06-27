import React, { useEffect, useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-coverflow";
// import "swiper/css/pagination";

import "../styles/swiper.css";

// import required modules
import { EffectCoverflow, Pagination } from "swiper";

export default function App() {


    return (
        <>
            <Swiper
                effect={"coverflow"}
                grabCursor={true}
                centeredSlides={true}
                initialSlide={2}
                loop={true}
                slideActiveClass="front-slide"
                slidesPerView={"auto"}
                keyboard={true}
                coverflowEffect={{
                    rotate: 50,
                    stretch: 0,
                    depth: 100,
                    modifier: 1,
                    slideShadows: true,
                }}
                pagination={true}
                modules={[EffectCoverflow, Pagination]}
                className="mySwiper"
            >
                <SwiperSlide>
                    <img src="images/bg1.jpg" alt="rogue-tattoos" />
                </SwiperSlide>
                <SwiperSlide>
                    <img src="images/bg2.jpg" alt="rogue-tattoos" />
                </SwiperSlide>
                <SwiperSlide>
                    <img src="images/bg3.jpg" alt="rogue-tattoos" />
                </SwiperSlide>
                <SwiperSlide>
                    <img src="images/bg4.jpg" alt="rogue-tattoos" />
                </SwiperSlide>
                <SwiperSlide>
                    <img src="images/bg5.jpg" alt="rogue-tattoos" />
                </SwiperSlide>
                <SwiperSlide>
                    <img src="images/bg6.jpg" alt="rogue-tattoos" />
                </SwiperSlide>
                <SwiperSlide>
                    <img src="images/bg7.jpg" alt="rogue-tattoos" />
                </SwiperSlide>
            </Swiper >
        </>
    );
}
