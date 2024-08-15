import React, { useEffect, useRef } from 'react';
import '../styles/counter.css'
import DrawIcon from '@mui/icons-material/Draw';
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import MoodIcon from '@mui/icons-material/Mood';
import StarBorderPurple500Icon from '@mui/icons-material/StarBorderPurple500';

// for every class I have used before it, to distinguish that it's a counter class

function ScrollIntoViewTrigger({ onScrollIntoView }) {
    const targetRef = useRef(null);

    useEffect(() => {
        const options = {
            root: null, // viewport
            rootMargin: '0px',
            threshold: 0
        };

        const observer = new IntersectionObserver(([entry]) => {
            if (entry.isIntersecting) {
                onScrollIntoView(); // Call your function or perform your desired actions here
                observer.unobserve(entry.target); // Stop observing the element after it is in view (optional)
            }
        }, options);

        if (targetRef.current) {
            observer.observe(targetRef.current);
        }

        return () => {
            if (targetRef.current) {
                observer.unobserve(targetRef.current);
            }
        };
    }, [onScrollIntoView]);

    return <div ref={targetRef} />;
}

export default function Counter() {


    const showValues = () => {
        let valueDisplays = document.querySelectorAll(".cnum");

        let interval = 1500;

        // console.log(valueDisplays);

        valueDisplays.forEach((valueDisplay, index) => {
            let startValue = 0;
            let endValue = parseInt(valueDisplay.getAttribute("data-val"));
            let duration = Math.floor(interval / endValue);
            let coounter = setInterval(function () {

                if(index!==3){
                    startValue+=10;
                }
                else if(index===2){
                    startValue+=2;
                }
                else{
                    startValue+=1;
                }

                valueDisplay.textContent = startValue;
                if (startValue === endValue) {
                    startValue += '+';
                    clearInterval(coounter);
                }
            }, duration);
        })
    }



    return (
        <div className='counter'>
            <h2><span className='line-pass'>Achievements</span></h2>
            <div onScrollIntoView={showValues} className='cwrapper'>
                <div className='ccontainer fly-hidden'>
                    <DrawIcon className='ci' fontSize='large' />
                    <div style={{ 'textAlign': 'center' }}>
                        <span className='cnum' data-val='3000'>0</span>
                        <span className='xnum'>+</span>
                    </div>
                    <span className='ctext'>Inked tattoos</span>
                </div>
                <div className='ccontainer fly-hidden'>
                    <MoodIcon className='ci' fontSize='large' />
                    <div style={{ 'textAlign': 'center' }}>
                        <span className='cnum' data-val='2500'>0</span>
                        <span className='xnum'>+</span>
                    </div>
                    <span className='ctext'>Happy Customers</span>
                </div>
                <div className='ccontainer fly-hidden'>
                    <StarBorderPurple500Icon className='ci' fontSize='large' />
                    <div style={{ 'textAlign': 'center' }}>
                        <span className='cnum' data-val='140'>0</span>
                        <span className='xnum'>+</span>
                    </div>
                    <span className='ctext'>5 ★ Ratings on Google</span>
                </div>
                <div className='ccontainer fly-hidden'>
                    <AccessTimeIcon className='ci' fontSize='large' />
                    <div style={{ 'textAlign': 'center' }}>
                        <span className='cnum' data-val='12'>0</span>
                        <span className='xnum'>+</span>
                    </div>
                    <span className='ctext'>Years of Experience</span>
                </div>
            </div>
            <ScrollIntoViewTrigger onScrollIntoView={showValues} />
            <hr className='horizontal-row' />
        </div>
    )
}
