import React from 'react'
import WhatsApp from './components/Whatsapp';
// import Fullscreenlogo from './components/Fullscreenlogo';
import '../src/styles/home.css'
import Loader from './components/Loader';
import Header from './components/Header';
import Counter from './components/Counter';

export default function Home() {
    return (
        <div className='home'>
            {/* <Fullscreenlogo /> */}
            <Loader />
            <WhatsApp />
            <Header />
            <Counter />
        </div>
    )
}
