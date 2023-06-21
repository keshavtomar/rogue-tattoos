import React from 'react'
import '../styles/contact.css'
import WeatherCard from './WeatherCard'

export default function Contact() {
    return (
        <div className='section'>
            <h2 className='line-pass'>Contact Us</h2>
            <div className='map-weather'>
                <div className='map-container'>
                    <iframe title="map-frame" className='map' src='https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3500.630028534739!2d77.10826817394077!3d28.67079448234487!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390d038f7e282307%3A0x2009a1cfc29072df!2sThe%20Rogue%20Tattoos%20%7C%20Best%20Tattoo%20Studio%20%7C%20Permanent%20Tattoo%20Artist%20In%20Paschim%20Vihar%20Delhi!5e0!3m2!1sen!2sin!4v1687101976310!5m2!1sen!2sin&amp;z=8' />
                </div>
                <div className='weather-container'>
                    <WeatherCard />
                </div>
            </div >
        </div >
    )
}
