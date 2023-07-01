import React, { useEffect } from 'react'
import '../styles/whychooseus.css'


export default function Whychooseus() {
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
        <div className='whychooseus-section'>
            <h2>
                <span className='whychooseus-line-pass'>
                    Why choose us
                </span>
            </h2>
            <div className='whychooseus'>
                <div className='whychooseus-card'>
                    <div className='whychooseus-icon'>
                        <img src='images/whychooseus/premium-quality.svg' alt='permanent-tattoo'></img>
                    </div>
                    <h5 className='whychooseus-heading'>Premium Quality</h5>
                    <p className='word-define fly-hidden'>Experience the finest craftsmanship with our selection of high-end equipment and colors.</p>
                </div>
                <div className='whychooseus-card'>
                    <div className='whychooseus-icon'>
                        <img src='images/whychooseus/lifetime-unlimited-refils.svg' alt='permanent-tattoo'></img>
                    </div>
                    <h5 className='whychooseus-heading'>Lifetime Unlimited Refills</h5>
                    <p className='word-define fly-hidden'>Enjoy the freedom of endless refills for a lifetime, completely free of cost. Quench your thirst without limits!</p>
                </div>
                <div className='whychooseus-card'>
                    <div className='whychooseus-icon'>
                        <img src='images/whychooseus/experienced-artistry.svg' alt='permanent-tattoo'></img>
                    </div>
                    <h5 className='whychooseus-heading'>Experienced Artistry</h5>
                    <p className='word-define fly-hidden'>Experience the profound creativity and expertise of an artist with 12 years of mastery.</p>
                </div>
                <div className='whychooseus-card'>
                    <div className='whychooseus-icon'>
                        <img src='images/whychooseus/maximum-hygiene.svg' alt='permanent-tattoo'></img>
                    </div>
                    <h5 className='whychooseus-heading'>Maximum Hygiene</h5>
                    <p className='word-define fly-hidden'>Ensuring utmost cleanliness, we prioritize and maintain the highest standards of hygiene for your well-being.</p>
                </div>
                <div className='whychooseus-card'>
                    <div className='whychooseus-icon'>
                        <img src='images/whychooseus/artistic-customization.svg' alt='permanent-tattoo'></img>
                    </div>
                    <h5 className='whychooseus-heading'>Artistic Customization</h5>
                    <p className='word-define fly-hidden'>Experience the magic of personalized designs, where creativity knows no bounds, and each piece is a true whychooseus of art.
                    </p>
                </div>
                <div className='whychooseus-card'>
                    <div className='whychooseus-icon'>
                        <img src='images/whychooseus/enchanting-atomsphere.svg' alt='permanent-tattoo'></img>
                    </div>
                    <h5 className='whychooseus-heading'>Enchanting Atmosphere</h5>
                    <p className='word-define fly-hidden'>Step into an ambiance that exudes both liveliness and tranquility, offering a harmonious and soothing experience.</p>
                </div>
            </div>
        </div >
    )
}
