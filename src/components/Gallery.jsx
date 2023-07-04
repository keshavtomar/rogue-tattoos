import React from 'react'
import '../styles/header.css'
import Swiper from './Swiper'
import Galleryraw from './Galleryraw'

function Gallery() {
  return (
    <div>
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
  )
}

export default Gallery
