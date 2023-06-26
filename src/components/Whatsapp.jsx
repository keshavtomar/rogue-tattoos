import React, { useState } from 'react'
import { Link, Tooltip } from '@mui/material';
import '../styles/cta.css'


export default function Whatsapp() {
    const [expand, setexpand] = useState(true);

    const hideall = () => {
        const el = document.querySelector('#x');

        if (el) {
            el.addEventListener('transitionend', () => {
                el.classList.add('non-display');
            });
        }
    }

    const showall = () => {
        const el = document.querySelector('#x');

        if (el) {
            el.addEventListener('transitionend', () => {
                el.classList.remove('non-display');
            });
        }
    }

    function handleExpand() {
        if (expand === true) {
            setexpand(false);
            hideall();
        }
        else {
            setexpand(true);
            showall();
        }
    }



    return (
        <div className='cta'>
            <div id='x' className={expand ? '' : 'cta-hidden'}>
                <div className='ctaIcon ctaPhone'>
                    <Tooltip title="Call" placement='left' arrow>
                        <Link className='cta-phone-link' sx={{ color: 'white', display: 'flex', justifyContent: 'center', marginTop: '3px' }} href='localhost:3000'><i className="fa-solid fa-phone"></i></Link>
                    </Tooltip>
                </div>
                <div className='ctaIcon ctaWhatsapp'>
                    <Tooltip title="Whatsapp" placement='left' arrow>
                        <Link className='cta-whatsapp-link' sx={{ color: 'white', display: 'flex', justifyContent: 'center', marginTop: '3px' }} href='localhost:3000'><i className="fa-brands fa-whatsapp"></i></Link>
                    </Tooltip>
                </div>
                <div className='ctaIcon ctaInstagram'>
                    <Tooltip title="Instagram" placement='left' arrow>
                        <Link className='cta-instagram-link' sx={{ color: 'white', display: 'flex', justifyContent: 'center', marginTop: '3px' }} href='localhost:3000'><i className="fa-regular fa-envelope"></i></Link>
                    </Tooltip>
                </div>
            </div>
            <div className='ctaIcon ctaToggle'><Link sx={{ color: 'white', display: 'flex', justifyContent: 'center', marginTop: '3px' }} onClick={handleExpand}>
                {expand === true ?
                    <i className="fa-solid fa-xmark"></i>
                    :
                    <i className="fa-regular fa-square"></i>
                }
            </Link></div>
        </div>
    )
}
