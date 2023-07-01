import React, { useEffect, useState } from 'react';
import "../styles/review.css";
import review from "../data/review";
import ChildReview from './ChildReview';


//use of swiper library for mobile card effects
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-cards";

import { EffectCards } from "swiper";

export default function Review() {

    const [isMobile, setIsMobile] = useState(window.innerWidth < 764);


    useEffect(() => {
        const handleResize = () => {
            setIsMobile(window.innerWidth < 764);
        };

        window.addEventListener('resize', handleResize);
        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, [isMobile]);

    const card = document.querySelector('.review-card');

    if (card && isMobile) {
        card.addEventListener('mouseenter', () => {
            card.classList.add('zoomOff');
        });

        card.addEventListener('mouseleave', () => {
            card.classList.remove('zoomOff');
        });
    }

    useEffect(() => {
        const observer = new IntersectionObserver((entries) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('fly-show');
                } else {
                    entry.target.classList.remove('fly-show');
                }
            });
        });

        const hiddenElements = document.querySelectorAll('.fly-hidden');
        hiddenElements.forEach((el) => observer.observe(el));

        // Clean up the observer when the component unmounts
        return () => {
            hiddenElements.forEach((el) => observer.unobserve(el));
        };
    }, [isMobile]);

    return (
        <div className="review-section">
            <h2>
                <span className='line-pass'>
                    What our clients say
                </span>
            </h2>

            {isMobile ?
                <div>
                    <Swiper className="cswiper"
                        effect={"cards"}
                        grabCursor={true}
                        modules={[EffectCards]}
                    >
                        {
                            review.map((v, i) => {
                                return (
                                    <SwiperSlide className='cswiper-slide' key={i}><ChildReview review={v} key={i} /></SwiperSlide>
                                )
                            })
                        }
                    </Swiper>
                </div>
                :
                <div className="reviews">
                    {review.map((v, i) => {
                        return (
                            <ChildReview review={v} />
                        )
                    })}
                </div>
            }





        </div>
    );
}
