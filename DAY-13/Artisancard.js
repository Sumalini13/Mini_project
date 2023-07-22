// ArtisanProfile.js
// ArtisanCard.js

import React from 'react';
import './ArtisanCard.css';

const ArtisanCard = ({ name, description, imageUrl }) => {
  return (
    <div className="artisan-card">
    <div className="artisan-logo">
      <img src={imageUrl} alt="Artisan Logo" />
    </div>
    <div className="artisan-name">{name}</div>
    <div className="artisan-description">{description}</div>
  </div>
  );
};

export default ArtisanCard;



