import React from 'react'; // Create a separate CSS file for your styles
import './homepage.css';
import Slider from 'react-slick';
function HomePage() {
    // Slider settings
    const sliderSettings = {
      dots: true,
      infinite: true,
      autoplay: true,
      autoplaySpeed: 3000,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1,
    }

  return (
    <div>
    <html>
      
       
      <div className="header">
        <h1>HAND CRAFTS</h1>

        <ul className="nav">
          <li>
            <a>HOME</a>
          </li>
          <li>
            <a>ADD TO CART</a>
          </li>
          <li>
            <a>LOGIN</a>
          </li>
          <li>
            <a>SIGN UP</a>
          </li>
          <li>
            <a>FAQ</a>
          </li>
        </ul>
      </div>

      <div className="headerbg"></div>
      <div className="line-1"></div>
    </html>
    </div>
  )
}
  export default HomePage;

