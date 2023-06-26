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
                followUsElement.classList.add('blck');
            } else {
                followUsElement.classList.remove('blck');
            }
        }
    };

    window.addEventListener('scroll', handleScroll);

    return (
        <div className="followUs" style={{ 'paddingRight': '2px' }}>
            <p className="follow-text py-1">FOLLOW</p>
            <div className="follow-icons">
                <a href='https://www.facebook.com/theroguetattoos/' target='_blank'>
                    <i class="fa-brands fa-facebook-f"></i>
                </a>
                <a href='https://www.instagram.com/theroguetattoos/' target='_blank'>
                    <i class="fa-brands fa-instagram"></i>
                </a>
                <a href='https://www.instagram.com/theroguetattoos/' target='_blank'>
                    <i class="fa-brands fa-snapchat"></i>
                </a>
            </div>
            <p className="follow-text py-1">US</p>
        </div>
    )
}
