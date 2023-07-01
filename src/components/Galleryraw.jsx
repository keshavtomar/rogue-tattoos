import React, { useEffect, useState } from 'react';
import imgdata from '../data/galleryData';
import '../styles/galleryraw.css';

export default function Galleryraw() {
    const [images, setImages] = useState([]);

    useEffect(() => {
        const fetchImages = () => {
            const fetchedImages = [];
            for (let i = 0; i < imgdata.length; i++) {
                const src = 'images/' + imgdata[i].name + '.jpg';
                const id = imgdata[i].id;
                fetchedImages.push(
                    <div className='pics' key={id}>
                        <img src={src} alt={imgdata[i].name} style={{ 'width': '100%' }} />
                    </div>
                );
            }
            setImages(fetchedImages);
        };

        fetchImages();
    }, []);

    return (
        <div className='gallery'>
            {images}
        </div>
    );
}
