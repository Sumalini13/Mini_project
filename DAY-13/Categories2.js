import React from 'react';
import './Categories.css';
import pem from './images/Pembarthi.jpg';
import stone from './images/stone.jpg';
import shell from './images/shell.png';
import wood from './images/wood craving.jpg';
import pot from './images/pottery.jpg';
// Update the import path for the image

const Categories = () => {
  const categories = [
    { id: 1, name: 'Pembarthi', image: pem },
    { id: 2, name: 'Pottery', image: pot },
    { id: 3, name: 'Shell', image: shell },
    { id: 4, name: 'Stone', image: stone },
    { id: 5, name: 'Wood Craving', image: wood },
    
    // Add more categories as needed
  ];

  return (
    <div className="categories">
      {categories.map(category => (
        <div key={category.id} className="category">
          <img src={category.image} alt={category.name} />
          <div className="category-name">{category.name}</div><br></br>
        </div>
      ))}
    </div>
  );
};

export default Categories;

