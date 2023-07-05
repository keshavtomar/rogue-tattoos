import React, { useState } from 'react';
import { Blurhash } from 'react-blurhash';

const ImageWithLoadingPlaceholder = ({ imageData }) => {
    const [isLoading, setIsLoading] = useState(true);

    const handleImageLoad = () => {
        setIsLoading(false);
    };

    return (
        <>
            {isLoading && (
                <Blurhash
                    hash={imageData.blurhash}
                    width={400}
                    height={600}
                    resolutionX={32}
                    resolutionY={32}
                    punch={1}
                />
            )}

            <div className='pics gallery-images'>
                <img
                    className='g-pic'
                    src={"images/gallery/" + imageData.name}
                    alt={imageData.alt}
                    onLoad={handleImageLoad}
                    loading='lazy'
                />
                <div className='img-logo'>
                    <img src='images/blogo.jpg' alt='rogue-tattoos-logo'></img>
                </div>
            </div>

        </>
    );
};

export default ImageWithLoadingPlaceholder;
