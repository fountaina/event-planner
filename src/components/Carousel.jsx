import React, { useState } from 'react'
import man1 from "/images/Carousel/man1.jpg";
import man2 from "/images/Carousel/man2.jpg";
import woman1 from "/images/Carousel/woman1.jpg";
import "../styles/carousel.css"
import nextSlideIcon from "/images/icons/right-arrow.png";
import prevSlideIcon from "/images/icons/left-arrow.png";

const Carousel = () => {
    const carouselImages = [man1, man2, woman1];
    
    // A state that handles the current position in the carousel images array
    const [position, setPosition] = useState(0);

    function handleChange() {
        setPosition((prevPosition) => {
            // using a operator wrapping that will automically return 0 (beginning) when the full length of images have been reached
            const newPosition = (prevPosition + 1) % carouselImages.length;
            return newPosition;
        })
    }

    return (
        <div className='carousel-image-container'>
            <img className="carousel-image" onClick={handleChange} src={carouselImages[position]} alt="" />
            <div className="carousel-slide-icon">
                {/* <button className='carousel-slide-icon next'><img src={nextSlideIcon} alt="next" /></button> */}
                {/* <button className='carousel-slide-icon prev'><img src={prevSlideIcon} alt="prev" /></button> */}
            </div>
        </div>
    )
}

export default Carousel