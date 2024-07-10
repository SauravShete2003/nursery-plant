import React from 'react';
import "./PlantCard.css";

function PlantCard({ name, category, image, price }) {
  return (
    <div className='plant-container'>
      <h1 className='plant-title'>{name}</h1>
      <p className='plant-category'>{category}</p>
      <span className="plant-price" >{price}</span>
      <img className='plant-image' src={image} alt={name} />
     
    </div>
  );
}

export default PlantCard;
