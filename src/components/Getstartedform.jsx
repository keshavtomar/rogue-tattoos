import React, { useState, useEffect } from 'react'
import '../styles/getstartedform.css'
import Loader from './Loader'
import MenuIcon from '@mui/icons-material/Menu';
import Brand from './Brand';
import MouseFollowingEyes from './MouseFollowingEyes';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css'


export default function Getstartedform() {
    const toastId = React.useRef(null);
    const notify = () => {
        toastId.current = toast("Sending your Request", {
            autoClose: false,
            closeButton: false
        });
        setTimeout(() => {
            toast.update(toastId.current, {
                render: () => <div>Error Connecting, Call the artist instead</div>,
                type: "error",
                autoClose: 2000,
                closeButton: null
            })
        }, 8000);
    }

    const update = (ob) => {
        toast.update(toastId.current, {
            render: () => <div>{ob.message}</div>,
            type: ob.type,
            autoClose: 1000,
            closeButton: null
        });
    }
    const [formData, setFormData] = useState({
        fullname: "",
        email: "",
        mobile: "",
        isWhatsApp: "",
        message: "",
        date: "",
        time: ""
    })

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
        const scrollTop = window.scrollY || document.documentElement.scrollTop;

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

        if (formData.fullname === "" || formData.mobile === "") {
            toast("Some required fields are empty e.g. Name or Mobile No.", {
                autoClose: 2000,
                type: "warning"
            })
            return;
        }

        notify();
        const data = await fetch(`https://rogue-tattoos-api.onrender.com/save`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(formData),
        });

        const response = await data.json();


        if (response.message === "successs") {
            setFormData({
                fullname: "",
                email: "",
                mobile: "",
                isWhatsApp: "",
                message: "",
                date: "",
                time: "",
            })
            update({ message: "Form Submitted Successfully", type: "success" });
        }
        else {
            update({ message: "Error!, Try again", type: "error" })
        }

    }


    return (
        <div className="form-section">
            <Loader />
            <header className='gallery-header'>
                <tav id="fnav" className={isOpen ? 'glass-effect' : ''}>
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
                    <input type="text" required name='fullname' value={formData.fullname} onChange={setVal} />
                    <label>Full&nbsp;name</label>
                </div>
                <div className="form-control">
                    <input type="number" required name='mobile' value={formData.mobile} onChange={setVal} />
                    <label>Mobile&nbsp;no.</label>
                </div>
                <div className="form-control">
                    <input type="email" name='email' value={formData.email} onChange={setVal} required />
                    <label>Email&nbsp;id</label>
                </div>
                <div className="form-control" style={{ display: 'flex', justifyContent: 'flex-end', alignContent: 'flex-end' }}>
                    <label>WhatsApp</label>
                    <input className='chkbox' checked={isWhatsappAllowed} onChange={handleCheckboxchange} style={{ height: '20px', width: '20px', position: 'relative', top: '13px', backgroundColor: isWhatsappAllowed ? '#a68954' : '', display: 'flex', justifyContent: 'flex-end' }} type="checkbox" />
                </div>
                <div className="form-control" style={{ width: '85%' }}>
                    <input type="text" required name='message' value={formData.message} onChange={setVal} />
                    <label>Write&nbsp;a&nbsp;Message&nbsp;for&nbsp;us</label>
                </div>
                <button className='form-submit-button' onClick={handleFormSubmit}>Get a Callback</button>
            </div>
            <ToastContainer position='bottom-left' theme='dark' className="ToastContainer" />
        </div>
    )
}