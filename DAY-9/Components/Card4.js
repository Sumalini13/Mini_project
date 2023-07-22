import React from 'react';
import './Card2.css';
import { Link } from 'react-router-dom';
const Card3 = () => {
  const cardsData = [
    {
      image: 'https://i.etsystatic.com/17509073/r/il/f7036b/4105143629/il_fullxfull.4105143629_7npb.jpg',
      title: 'Card 1',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    },
    {
      image: 'https://www.gitagged.com/wp-content/uploads/2018/07/Bastar-Art-GiTAGGED-1.jpg',
      title: 'Card 2',
      description: 'Praesent vel enim at turpis luctus fringilla.',
    },
    {
      image: 'https://www.millenniumpost.in/h-upload/2022/10/01/647115-screenshot-2022-10-02-013651.jpg',
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
