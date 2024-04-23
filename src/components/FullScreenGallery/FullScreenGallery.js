import React from 'react';
import './FullScreenGallery.css';

const FullScreenGallery = ({ images, onClose }) => {
    return (
        <div className="full-screen-gallery-overlay">
            <div className="full-screen-gallery-container">
                <button className="close-button" onClick={onClose}>
                    Close
                </button>
                <div className="gallery-images">
                    {images.map((image, index) => (
                        <img key={index} src={image} alt={`Image ${index}`} />
                    ))}
                </div>
            </div>
        </div>
    );
};

export default FullScreenGallery;
