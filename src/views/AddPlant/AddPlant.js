import React, { useState } from "react";
import "./Addplant.css";
import toast, { Toaster } from "react-hot-toast";
import axios from "axios";
import { Link } from "react-router-dom";
import Homeimg from "./home (1).png"
function AddPlant() {
  const [name, setName] = useState("");
  const [price, setPrice] = useState(0);
  const [image, setImage] = useState("");
  const [category, setCategory] = useState("");

  const addPlant = async () => {
    toast.loading("Adding Plant");
    if (!name || !price || !category || !image) {
      toast.error("please enter all details");
      return;
    }
    const response = await axios.post(
      `${process.env.REACT_APP_API_URL}/plant`,
      {
        name: name,
        price: price,
        image: image,
        category: category,
      }
    );
    toast.dismiss();
    toast.success(response.data.message);

    setName("");
    setPrice(0);
    setImage("");
    setCategory("");
  };

  return (
    <div className="input-container">
      <h1>Add Plant</h1>
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

        <button className="button" onClick={addPlant} type="button">
          Add Plant
        </button>
        <br />
        <br />
        <Link to={"/"}>
          <img src={Homeimg} className="home-btn" alt="homebutton"/>
        </Link>
      </from>
      <Toaster />
    </div>
  );
}

export default AddPlant;
