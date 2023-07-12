import React from 'react';
import CraftCard from './CraftCard';

const App = () => {
  const crafts = [
    {
      name: 'Pottery',
      image: 'pottery.jpg',
      description: 'This is the description for Craft 1.',
    },
    {
      name: 'Stone',
      image: 'stone.jpg',
      description: 'This is the description for Craft 2.',
    },
    {
      name: 'Wood',
      image: 'shell.jpg',
      description: 'This is the description for Craft 3.',
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
