import React, { useState, useEffect } from 'react'
import '../styles/getstartedform.css'
import Loader from './Loader'
import { useNavigate } from "react-router-dom";
import MenuIcon from '@mui/icons-material/Menu';
import Brand from './Brand';
import MouseFollowingEyes from './MouseFollowingEyes';


export default function Getstartedform() {
    const [formData, setFormData] = useState({
        fullname: "",
        email: "",
        mobile: "",
        isWhatsApp: "",
        message: "",
        date: "",
        time: "",
    })
    const navigate = useNavigate();
    const setVal = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
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

        const followUsElement = document.querySelector('tav');

        if (followUsElement) {
            if (scrollTop > 0) {
                followUsElement.classList.add('glass-effect');
            } else {
                followUsElement.classList.remove('glass-effect');
            }
        }
    };

    window.addEventListener('scroll', handleScroll);

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

    const handleFormSubmit = async (e) => {
        e.preventDefault();
        const date = new Date();
        const currDate = date.getDate().toString().padStart(2, '0') + "/" + (date.getMonth() + 1).toString().padStart(2, '0') + "/" + date.getFullYear().toString();
        const currTime = date.getHours().toString().padStart(2, '0') + ":" + date.getMinutes().toString().padStart(2, '0');

        formData.isWhatsApp = isWhatsappAllowed;
        formData.date = currDate;
        formData.time = currTime;

        const data = await fetch(`http://localhost:5001/save`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(formData),
        });

        const response = await data.json().then(console.log(data));


        if (response.message === "successs") {
            setFormData({
                fullname: "",
                email: "",
                mobile: "",
                isWhatsApp: "",
                message: "",
                date: "",
                time: "",
            });
            console.log("Data successfully submitted");
            navigate("/");
        }
        else {
            console.log("Not done");
        }

    }


    return (
        <div className="form-section">
            <Loader />
            <header className='gallery-header'>
                <tav id="fnav">
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
                    <input type="text" required name='fullname' value={formData.value} onChange={setVal} />
                    <label>Full&nbsp;name</label>
                </div>
                <div className="form-control">
                    <input type="number" required name='mobile' value={formData.value} onChange={setVal} />
                    <label>Mobile&nbsp;no.</label>
                </div>
                <div className="form-control">
                    <input type="text" required />
                    <label>Email&nbsp;id</label>
                </div>
                <div className="form-control" style={{ display: 'flex', justifyContent: 'flex-end', alignContent: 'flex-end' }}>
                    <label>WhatsApp</label>
                    <input className='chkbox' checked={isWhatsappAllowed} onChange={handleCheckboxchange} style={{ height: '20px', width: '20px', position: 'relative', top: '13px', backgroundColor: isWhatsappAllowed ? '#a68954' : '', display: 'flex', justifyContent: 'flex-end' }} type="checkbox" />
                </div>
                <div className="form-control" style={{ width: '85%' }}>
                    <input type="text" required name='message' value={formData.value} onChange={setVal} />
                    <label>Write&nbsp;a&nbsp;Message&nbsp;for&nbsp;us</label>
                </div>
                <button className='form-submit-button' onClick={handleFormSubmit}>Get a Callback</button>
            </div>
        </div>
    )
}