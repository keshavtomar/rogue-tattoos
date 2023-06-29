import React from 'react'
import '../styles/header.css'
import Swiper from './Swiper'

function Gallery() {
  return (
    <div>
      <h2>
        <span className='line-pass'>
          Artful Archive
        </span>
      </h2>
      <Swiper />
      <hr className='horizontal-row'></hr>
      <div className='gallery-raw'>

      </div>
    </div>
  )
}

export default Gallery
