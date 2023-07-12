import React, { useState } from 'react'
import Swiper from './Swiper'
import Galleryraw from './Galleryraw'
import Footer from './Footer'
import MenuIcon from '@mui/icons-material/Menu';
import Brand from './Brand'
import '../styles/gallery.css'
import Loader from './Loader';

function Gallery() {
  const [isOpen, setisOpen] = useState(false);
  const handleClick = () => {
    if (isOpen === false) {
      setisOpen(true);
    }
    else {
      setisOpen(false);
    }
  }

  const handleScroll = () => {
    const scrollTop = window.pageYOffset || document.documentElement.scrollTop;

    const followUsElement = document.querySelector('tav');

    if (followUsElement) {
      if (scrollTop > 0) {
        followUsElement.classList.add('glass-effect');
      } else {
        followUsElement.classList.remove('glass-effect');
      }
    }
  };

  window.addEventListener('scroll', handleScroll);



  return (
    <div>
      <Loader />
      <header className='gallery-header'>
        <tav id="#gnav" className={isOpen ? 'glass-effect' : ''}>
          <div onClick={handleClick} className="menu-icon">
            <MenuIcon />
          </div>
          <div className="menu">
            <div className="logo">
              <Brand />
            </div>
            <ul className={isOpen ? 'showing' : ''}>
              <li className='bblur'><a className='nav-link' href="/">← Back to Home</a></li>
            </ul>
          </div>
        </tav>
      </header>

      <div className='gallery-h pt-5'>
        <h2>
          <span className='line-pass mt-5'>
            Artful Archive
          </span>
        </h2>
        <Swiper />
        <hr className='horizontal-row'></hr>
        <div className='gallery-raw'>
          <Galleryraw />
        </div>
      </div>
      <Footer />
    </div>
  )
}

export default Gallery
