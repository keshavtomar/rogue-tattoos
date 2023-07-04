import React, { useEffect, useState } from 'react';
import '../styles/galleryraw.css';
import images from '../data/images';

export default function Galleryraw() {

    console.log(images);
    // const [images, setImages] = useState([]);

    // useEffect(() => {
    //     const fetchImages = () => {
    //         const fetchedImages = [];
    //         for (let i = 1; i <= 100; i++) {
    //             const src = `images/gallery/rogue-tattoos-gallery${i}.jpg`;
    //             const id = i;
    //             fetchedImages.push(
    //                 <div className='gallery-images'>
    //                     <div className='pics' key={id}>
    //                         <img
    //                             data-src={src}
    //                             alt={`rogue-tattoos${i}`}
    //                             style={{ width: '100%' }}
    //                             ref={lazyLoadRef}
    //                             loading='lazy'
    //                             width='300px'
    //                             height='500px'
    //                         />
    //                     </div>
    //                     <div className='img-logo'>
    //                         <img src="images/blogo.jpg" alt="rogue-tattoos best-tattoo-studio" />
    //                     </div>
    //                 </div>
    //             );
    //         }
    //         setImages(fetchedImages);
    //     };

    //     fetchImages();
    // }, []);

    // const lazyLoadRef = (element) => {
    //     if (element) {
    //         const observer = new IntersectionObserver((entries) => {
    //             entries.forEach((entry) => {
    //                 if (entry.isIntersecting) {
    //                     const img = entry.target;
    //                     img.src = img.dataset.src;
    //                     observer.unobserve(img);
    //                 }
    //             });
    //         });

    //         observer.observe(element);
    //     }
    // };

    return (
        <div className='gallery'>
            {images.map((image, index) => {
                return (
                    <img
                        alt='snack'
                        key={index}
                        src={image.src}
                        height={500}
                        width={333}
                        effect='blur'
                        placeholder={image.src}
                    />);
            })}
        </div>
    );
}
