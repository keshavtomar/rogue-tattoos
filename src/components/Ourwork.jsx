import React, { useEffect } from 'react';
import "../styles/ourwork.css";


export default function Ourwork() {
    useEffect(() => {
        const observer = new IntersectionObserver((entries) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('fly-show');
                } else {
                    entry.target.classList.remove('fly-show');
                }
            });
        });

        const hiddenElements = document.querySelectorAll('.fly-hidden');
        hiddenElements.forEach((el) => observer.observe(el));

        // Clean up the observer when the component unmounts
        return () => {
            hiddenElements.forEach((el) => observer.unobserve(el));
        };
    }, []);


    return (
        <div className='ourwork-section'>
            <h2>
                <span className='line-pass'>
                    What we do
                </span>
            </h2>
            <div className='ourwork'>
                <div className='work-card'>
                    <div className='work-icon'>
                        <img id="permanent-tattoo-icon" src='images/ourwork/permanent-tattoo.svg' alt='permanent-tattoo'></img>
                    </div>
                    <h5 className='work-heading'>Permanent Tattoos</h5>
                    <p className='word-define fly-hidden'>Express your individuality with lasting artwork that becomes a part of you.</p>
                </div>
                <div className='work-card'>
                    <div className='work-icon'>
                        <img src='images/ourwork/customise-designs.svg' alt='permanent-tattoo'></img>
                    </div>
                    <h5 className='work-heading'>Customise Designs</h5>
                    <p className='word-define fly-hidden'>Bring your unique vision to life through personalized and tailor-made tattoo creations.</p>
                </div>
                <div className='work-card'>
                    <div className='work-icon'>
                        <img src='images/ourwork/cover-up-tattoo.svg' alt='permanent-tattoo'></img>
                    </div>
                    <h5 className='work-heading'>Cover up Tattoos</h5>
                    <p className='word-define fly-hidden'>Transform old tattoos into fresh and stunning designs that breathe new life into your skin.</p>
                </div>
                <div className='work-card'>
                    <div className='work-icon'>
                        <img src='images/ourwork/tattoo-redifining.svg' alt='permanent-tattoo'></img>
                    </div>
                    <h5 className='work-heading'>Tattoos redifining</h5>
                    <p className='word-define fly-hidden'>Push the boundaries of art and self-expression with tattoos that challenge norms and redefine beauty.</p>
                </div>
                <div className='work-card'>
                    <div className='work-icon'>
                        <img src='images/ourwork/tattoo-training.svg' alt='permanent-tattoo'></img>
                    </div>
                    <h5 className='work-heading'>Tattoos training</h5>
                    <p className='word-define fly-hidden'>Learn the art of tattooing through comprehensive training programs designed to nurture your skills.
                    </p>
                </div>
                <div className='work-card'>
                    <div className='work-icon'>
                        <img src='images/ourwork/tattoos-removal.svg' alt='permanent-tattoo'></img>
                    </div>
                    <h5 className='work-heading'>Tattoos removal</h5>
                    <p className='word-define fly-hidden'>Say goodbye to unwanted tattoos with safe and effective removal techniques that help you start anew.</p>
                </div>
            </div>
        </div >
    )
}
