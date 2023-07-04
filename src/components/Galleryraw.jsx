import React, { useEffect, useState } from 'react';
import '../styles/galleryraw.css';

export default function Galleryraw() {
    const [images, setImages] = useState([]);

    useEffect(() => {
        const fetchImages = () => {
            const fetchedImages = [];
            for (let i = 1; i <= 100; i++) {
                const src = `images/gallery/rogue-tattoos-gallery${i}.jpg`;
                const id = i;
                fetchedImages.push(
                    <div className='pics' key={id}>
                        <img
                            data-src={src}
                            alt={`rogue-tattoos${i}`}
                            style={{ width: '100%' }}
                            ref={lazyLoadRef}
                        />
                    </div>
                );
            }
            setImages(fetchedImages);
        };

        fetchImages();
    }, []);

    const lazyLoadRef = (element) => {
        if (element) {
            const observer = new IntersectionObserver((entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        const img = entry.target;
                        img.src = img.dataset.src;
                        observer.unobserve(img);
                    }
                });
            });

            observer.observe(element);
        }
    };

    return <div className='gallery'>{images}</div>;
}
