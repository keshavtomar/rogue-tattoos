import React, { useEffect } from 'react';
import '../styles/blob.css';
import KUTE from 'kute.js';

const Myblob = () => {
    // useEffect(() => {
    //     const tween = KUTE.fromTo(
    //         '#blob1',
    //         { path: '#blob1' },
    //         { path: '#blob2' },
    //         // { path: '#blob3' },
    //         // { path: '#blob4' },
    //         { repeat: 999, duration: 3000, yoyo: true }
    //     ).start();

    //     return () => {
    //         tween.stop(); // Stop the animation when the component unmounts
    //     };
    // }, []);
    return (
        <img width='350px' height='350px' src='images/blob.svg'></img>
        // <svg
        //     id="visual"
        //     viewBox="0 0 900 600"
        //     xmlns="http://www.w3.org/2000/svg"
        //     xmlnsXlink="http://www.w3.org/1999/xlink"
        //     version="1.1"
        //     className='blob'
        // >
        //     <g transform="translate(453.76589728918026 267.97986952641435)">
        //         <path id='blob1'
        //             d="M127.3 -115.4C158 -96.6 171 -48.3 173.3 2.4C175.7 53 167.4 106.1 136.7 142.9C106.1 179.7 53 200.4 12.5 187.9C-28 175.4 -56.1 129.8 -91.1 92.9C-126.1 56.1 -168 28 -178.5 -10.5C-189 -49 -168.1 -98.1 -133.1 -116.8C-98.1 -135.6 -49 -124 -0.4 -123.7C48.3 -123.3 96.6 -134.1 127.3 -115.4"
        //             fill="none"
        //             stroke="#A68954"
        //             strokeWidth="10"
        //         ></path>
        //     </g>
        //     <g transform="translate(435.8606555771808 330.0715226671481)">
        //         <path id='blob2' visibility='hidden'
        //             d="M130.1 -137.9C159.7 -100.4 168.9 -50.2 157 -11.8C145.2 26.5 112.4 53 82.7 71.7C53 90.4 26.5 101.2 -13.1 114.3C-52.8 127.5 -105.6 142.9 -124.6 124.3C-143.6 105.6 -128.8 52.8 -118.5 10.3C-108.3 -32.3 -102.6 -64.6 -83.6 -102.1C-64.6 -139.6 -32.3 -182.3 9 -191.2C50.2 -200.2 100.4 -175.4 130.1 -137.9"
        //             fill="none" stroke="#A68954" stroke-width="10"></path>
        //     </g>
        //     <g transform="translate(454.2190881552267 312.70339493264424)">
        //         <path id='blob3' visibility='hidden'
        //             d="M81.1 -91.2C108.4 -53.7 136.2 -26.9 136 -0.2C135.9 26.5 107.7 53 80.4 81.5C53 110 26.5 140.5 -12.3 152.8C-51.1 165.1 -102.3 159.3 -126 130.8C-149.6 102.3 -145.8 51.1 -140.3 5.5C-134.7 -40.1 -127.5 -80.1 -103.8 -117.6C-80.1 -155.1 -40.1 -190.1 -6.6 -183.5C26.9 -176.9 53.7 -128.7 81.1 -91.2"
        //             fill="none" stroke="#A68954" stroke-width="10"></path>
        //     </g>
        //     <g transform="translate(453.76589728918026 267.97986952641435)">
        //         <path id='blob4' visibility='hidden'
        //             d="M127.3 -115.4C158 -96.6 171 -48.3 173.3 2.4C175.7 53 167.4 106.1 136.7 142.9C106.1 179.7 53 200.4 12.5 187.9C-28 175.4 -56.1 129.8 -91.1 92.9C-126.1 56.1 -168 28 -178.5 -10.5C-189 -49 -168.1 -98.1 -133.1 -116.8C-98.1 -135.6 -49 -124 -0.4 -123.7C48.3 -123.3 96.6 -134.1 127.3 -115.4"
        //             fill="none" stroke="#A68954" stroke-width="10"></path>
        //     </g>
        // </svg>
    );
};

export default Myblob;
