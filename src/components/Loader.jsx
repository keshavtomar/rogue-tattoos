
import React, { useEffect } from 'react'
import '../styles/loader.css'

export default function Loader() {
    useEffect(() => {
        const loader = document.querySelector(".loader");

        if (loader) {
            setTimeout(() => {
                loader.classList.add("loader-hidden");
            }, 1000);
        }
    }, []);

    return (
        <div className='loader'>
            <div className="newtons-cradle">
                <div className="newtons-cradle__dot"></div>
                <div className="newtons-cradle__dot"></div>
                <div className="newtons-cradle__dot"></div>
                <div className="newtons-cradle__dot"></div>
            </div>
        </div>
    )
}
