import React, { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom';
import '../styles/header.css'
import MenuIcon from '@mui/icons-material/Menu';

import Brand from './Brand';
import aboutUs from '../data/content.jsx'
import FollowUs from './FollowUs';

export default function Header() {
    const navigate = useNavigate();

    const handleStarted = () => {
        navigate("/getstarted");
    }

    const [isOpen, setisOpen] = useState(false);


    const handleClick = () => {
        if (isOpen === false) {
            setisOpen(true);
        }
        else {
            setisOpen(false);
        }
    }

    const handleScroll = () => {
        const scrollTop = window.pageYOffset || document.documentElement.scrollTop;

        const tabElement = document.querySelector('tav');

        if (tabElement) {
            if (scrollTop > 0) {
                tabElement.classList.add('glass-effect');
            } else {
                tabElement.classList.remove('glass-effect');
            }
        }

    };

    window.addEventListener('scroll', handleScroll);


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
    }, []);

    return (
        <div className="wrapper">
            <header>
                <tav id="#nav">
                    <div onClick={handleClick} className="menu-icon">
                        <MenuIcon />
                    </div>
                    <div className="menu">
                        <div className="logo">
                            <Brand />
                        </div>
                        <ul className={isOpen ? 'showing' : ''}>
                            <li className='bblur'><a className='nav-link' href="/" onClick={handleClick}>Home</a></li>
                            <li className='bblur'><a className='nav-link' href="#about-us" onClick={handleClick}>About Us</a></li>
                            <li className='bblur'><a className='nav-link' href="#reviews" onClick={handleClick}>Reviews</a></li>
                            <li className='bblur'><a className='nav-link' href="/gallery">Gallery</a></li>
                            <li className='bblur'><a className='nav-link' href="#contact" onClick={handleClick}>Contact</a></li>
                        </ul>
                    </div>
                </tav>

                <div className='follow-us-container'>
                    <FollowUs />
                </div>

                <div className='brand-impression'>
                    <h1 id="landing-text1">
                        <span>R</span>
                        <span>O</span>
                        <span>G</span>
                        <span>U</span>
                        <span className='e-text'>
                            E
                            <div className='est-container'>
                                <img className='est' src='images/download3.svg' alt='established in 2015'></img>
                            </div>
                        </span>
                    </h1>
                    <div className='last2'>
                        <h1 id="landing-text2">
                            <span>T</span>
                            <span>A</span>
                            <span>T</span>
                            <span>T</span>
                            <span>O</span>
                            <span>O</span>
                            <span>S</span>
                        </h1>

                    </div>
                </div>

                <div className='consult' onClick={handleStarted}>
                    <button className='consult-button'>Get Started
                        <div class="gs-icon">
                            <svg height="24" width="24" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M0 0h24v24H0z" fill="none"></path><path d="M16.172 11l-5.364-5.364 1.414-1.414L20 12l-7.778 7.778-1.414-1.414L16.172 13H4v-2z" fill="#fff"></path></svg>
                        </div>
                    </button>
                </div>
            </header>


            <hr className='horizontal-row' />
            <div className="content" id="about-us">
                <h2>
                    <span className='line-pass'>
                        About Us
                    </span>
                </h2>
                <p className='fly-hidden'>
                    {aboutUs[0]}
                </p>
                <p className='fly-hidden'>
                    {aboutUs[1]}
                </p>
            </div>
            <hr className='horizontal-row' />
        </div >
    )
}
