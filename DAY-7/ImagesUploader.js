import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './ImagesUploader.css';

const ImageUploader = () => {
  const [image, setImage] = useState('');
  const [description, setDescription] = useState('');
  const navigate = useNavigate();

  const handleImageChange = (event) => {
    const file = event.target.files[0];
    const reader = new FileReader();

    reader.onload = () => {
      setImage(reader.result);
    };

    reader.readAsDataURL(file);
  };

  const handleDescriptionChange = (event) => {
    setDescription(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    // Save the image and description to local storage
    const imageData = { image, description };
    localStorage.setItem('selectedImage', JSON.stringify(imageData));

    // Navigate to the display page
    navigate('/display');
  };

  return (
    <div className="container12345">
      <h2>Add Image and Description</h2>
      <form onSubmit={handleSubmit}>
        <div className="input">
          <label htmlFor="image" className="label">Image:</label>
          <input type="file" id="image" accept="image/*" onChange={handleImageChange} />
        </div>
        <div className="input">
          <label htmlFor="description" className="label">Description:</label>
          <textarea id="description" className="textarea" value={description} onChange={handleDescriptionChange} />
        </div>
        <button type="submit" className="button">Submit</button>
      </form>
    </div>
  );
};

export default ImageUploader;
