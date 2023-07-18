import React from 'react';
import './Card2.css';
import { Link } from 'react-router-dom';
const Card3 = () => {
  const cardsData = [
    {
      image: 'https://thesourceforantiques.files.wordpress.com/2018/01/ad-92.jpg?w=676',
      title: 'Card 1',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    },
    {
      image: 'https://static.demilked.com/wp-content/uploads/2014/10/painted-snail-shell-art-7.jpg',
      title: 'Card 2',
      description: 'Praesent vel enim at turpis luctus fringilla.',
    },
    {
      image: 'https://images.saymedia-content.com/.image/t_share/MTc0MzA4OTkxNzc2NjYzNDIw/making-crafts-with-seashells.jpg',
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

export default Card3;
