import React from 'react';
import { Link } from 'react-router-dom';
import './YourComponent.css';
import Card2 from './Card2';

const cardsData = [
    {
      image: 'https://i.etsystatic.com/27513826/r/il/50ba83/5031884230/il_600x600.5031884230_604g.jpg',
      title: 'Card 1',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    },
    {
      image: 'https://i.etsystatic.com/18815245/r/il/91f0ab/4152383476/il_600x600.4152383476_el93.jpg',
      title: 'Card 2',
      description: 'Praesent vel enim at turpis luctus fringilla.',
    },
    {
      image: 'https://media.istockphoto.com/id/639487044/photo/hands-of-a-potter-creating-an-earthen-jar.jpg?s=612x612&w=0&k=20&c=gCVqR1YvUT6qZhazjpNNGzlpgh_sQQJNzXNsh0ZZEh0=',
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

      <div>
      <h2>New Launch</h2>

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
    <Card2/>
        </div>  

  );
};

export default YourComponent;