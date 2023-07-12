import React from 'react';
import Carousel from './Carousel';
import images1 from './images1.jpeg';
import images2 from './images2.jpeg';
import images3 from './images3.jpeg';
import images4 from './images4.jpeg';
import images5 from './images5.jpg';
import images6 from './images6.jpg';


const ShoppingPage = () => {
  const images = [images1, images2, images3];
  return (
    <div>
      <Carousel images={images} slideInterval={9000} />
    
    </div>
  );
};

export default ShoppingPage;