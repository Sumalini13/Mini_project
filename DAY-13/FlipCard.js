import React from 'react';
import CraftCard from './CraftCard';
import Glass from './images/Glass.jpg';
import paper from './images/paper.jpeg';
import paint from './images/paintings.jpeg';
 // Import the CSS file containing the styles for the rating symbols

const App = () => {
  const crafts = [
    {
      name: 'Glass Art',
      image: Glass,
      description: "I've always been a fan of handmade crafts, and this marketplace is a hidden treasure trove. The wide range of artistic creations caters to all tastes, and I love supporting independent artists. - Alex G.",
      rating: 4.5,
    },
    {
      name: 'Paper Art',
      image: paper,
      description: "The website's user-friendly interface makes it a breeze to browse through the vast collection of handmade crafts. The ability to connect directly with the artisans is a great touch and adds a personal touch to each purchase. - Emma P.",
      rating: 5,
    },
    {
      name: 'Paintings',
      image: paint,
      description: "Shopping on this marketplace is not just about buying crafts; it's about supporting artisans and preserving traditional craftsmanship. The joy of receiving a handmade item is incomparable! - Michael H.",
      rating: 4,
    },
  ];

  return (
    <div className="app">
      <div className="card-container">
        {crafts.map((craft, index) => (
          <CraftCard key={index} craft={craft} />
        ))}
      </div>
    </div>
  );
};

export default App;
