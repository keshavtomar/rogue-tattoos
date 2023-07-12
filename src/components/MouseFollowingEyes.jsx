import React, { useEffect } from 'react'
import '../styles/mousefollowingeyes.css';

export default function MouseFollowingEyes() {

    useEffect(() => {
        document.addEventListener("mousemove", function (event) {
            var eye = document.querySelector(".eye1");
            if (eye) {
                var x = 15 + eye.getBoundingClientRect().left;
                var y = 15 + eye.getBoundingClientRect().top;
                var rad = Math.atan2(event.pageX - x, event.pageY - y);
                var rot = (rad * (180 / Math.PI) * -1) + 180;
                eye.style.transform = 'rotate(' + rot + 'deg)';
            }
        });
        document.querySelector('body').addEventListener("mousemove", function (event) {
            var eye = document.querySelector(".eye2");
            if (eye) {
                var x = 15 + eye.getBoundingClientRect().left;
                var y = 15 + eye.getBoundingClientRect().top;
                var rad = Math.atan2(event.pageX - x, event.pageY - y);
                var rot = (rad * (180 / Math.PI) * -1) + 180;
                eye.style.transform = 'rotate(' + rot + 'deg)';
            }
        });
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
