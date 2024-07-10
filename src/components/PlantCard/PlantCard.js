import React from 'react';
import "./PlantCard.css";
import deleteImg from "./delete.png"
import editImg from "./edit.png"
import axios from 'axios';
import toast, { Toaster } from 'react-hot-toast';
import { Link } from 'react-router-dom';

function PlantCard({ _id ,name, category, image, price, loadPlants }) {
  const deletePlant = async (plantId)=>{
   const response = await axios.delete(`${process.env.REACT_APP_API_URL}/plant/${plantId}`)
   toast.success(response.data.message)
   loadPlants()
  }
  return (
    <div className='plant-container'>
      <h1 className='plant-title'>{name}</h1>
      <p className='plant-category'>{category}</p>
      <span className="plant-price" >{price}</span>
      <img className='plant-image' src={image} alt={name} />
      <div>
        
        <Link to={`/update/${_id}`}>
       <img src={editImg} className='plant-card-action-edit-btn'/>
        </Link>

       <img src={deleteImg} 
        onClick={()=>{deletePlant(_id)}}
       className='plant-card-action-delete-btn'
       />
      </div>
     <Toaster/>
    </div>
  );
}

export default PlantCard;
