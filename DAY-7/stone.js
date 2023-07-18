import React from 'react';
import { Link } from 'react-router-dom';
import Card3 from './Card3';
import './YourComponent.css';
const cardsData = [
    {
      image: 'https://media-cdn.tripadvisor.com/media/photo-s/0f/cf/31/f2/vines-art-glass.jpg',
      title: 'Card 1',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    },
    {
      image: 'https://m.media-amazon.com/images/I/61HvM7c2AfL._AC_UF894,1000_QL80_.jpg',
      title: 'Card 2',
      description: 'Praesent vel enim at turpis luctus fringilla.',
    },
    {
      image: 'https://www.cgs.org.uk/wp-content/uploads/2021/02/7.-glass-seaweed.jpg',
      title: 'Card 3',
      description: 'Donec eu augue eget mauris commodo sodales.',
    },
  ];
const YourComponent = () => {
  return (
    <div>
    <div className="container">
      <aside className="sidebar">
        <ul className="nav">
          <li>
  <Link to ="/shop">
          <h3>NEW LAUNCH</h3></Link>
        
          </li>
          <li>
            <Link to ="/stone">Glass and Shell</Link>
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

      <div >

      <h2>Glass and Shell Collections</h2>

      <main class="content1">
    <div className="container1">
      <div className="card-container1">
        {cardsData.map((card, index) => (
          <div className="card1" key={index}>
            <img src={card.image} alt={card.title} className="card-image1" />
            <div className="card-content1">
              <h3 className="card-title1">{card.title}</h3>
              <p className="card-description1">{card.description}</p>
              <Link to ="/cart">   <button className="buy-button">Buy Now</button></Link>  
            </div>
          </div>
        ))}
      </div>
      </div>
      </main>
      </div>
    </div>
    <br></br><br></br>
      <Card3/>
        </div>  

  );
};

export default YourComponent;
