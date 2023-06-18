import React, { useState } from 'react'
import '../styles/header.css'
import '../scripts/header'
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
            </header>
            <div className="content">
                <h2>
                    <span className='line-pass'>
                        About Us
                    </span>
                </h2>
                <p>
                    {aboutUs[0]}
                </p>
                <p>
                    {aboutUs[1]}
                </p>
            </div>
        </div>
    )
}
