import React, { useState } from 'react'
import { Link, Tooltip } from '@mui/material';
import { PhoneInTalk, WhatsApp, Instagram, Close, CropSquare } from '@mui/icons-material';
import '../styles/cta.css'
import '../scripts/cta'


export default function Whatsapp() {
    const [expand, setexpand] = useState(true);

    function handleExpand() {
        if (expand === true) {
            setexpand(false);

        }
        else {
            setexpand(true);
        }
    }

    // const el = document.querySelector('.hidden');

    // if (el) {
    //     el.addEventListener('transitionend', () => {
    //         el.classList.add('vanished');
    //     });
    // }


    return (
        <div className='cta'>
            <div className={expand ? '' : 'hidden'}>
                <div className='ctaIcon ctaPhone'>
                    <Tooltip title="Call" placement='left' arrow>
                        <Link className='cta-phone-link' sx={{ color: 'white', display: 'flex', justifyContent: 'center', marginTop: '3px' }} href='localhost:3000'><PhoneInTalk /></Link>
                    </Tooltip>
                </div>
                <div className='ctaIcon ctaWhatsapp'>
                    <Tooltip title="Whatsapp" placement='left' arrow>
                        <Link className='cta-whatsapp-link' sx={{ color: 'white', display: 'flex', justifyContent: 'center', marginTop: '3px' }} href='localhost:3000'><WhatsApp /></Link>
                    </Tooltip>
                </div>
                <div className='ctaIcon ctaInstagram'>
                    <Tooltip title="Instagram" placement='left' arrow>
                        <Link className='cta-instagram-link' sx={{ color: 'white', display: 'flex', justifyContent: 'center', marginTop: '3px' }} href='localhost:3000'><Instagram /></Link>
                    </Tooltip>
                </div>
            </div>
            <div className='ctaIcon ctaToggle'><Link sx={{ color: 'white', display: 'flex', justifyContent: 'center', marginTop: '3px' }} onClick={handleExpand}>
                {expand === true ?
                    <Close />
                    :
                    <CropSquare />
                }
            </Link></div>
        </div>
    )
}
