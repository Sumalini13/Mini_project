import React from 'react';
import './Card2.css';
import { Link } from 'react-router-dom';
const Card5 = () => {
  const cardsData = [
    {
      image: 'https://www.lushome.com/wp-content/uploads/2011/07/paper-flowers-craft-ideas-for-adults-art-wall-decor.jpg',
      title: 'Card 1',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    },
    {
      image: 'https://cdn.wallpapersafari.com/21/48/IHkyX1.jpg',
      title: 'Card 2',
      description: 'Praesent vel enim at turpis luctus fringilla.',
    },
    {
      image: 'https://images.immediate.co.uk/production/volatile/sites/32/2021/04/Paper-folding-project-DIY-desktop-tidies-1ec9d8e.jpg',
      title: 'Card 3',
      description: 'Donec eu augue eget mauris commodo sodales.',
    },
  ];

  return (
    <div className="container2">
      <div className="card-container2">
        {cardsData.map((card, index) => (
          <div className="card2" key={index}>
            <img src={card.image} alt={card.title} className="card-image2" />
            <div className="card-content2">
              <h3 className="card-title2">{card.title}</h3>
              <p className="card-description2">{card.description}</p>
              <Link to ="/cart">   <button className="buy-button">Buy Now</button></Link>  
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Card5;
