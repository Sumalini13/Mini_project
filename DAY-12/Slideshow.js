import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import './Slideshow.css';
import image1 from './images1.jpeg';
import image2 from './images2.jpeg';
import image3 from './images3.jpeg';
import {Link} from 'react-router-dom';


import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart, faHeart, faSearch } from '@fortawesome/free-solid-svg-icons';

const Slideshow = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    fade: true,
    cssEase: 'linear'
  };

  return (
    <div className="slideshow-container">
      <Slider {...settings}>
        <div className="slide">
          <img src={image1} alt="Slide 1" />
          <div className="nav">
            <div className="nav-left">
              <ul>
                <li>
                  <Link to="/home">HOME</Link>
                </li>
                <li>
                  <Link to ="/orders">ORDERS</Link> 
                </li>
                <li>
                  <Link to ="/Login">LOGIN/SIGNUP</Link>
                </li> 
                <li>
                  <Link to ="/aboutus">ABOUT US</Link>
                 
                </li>
                <li>
                  <Link to ="/Product">SHOP</Link>
                 
                </li>
                <li>
                  <Link to ="/contact">CONTACT</Link>
                 
                </li>
              </ul>
            </div>
            <div className="nav-right">
              <FontAwesomeIcon icon={faSearch} />
            <Link to="/ShoppingCart">    <FontAwesomeIcon icon={faShoppingCart} /></Link> 
              <FontAwesomeIcon icon={faHeart} />
            </div>
          </div>
        </div>
        <div className="slide">
          <img src={image2} alt="Slide 2" />
          <div className="nav">
            <div className="nav-left">
              <ul>
              <li>
                  <Link to="/home">HOME</Link>
                </li>
                <li>
                  <Link to ="/orders">ORDERS</Link> 
                </li>
                <li>
                  <Link to ="/Login">LOGIN/SIGNUP</Link>
                </li>
                <li>
                  <Link to ="/aboutus">ABOUT US</Link>
                 
                </li>
                <li>
                  <Link to ="/Product">SHOP</Link>
                 
                </li>
                <li>
                <Link to ="/contact">CONTACT</Link>
                 
                </li>
              </ul>
            </div>
            <div className="nav-right">
              <FontAwesomeIcon icon={faSearch} />
              <Link to="/cart">  <FontAwesomeIcon icon={faShoppingCart} /></Link> 
              <FontAwesomeIcon icon={faHeart} />
            </div>
          </div>
        </div>
        <div className="slide">
          <img src={image3} alt="Slide 3" />
          <div className="nav">
            <div className="nav-left">
              <ul>
              <li>
                  <Link to="/home">HOME</Link>
                </li>
                <li>
                  <Link to ="/orders">ORDERS</Link> 
                </li>
                <li>
                  <Link to ="/Login">LOGIN/SIGNUP</Link>
                </li>
                <li>
                  <Link to ="/aboutus">ABOUT US</Link>
                 
                </li>
                <li>
                  <Link to ="/Product">SHOP</Link>
                 
                </li>
                <li>
                <Link to ="/contact">CONTACT</Link>
                 
                </li>
              </ul>
            </div>
            <div className="nav-right">
              <FontAwesomeIcon icon={faSearch} />
              <Link to="/cart">  <FontAwesomeIcon icon={faShoppingCart} /></Link> 
              <FontAwesomeIcon icon={faHeart} />
            </div>
          </div>
        </div>
      </Slider>
    </div>
  );
};

export default Slideshow;
