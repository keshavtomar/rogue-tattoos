import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-coverflow";


import "../styles/swiper.css";

// import required modules
import { Keyboard, EffectCoverflow, Pagination } from "swiper";

export default function App() {
    return (
        <div>
            <Swiper className="gswiper"
                effect={"coverflow"}
                grabCursor={true}
                centeredSlides={true}
                initialSlide={2}
                slidesPerView={"auto"}
                keyboard={{ enabled: true }}
                coverflowEffect={{
                    rotate: 50,
                    stretch: 0,
                    depth: 100,
                    modifier: 1,
                    slideShadows: true,
                }}
                pagination={true}
                modules={[EffectCoverflow, Pagination, Keyboard]}
            >
                <SwiperSlide className="gswiper-slide">
                    <img src="images/bg1.jpg" alt="rogue-tattoos" loading="lazy" />
                </SwiperSlide>
                <SwiperSlide className="gswiper-slide">
                    <img src="images/bg2.jpg" alt="rogue-tattoos" loading="lazy" />
                </SwiperSlide>
                <SwiperSlide className="gswiper-slide">
                    <img src="images/bg3.jpg" alt="rogue-tattoos" loading="lazy" />
                </SwiperSlide>
                <SwiperSlide className="gswiper-slide">
                    <img src="images/bg4.jpg" alt="rogue-tattoos" loading="lazy" />
                </SwiperSlide>
                <SwiperSlide className="gswiper-slide">
                    <img src="images/bg5.jpg" alt="rogue-tattoos" loading="lazy" />
                </SwiperSlide>
                <SwiperSlide className="gswiper-slide">
                    <img src="images/bg6.jpg" alt="rogue-tattoos" loading="lazy" />
                </SwiperSlide>
                <SwiperSlide className="gswiper-slide">
                    <img src="images/bg7.jpg" alt="rogue-tattoos" loading="lazy" />
                </SwiperSlide>
            </Swiper >
        </div>
    );
}
