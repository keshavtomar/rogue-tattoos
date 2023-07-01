import React from 'react'
import '../styles/contact.css'

export default function Contact() {
    return (
        <div className='section my-5'>
            <h2 className='line-pass'>Contact Us</h2>
            <div className='row' style={{ 'width': '100%' }}>
                <div className='col-lg-8 col-md-12'>
                    <div className='address'>
                        Address : B- 1/18- B Paschim Vihar, New Delhi, Delhi 110063
                        <div className='details'>
                            <a href="tel:+919971947774" className='mx-3'>P.no : 9971947774 </a>
                            <a href="tel:+919971947774" className='mx-3'>Email : theroguetattoos@gmail.com</a>
                        </div>
                    </div>
                    <div className='d-block'>
                        <iframe className='map' src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3500.630028534739!2d77.10826817394077!3d28.67079448234487!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390d038f7e282307%3A0x2009a1cfc29072df!2sThe%20Rogue%20Tattoos%20%7C%20Best%20Tattoo%20Studio%20%7C%20Permanent%20Tattoo%20Artist%20In%20Paschim%20Vihar%20Delhi!5e0!3m2!1sen!2sin!4v1687362491752!5m2!1sen!2sin" style={{ 'border': '0px' }} allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
                    </div>
                </div>
                <div className='col-lg-4 col-md-12'>
                    <div className='timing'>
                        <h5 className='my-3'>Timings</h5>
                        <p>Monday : 11:00 am  -   09:00 pm</p>
                        <p>Tuesday : 11:00 am  -   09:00 pm</p>
                        <p>Wednesday : 11:00 am  -   09:00 pm</p>
                        <p>Thursday : 11:00 am  -   09:00 pm</p>
                        <p>Friday : 11:00 am  -   09:00 pm</p>
                        <p>Saturday : 11:00 am  -   09:00 pm</p>
                        <p>Sunday : 11:00 am  -   09:00 pm</p>
                    </div>
                </div>
            </div>
        </div >
    )
}
