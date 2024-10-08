import "./Home.css";
import PlantCard from "./../../components/PlantCard/PlantCard";
import { useEffect, useState } from "react";
import axios from "axios";
import toast,{Toaster} from "react-hot-toast";
import addImg from "./gallery.png"
import { Link } from "react-router-dom";

function Home() {
  const [plants, setPlants] = useState([]);

  const loadPlants = async () => {
    
    toast.loading('Loading Plants...')

    const response = await axios.get(`${process.env.REACT_APP_API_URL}/plants`)
 
    toast.dismiss()
    toast.success('plants loaded successfully')
    setPlants(response.data.data)
  };

  useEffect(() => {
    loadPlants();
  }, []);

  return (
    <>
    <h1 style={{textAlign:"center"}}>All Plants</h1>
    <div className="home-container" style={{flexWrap : 'wrap'}}>
  
      {plants.map((plant, i) => {
        const { _id, name, image, category, price, description } = plant;
        return (
          <PlantCard
            key={i}
            _id={_id}
            name={name}
            image={image}
            category={category}
            price={price}
            description={description} 
            loadPlants={loadPlants}
          />);
      })}
     <Toaster/>
     <Link to={"./add"}>
     <img src={addImg} className="add-img" alt="add-img"/>
     </Link>

    </div>
    </>
   
  );
}

export default Home;
