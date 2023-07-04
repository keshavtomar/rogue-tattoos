import React, { useEffect, useState } from 'react';
import '../styles/galleryraw.css';
import { Skeleton } from '@mui/material';

const ImageWithLoader = ({ src, alt }) => {
    const [isLoading, setIsLoading] = useState(true);

    const handleImageLoad = () => {
        setTimeout(() => {
            setIsLoading(false);
        }, 500);
    };

    return (
        <div className='pics'>
            {isLoading ? (
                <Skeleton
                    animation='pulse'
                    sx={{ bgcolor: 'white' }}
                    variant='rectangular'
                    width={210}
                    height={118}
                />
            ) : null}
            <img
                data-src={src}
                alt={alt}
                style={{ width: '100%' }}
                ref={lazyLoadRef}
                onLoad={handleImageLoad}
            />
        </div>
    );
};

export default function Galleryraw() {
    const [images, setImages] = useState([]);

    useEffect(() => {
        const fetchImages = async () => {
            const fetchedImages = [];

            for (let i = 1; i <= 100; i++) {
                const src = `images/gallery/rogue-tattoos-gallery${i}.jpg`;
                const id = i;
                const image = (
                    <ImageWithLoader key={id} src={src} alt={`rogue-tattoos${i}`} />
                );
                fetchedImages.push(image);
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
