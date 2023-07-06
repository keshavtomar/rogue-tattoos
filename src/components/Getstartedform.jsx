import React, { useState, useEffect } from 'react'
import '../styles/getstartedform.css'
import Loader from './Loader'
import MenuIcon from '@mui/icons-material/Menu';
import Brand from './Brand';
import Footer from './Footer';
import MouseFollowingEyes from './MouseFollowingEyes';


export default function Getstartedform() {

    const [isOpen, setisOpen] = useState(false);
    const handleClick = () => {
        if (isOpen === false) {
            setisOpen(true);
        }
        else {
            setisOpen(false);
        }
    }

    const updateLabels = () => {
        const labels = document.querySelectorAll('.form-control label');

        labels.forEach(label => {
            label.innerHTML = label.innerText
                .split('')
                .map((letter, idx) => `<span style="
				transition-delay: ${idx * 50}ms
			">${letter}</span>`)
                .join('');
        });
    }

    useEffect(() => {
        updateLabels();
    }, []);




    //jsx for input
    const [isWhatsappAllowed, setisWhatsappAllowed] = useState(false);

    const handleCheckboxchange = () => {
        setisWhatsappAllowed(!isWhatsappAllowed);
    }

    return (
        <div className="form-section">
            <Loader />
            <header className='gallery-header'>
                <tav id="#gnav">
                    <div onClick={handleClick} className="menu-icon">
                        <MenuIcon />
                    </div>
                    <div className="menu">
                        <div className="logo">
                            <Brand />
                        </div>
                        <ul className={isOpen ? 'showing' : ''}>
                            <li className='bblur'><a className='nav-link' href="/">← Back to Home</a></li>
                        </ul>
                    </div>
                </tav>
            </header>


            <div className='form-container glass-effect'>
                <div className="move-area">
                    <MouseFollowingEyes />
                </div>
                <div className="form-control">
                    <input type="text" required />
                    <label>first&nbsp;name</label>
                </div>

                <div className="form-control">
                    <input type="text" required />
                    <label>last&nbsp;name</label>
                </div>
                <div className="form-control">
                    <input type="text" required />
                    <label>Mobile&nbsp;no.</label>
                </div>
                <div className="form-control" style={{ display: 'flex', justifyContent: 'flex-end', alignContent: 'flex-end' }}>
                    <label>WhatsApp</label>
                    <input className='chkbox' checked={isWhatsappAllowed} onChange={handleCheckboxchange} style={{ height: '20px', width: '20px', position: 'relative', top: '13px', backgroundColor: isWhatsappAllowed ? '#a68954' : '', display: 'flex', justifyContent: 'flex-end' }} type="checkbox" />
                </div>
                <div className="form-control" style={{ width: '85%' }}>
                    <input type="text" required />
                    <label>Write&nbsp;a&nbsp;Message&nbsp;for&nbsp;us</label>
                </div>
                <button className='form-submit-button'>Get a Callback</button>
            </div>
        </div>
    )
}