import React from 'react'
import WhatsApp from './components/Whatsapp';
// import Fullscreenlogo from './components/Fullscreenlogo';
import '../src/styles/home.css'
import Loader from './components/Loader';
import Header from './components/Header';
import Counter from './components/Counter';
import Contact from './components/Contact';
import Review from './components/Reviews';
<<<<<<< HEAD
import Ourwork from './components/Ourwork';
import Whychooseus from './components/Whychooseus';
<<<<<<< HEAD
import Footer from './components/Footer';
=======
=======
import Footer from './components/Footer';
>>>>>>> 592e535 (Adding terms & conditions)
>>>>>>> 79fdc21 (Adding terms & condition)

export default function Home() {
    return (
        <div className='home'>
            {/* <Fullscreenlogo /> */}
            <Loader />
            <WhatsApp />
            <Header />
            <Ourwork />
            <Whychooseus />
            <hr className='horizontal-row' />
            <Counter />
            <Review overflow="clip" />
            <hr className='horizontal-row' />
            <Contact />
            <Footer />
        </div>
    )
}
