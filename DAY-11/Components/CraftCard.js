import React from 'react';
import "./CraftCard.css";
const CraftCard = ({ craft }) => {
  const { name, image, description, rating } = craft;

  const renderRatingStars = () => {
    const starCount = 5;
    const filledStars = Math.floor(rating);
    const halfStar = rating - filledStars >= 0.5;

    const stars = [];

    for (let i = 0; i < filledStars; i++) {
      stars.push(<i key={i} className="fas fa-star filled"></i>);
    }

    if (halfStar) {
      stars.push(<i key={filledStars} className="fas fa-star-half-alt half"></i>);
    }

    for (let i = stars.length; i < starCount; i++) {
      stars.push(<i key={i} className="far fa-star empty"></i>);
    }

    return stars;
  };

  return (
    <div className="craft-card">
      <div className="card-inner">
        <div className="card-front">
        
       
          <p>{description}</p>
          <div className="rating">{renderRatingStars()}</div>
        </div>
        <div className="card-back">
        </div>
      </div>
    </div>
  );
};

export default CraftCard;

