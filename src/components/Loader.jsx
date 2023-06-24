
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
            <div class="newtons-cradle">
                <div class="newtons-cradle__dot"></div>
                <div class="newtons-cradle__dot"></div>
                <div class="newtons-cradle__dot"></div>
                <div class="newtons-cradle__dot"></div>
            </div>
        </div>
    )
}
