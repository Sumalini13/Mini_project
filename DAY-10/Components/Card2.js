import React from 'react';
import './Card2.css';
import { Link } from 'react-router-dom';
const Card2 = () => {
  const cardsData = [
    {
      image: 'https://i.etsystatic.com/27513826/r/il/36d40f/4202427796/il_600x600.4202427796_7217.jpg',
      title: 'Card 1',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    },
    {
      image: 'https://i.etsystatic.com/24455629/r/il/503f1a/4613093010/il_600x600.4613093010_8h1n.jpg',
      title: 'Card 2',
      description: 'Praesent vel enim at turpis luctus fringilla.',
    },
    {
      image: 'https://i.etsystatic.com/18815245/r/il/4941aa/3346058310/il_600x600.3346058310_s073.jpg',
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

export default Card2;
