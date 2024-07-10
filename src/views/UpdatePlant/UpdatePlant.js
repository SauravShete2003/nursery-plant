import React, { useEffect } from "react";
import "./UpdatePlant.css";
import { useState } from "react";
import { Link, useParams } from "react-router-dom";
import axios from "axios";
import toast, { Toaster } from "react-hot-toast";
function UpdatePlant() {
  const { id } = useParams();

  const [name, setName] = useState("");
  const [price, setPrice] = useState(0);
  const [image, setImage] = useState("");
  const [category, setCategory] = useState("");

  const updatePlant = async() => {
    const response = await axios.put(`${process.env.REACT_APP_API_URL}/plant/${id}`,{
        name,
        price,
        category,
        image

    })
   
    toast.success(response.data.message)
  };

  const loadPlant = async (id) => {
    if (!id) {
      return;
    }
    const response = await axios.get(
      `${process.env.REACT_APP_API_URL}/plant/${id}`
    );

    const {name , image , price , category} = response.data.data
    setName(name)
    setCategory(category)
    setImage(image)
    setPrice(price)
  };

  useEffect(() => {
    loadPlant(id);
  }, [id]);

  return (
    <div>
      <h1>Update Plant</h1>
      <from>
        <input
          className="plant-input"
          type="text"
          placeholder="Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <br />

        <input
          className="plant-input"
          type="number"
          placeholder="Price"
          value={price}
          onChange={(e) => {
            setPrice(e.target.value);
          }}
        />
        <br />

        <input
          className="plant-input"
          type="text"
          placeholder="category"
          value={category}
          onChange={(e) => {
            setCategory(e.target.value);
          }}
        />
        <br />
        <img src={image} className="img-preview" />
        <br />

        <input
          className="plant-input"
          type="text"
          placeholder="Enter plant image Url"
          value={image}
          onChange={(e) => {
            setImage(e.target.value);
          }}
        />
        <br />

        <button className="button"
        onClick={updatePlant}
         type="button">
          Update Plant
        </button>
        <br />
        <br />
        <Link to={"/"}>
          <button className="button">Go Home</button>
        </Link>
      </from>
      <Toaster/>
    </div>
  );
}

export default UpdatePlant;
