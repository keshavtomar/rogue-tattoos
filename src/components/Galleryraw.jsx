import React from 'react';
import '../styles/galleryraw.css';
import images from '../data/images';
import ImagewithBlurHash from '../components/ImagewithBlurHash';

export default function Galleryraw() {
    return (
        <div className='gallery'>
            {images.map((image, index) => {
                return <ImagewithBlurHash imageData={image} />
            })}
        </div>
    );
}
