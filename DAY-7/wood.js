import React from 'react';
import { Link } from 'react-router-dom';
import Card4 from './Card4';
import './YourComponent.css';

const cardsData = [
  {
    image: 'https://www.gitagged.com/wp-content/uploads/2018/07/Bastar-Wooden-Craft-Online-1.jpg',
    title: 'Card 1',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
  },
  {
    image: 'https://tourism.bihar.gov.in/content/dam/bihar-tourism/images/handicrafts_product_photo/wood/4.jpg/jcr:content/renditions/cq5dam.web.480.480.jpeg',
    title: 'Card 2',
    description: 'Praesent vel enim at turpis luctus fringilla.',
  },
  {
    image: 'https://m.media-amazon.com/images/I/6125eRQfC9L._AC_UF894,1000_QL80_.jpg',
    title: 'Card 3',
    description: 'Donec eu augue eget mauris commodo sodales.',
  },
];

const YourComponent1 = () => {
  return (
    <div>
      <div className="container">
        <aside className="sidebar">
          <ul className="nav">
            <li>
              <Link to="/shop">
                <h3>NEW LAUNCH</h3>
              </Link>
            </li>
            <li>
              <Link to="/stone">Glass and Shell</Link>
            </li>
            <li>
              <Link to="/wood">Wood Crafts</Link>
            </li>
            <li>
              <Link to="/paper">Paper Crafts</Link>
            </li>
          </ul>
        </aside>
        <br></br>

        <div>
          <h2>Glass and Shell Collections</h2>

          <main className="content1">
            <div className="container1">
              <div className="card-container1">
                {cardsData.map((card, index) => (
                  <div className="card1" key={index}>
                    <img src={card.image} alt={card.title} className="card-image1" />
                    <div className="card-content1">
                      <h3 className="card-title1">{card.title}</h3>
                      <p className="card-description1">{card.description}</p>
                   <Link to ="/cart">   <button className="buy-button">Buy Now</button></Link>    {/* Add your button element here with the CSS class */}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </main>
        </div>
      </div>
      <br></br>
      <br></br>
      <br></br>
      <Card4 />
    </div>
  );
};

export default YourComponent1;
