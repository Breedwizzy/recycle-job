import React, { useEffect } from 'react';
import Plastic1 from './../assets/plastic1.webp';

const Preloadimage = () => {
    useEffect(() => {
        // Create a new Image object to preload the image
        const imageToPreload = new Image();
        imageToPreload.src = Plastic1; // Replace with the correct path to your image

        // You can add an optional event listener to perform an action when the image is loaded
        imageToPreload.onload = () => {
            console.log('Image preloaded:', Plastic1);
        };

        // Make sure to clean up the event listener when the component unmounts
        return () => {
            imageToPreload.onload = null;
        };
    }, []);

    return (
        <div className='featured'>
            {/* Rest of your component */}
        </div>
    );
};

export default Preloadimage;
