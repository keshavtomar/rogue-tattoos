import React, { useEffect } from 'react'
import '../styles/mousefollowingeyes.css';

export default function MouseFollowingEyes() {

    const followLogic = () => {
        document.addEventListener("mousemove", function (event) {
            var eye = document.querySelector(".eye");
            var x = eye.offsetLeft + (eye.offsetWidth);
            var y = eye.offsetTop + (eye.offsetHeight);
            var rad = Math.atan2(event.pageX - x, event.pageY - y);
            var rot = (rad * (180 / Math.PI) * -1) + 180;
            // eye.forEach((eye) => {
            //     eye.style.transform = 'rotate(' + rot + 'deg)';
            // })
            eye.style.transform = 'rotate(' + rot + 'deg)';
        });
    }

    useEffect(() => {
        followLogic();
    }, []);

    return (
        <div>
            <div className='container'>
                <div className='eye'></div>
                <div className='eye'></div>
            </div>
        </div>
    )
}
