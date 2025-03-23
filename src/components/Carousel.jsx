import React, { useState } from 'react'
import man1 from "/images/Carousel/man1.jpg";
import man2 from "/images/Carousel/man2.jpg";
import woman1 from "/images/Carousel/woman1.jpg";
import "../styles/carousel.css"
import nextSlideIcon from "/images/icons/right-white.png";
import prevSlideIcon from "/images/icons/left-white.png";

const Carousel = () => {
    const carouselImages = [man1, man2, woman1];
    
    // A state that handles the current position in the carousel images array
    const [position, setPosition] = useState(0);

    function handleNext() {
        setPosition((prevPosition) => {
            // using a operator wrapping that will automically return 0 (beginning) when the full length of images have been reached
            const newPosition = (prevPosition + 1) % carouselImages.length;
            return newPosition;
        })
    }

    function handlePrev() {
        setPosition((prevPosition) => {
            const newPosition = prevPosition === 0 ? carouselImages.length - 1 : (prevPosition - 1) % carouselImages.length;
            return newPosition;
        })
    }

    return (
        <div className='carousel-image-container'>
            <img className="carousel-image"  src={carouselImages[position]} alt="" />
            <div className="carousel-icon-container">
                <button className='carousel-slide-icon prev'><img src={prevSlideIcon} alt="prev" onClick={handlePrev} /></button>
                <button className='carousel-slide-icon next'><img src={nextSlideIcon} alt="next" onClick={handleNext} /></button>
            </div>
            <div className="carousel-text-container">
                <h3>Latest News & Updates</h3>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque ab esse nobis perferendis quos a illo minima quis recusandae porro. Reprehenderit perspiciatis modi ullam odio officiis quibusdam itaque libero nesciunt.</p>
            </div>
        </div>
    )
}

export default Carousel