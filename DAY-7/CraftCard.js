import React, { useState } from 'react';
import './CraftCard.css';

const CraftCard = ({ craft }) => {
  const [isFlipped, setIsFlipped] = useState(false);

  const handleCardClick = () => {
    setIsFlipped(!isFlipped);
  };

  return (
    <div
      className={`craft-card ${isFlipped ? 'flipped' : ''}`}
      onClick={handleCardClick}
    >
      <div className="card-inner">
        <div className="card-front">
          <img src={craft.image} alt={craft.name} />
          <h3>{craft.name}</h3>
        </div>
        <div className="card-back">
          <p>{craft.description}</p>
        </div>
      </div>
    </div>
  );
};

export default CraftCard;
