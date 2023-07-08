import React, { useEffect } from 'react'
import '../styles/mousefollowingeyes.css';

export default function MouseFollowingEyes() {

    const followLogic1 = () => {
        document.addEventListener("mousemove", function (event) {
            var eye = document.querySelector(".eye1");
            var x = (eye.offsetWidth / 2) + eye.getBoundingClientRect().left;
            var y = (eye.offsetHeight / 2) + eye.getBoundingClientRect().top;
            var rad = Math.atan2(event.pageX - x, event.pageY - y);
            var rot = (rad * (180 / Math.PI) * -1) + 180;
            eye.style.transform = 'rotate(' + rot + 'deg)';
        });
    }
    const followLogic2 = () => {
        document.querySelector('body').addEventListener("mousemove", function (event) {
            var eye = document.querySelector(".eye2");
            var x = (eye.offsetWidth / 2) + eye.getBoundingClientRect().left;
            var y = (eye.offsetHeight / 2) + eye.getBoundingClientRect().top;
            var rad = Math.atan2(event.pageX - x, event.pageY - y);
            var rot = (rad * (180 / Math.PI) * -1) + 180;
            eye.style.transform = 'rotate(' + rot + 'deg)';
        });
    }

    useEffect(() => {
        followLogic1();
        followLogic2();
    }, []);

    return (
        <div>
            <div className='container'>
                <div className='eye1'></div>
                <div className='eye2'></div>
            </div>
        </div>
    )
}
