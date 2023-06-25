import React from 'react'
import '../styles/followUs.css'
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";

export default function FollowUs() {
    return (
        <div className="followUs">
            <p className="follow-text">FOLLOW</p>
            <div className="follow-icons">
                <a href='https://www.facebook.com/theroguetattoos/' target='_blank'>
                    <FacebookIcon />
                </a>
                <a href='https://www.instagram.com/theroguetattoos/' target='_blank'>
                    <InstagramIcon />
                </a>
            </div>
            <p className="follow-text">US</p>
        </div>
    )
}
