import React, { useState } from 'react'
import Swiper from './Swiper'
import Galleryraw from './Galleryraw'
import Footer from './Footer'
import MenuIcon from '@mui/icons-material/Menu';
import Brand from './Brand'
import '../styles/gallery.css'

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
      <header className='gallery-header'>
        <tav id="#gnav">
          <div onClick={handleClick} className="menu-icon">
            <MenuIcon />
          </div>
          <div className="menu">
            <div className="logo">
              <Brand />
            </div>
            <ul className={isOpen ? 'showing' : ''}>
              <li className='bblur'><a className='nav-link' href="/">← Back to Home</a></li>
              {/* <li className='bblur'><a className='nav-link' href="/">About</a></li>
              <li className='bblur'><a className='nav-link' href="/">Blog</a></li>
              <li className='bblur'><a className='nav-link' href="/gallery">Gallery</a></li>
              <li className='bblur'><a className='nav-link' href="/">Contact</a></li> */}
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
