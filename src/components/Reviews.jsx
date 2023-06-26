import React from 'react';
import "../styles/review.css";
import Stars from "../components/Stars";
import Avatar from "@mui/material/Avatar";
import review from "../data/review";

export default function Review() {
    const showreviews = () => {
        const reviews = [];
        const it = review.length;
        for (let i = 0; i < it; i++) {
            reviews.push(
                <div className="review-card fly-hidden">
                    <Avatar
                        className="avatar"
                        alt={review[i].name}
                        src="../public/images/a.png"
                        sx={{ height: 56, width: 56 }}
                    />
                    <Stars filled={review[i].stars} />
                    <hr />
                    <p>{review[i].review.slice(0, 170)}...</p>
                    <a className="review-link" href="#home">Read More</a>
                    <h4 className="review-card-name">{review[i].name}</h4>
                    <p className="review-card-date">{review[i].date}</p>
                </div>
            );
        }
        return reviews;
    }


    const card = document.querySelector('.review-card');

    if (card) {
        card.addEventListener('mouseenter', () => {
            card.classList.add('zoomOff');
        });

        card.addEventListener('mouseleave', () => {
            card.classList.remove('zoomOff');
        });
    }

    return (
        <div className="review-section">
            <h2>
                <span className='line-pass'>
                    Reviews
                </span>
            </h2>
            <div className="reviews">
                {showreviews()}
            </div>

        </div>
    );
}
