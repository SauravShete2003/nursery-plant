import React from 'react';
import "./PlantCard.css";

function PlantCard({ name, category, image, price, description }) {
  return (
    <div className='plant-container'>
      <h1 className='plant-title'>{name}</h1>
      <img className='plant-image' src={image} alt={name} />
      <p className='plant-category'>{category}</p>
      <p className='plant-price'>${price}</p>
      <p className='plant-description'>{description}</p>
    </div>
  );
}

export default PlantCard;
