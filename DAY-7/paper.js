import React from 'react';
import { Link } from 'react-router-dom';
import Card5 from './Card5';
import './YourComponent.css';
const cardsData = [
    {
      image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcROPw1WnF6DUf6qjaFYqSbsfyggJB-Z-pBiaeWPWuCY65LagASpJAW3PVkojAZJX55HjvE&usqp=CAU',
      title: 'Card 1',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    },
    {
      image: 'https://i.pinimg.com/736x/93/88/36/9388363a8ad66d0c6820d2878a676323.jpg',
      title: 'Card 2',
      description: 'Praesent vel enim at turpis luctus fringilla.',
    },
    {
      image: 'https://colormecrafty.net/wp-content/uploads/2022/03/paper-wreath-19.jpg',
      title: 'Card 3',
      description: 'Donec eu augue eget mauris commodo sodales.',
    },
  ];
const YourComponent2 = () => {
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
      <Card5/>
        </div>  

  );
};

export default YourComponent2;
