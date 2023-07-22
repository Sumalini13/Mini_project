import React, { useEffect, useState } from 'react';
import './ImageDisplay.css';
import ImageUploader from './ImagesUploader';
const ImageDisplay = () => {
  const [imageData, setImageData] = useState(null);

  useEffect(() => {
    // Retrieve the image data from local storage
    const savedImageData = localStorage.getItem('selectedImage');
    if (savedImageData) {
      setImageData(JSON.parse(savedImageData));
    }
  }, []);

  if (!imageData) {
    return <p>No image selected.</p>;
  }

  const { image, description } = imageData;

  return (
    <div className="containerin">
      <h2>Image Display</h2>
      <img src={image} alt="Selected" className="image-preview" />
      <p className="description">Description: {description}</p>
    </div>
  );
};

export default ImageDisplay;
