import React, { useEffect, useRef } from 'react';
import './Carousel.css'; // Import your CSS file

const Carousel = ({ images, slideInterval }) => {
  const carouselRef = useRef(null);

  useEffect(() => {
    const carousel = carouselRef.current;
    let currentSlide = 0;

    const interval = setInterval(() => {
      currentSlide = (currentSlide + 1) % images.length;
      carousel.style.transform = `translateX(-${currentSlide * 100}%)`;
    }, slideInterval);

    return () => clearInterval(interval);
  }, [images, slideInterval]);

  return (
    <div className="carousel">
      <div className="slides" ref={carouselRef}>
        {images.map((image, index) => (
          <img src={image} alt={`Image ${index + 1}`} key={index} />
        ))}
      </div>
    </div>
  );
};

export default Carousel;

