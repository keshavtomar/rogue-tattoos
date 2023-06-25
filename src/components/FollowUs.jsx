import React from 'react'
import '../styles/followUs.css'
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";

export default function FollowUs() {
    const handleScroll = () => {
        const scrollTop = window.pageYOffset || document.documentElement.scrollTop;

        const followUsElement = document.querySelector('.followUs');

        if (followUsElement) {
            if (scrollTop > 0) {
                followUsElement.classList.add('black');
            } else {
                followUsElement.classList.remove('black');
            }
        }
    };

    window.addEventListener('scroll', handleScroll);

    return (
        <div className="followUs">
            <p className="follow-text py-1">FOLLOW</p>
            <div className="follow-icons">
                <a href='https://www.facebook.com/theroguetattoos/' target='_blank'>
                    <FacebookIcon />
                </a>
                <a href='https://www.instagram.com/theroguetattoos/' target='_blank'>
                    <InstagramIcon />
                </a>
            </div>
            <p className="follow-text py-1">US</p>
        </div>
    )
}
