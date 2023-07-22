import React from 'react';
import ArtisanProfile from './Artisancard';
import { Link } from 'react-router-dom';
import "./Art.css";

const Art = () => {
  const artisans = [
    {
      name: 'Artisan 1',
      description: 'Clay made  - 3 products',
      imageUrl: 'https://t3.ftcdn.net/jpg/03/58/90/78/360_F_358907879_Vdu96gF4XVhjCZxN2kCG0THTsSQi8IhT.jpg', // Replace with the URL of Artisan 1's logo image
    },
    {
      name: 'Artisan 2',
      description: 'Pottery making - 7 products',
      imageUrl: 'https://t3.ftcdn.net/jpg/03/58/90/78/360_F_358907879_Vdu96gF4XVhjCZxN2kCG0THTsSQi8IhT.jpg', // Replace with the URL of Artisan 2's logo image
    },
    {
      name: 'Artisan 3',
      description: 'Description for Artisan 2',
      imageUrl: 'https://t3.ftcdn.net/jpg/03/58/90/78/360_F_358907879_Vdu96gF4XVhjCZxN2kCG0THTsSQi8IhT.jpg', // Replace with the URL of Artisan 3's logo image
    },
    {
      name: 'Artisan 4',
      description: 'Description for Artisan 2',
      imageUrl: 'https://t3.ftcdn.net/jpg/03/58/90/78/360_F_358907879_Vdu96gF4XVhjCZxN2kCG0THTsSQi8IhT.jpg', // Replace with the URL of Artisan 4's logo image
    },
    {
      name: 'Artisan 5',
      description: 'Description for Artisan 2',
      imageUrl: 'https://t3.ftcdn.net/jpg/03/58/90/78/360_F_358907879_Vdu96gF4XVhjCZxN2kCG0THTsSQi8IhT.jpg', // Replace with the URL of Artisan 5's logo image
    },
    {
      name: 'Artisan 8',
      description: 'Description for Artisan 2',
      imageUrl: 'https://t3.ftcdn.net/jpg/03/58/90/78/360_F_358907879_Vdu96gF4XVhjCZxN2kCG0THTsSQi8IhT.jpg', // Replace with the URL of Artisan 8's logo image
    },
    // Add more artisans as needed
  ];

  return (
    <div className="art">
      {artisans.map((artisan, index) => (
        <Link to={`/artisan/${index}`} key={index}>
          <ArtisanProfile name={artisan.name} description={artisan.description} imageUrl={artisan.imageUrl} />
        </Link>
      ))}
    </div>
  );
};

export default Art;


