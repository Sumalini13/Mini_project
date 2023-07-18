import React from 'react';
import './Categories.css';
import bamboo from './images/bamboo.jpg'; 
import bidari from './images/bidari.jpeg';
import bone from './images/bone and horn.jpg';
import jute from './images/jute.jpg';
import leather from './images/leather.jpg';

// Update the import path for the image

const Categories = () => {
  const categories = [
    { id: 1, name: 'Bamboo', image: bamboo }, // Use the imported image
    { id: 2, name: 'Bidari', image:bidari  },
    { id: 3, name: 'Bone and Horn', image: bone },
    { id: 4, name: 'Jute', image:jute },
    { id: 5, name: 'Leather', image:leather },
 
    
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

