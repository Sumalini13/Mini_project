import React from 'react';
import './AboutUs.css';
import aboutus from './images/aboutus.jpg';
const AboutUs = () => {
  return (
    <div className="about-section">
      <div className="image-container">
       
      </div>
      <div className="content-container">
        <h2 >About Us</h2>
        <p>
        Welcome to our handmade craft shopping website! We're thrilled to have you here. Let us introduce ourselves and tell you a little bit about who we are and what we offer.

At SHore, we are passionate about connecting artisans and craftspeople from around the world with customers who appreciate the beauty and uniqueness of handmade crafts. Our platform serves as a vibrant marketplace, showcasing a wide range of meticulously crafted products that are made with love, skill, and attention to detail.

Our mission is to support and promote the rich heritage of traditional crafts while also providing a platform for contemporary artisans to showcase their creativity and innovation. We believe in the power of handmade crafts to bring joy, add a personal touch to everyday items, and create a positive impact on both the artisans and the customers.
       
        </p>
        <br></br>
        <a href="#" className="cta-button">
          Learn More
        </a>
      </div>
    </div>
  );
};

export default AboutUs;
