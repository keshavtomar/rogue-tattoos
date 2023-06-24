import React, { useState, useEffect } from 'react'
import '../styles/header.css'
import MenuIcon from '@mui/icons-material/Menu';
import Brand from './Brand';
import aboutUs from '../data/content.jsx'

export default function Header() {
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
                tabElement.classList.add('black');
            } else {
                tabElement.classList.remove('black');
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
                    <div className="logo">
                        <Brand />
                    </div>
                    <div className="menu">
                        <ul className={isOpen ? 'showing' : ''}>
                            <li className='bblur'><a className='nav-link' href="/">Home</a></li>
                            <li className='bblur'><a className='nav-link' href="/">About</a></li>
                            <li className='bblur'><a className='nav-link' href="/">Blog</a></li>
                            <li className='bblur'><a className='nav-link' href="/">Gallery</a></li>
                            <li className='bblur'><a className='nav-link' href="/">Contact</a></li>
                        </ul>
                    </div>
                </tav>

                <div class="acontainer">
                    <div class="acircles-wrapper">
                        <div class="acircle acircle-lg">
                            <div class="acircle acircle-md">
                                <div class="acircle acircle-sm"></div>
                            </div>
                        </div>
                    </div>
                </div>

                <h1 id="landing-text1">
                    <span>R</span>
                    <span>o</span>
                    <span>g</span>
                    <span>u</span>
                    <span>e</span>
                </h1>
                <h1 id="landing-text2">
                    <span>T</span>
                    <span>a</span>
                    <span>t</span>
                    <span>t</span>
                    <span>o</span>
                    <span>o</span>
                    <span>s</span>
                    <span id='est'>Est. 2015</span>
                </h1>


            </header>
            <hr className='horizontal-row' />
            <div className="content">
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
