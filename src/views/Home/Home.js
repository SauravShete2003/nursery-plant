import "./Home.css";
import PlantCard from "./../../components/PlantCard/PlantCard";
import { useEffect, useState } from "react";
import axios from "axios";
import toast,{Toaster} from "react-hot-toast";

function Home() {
  const [plants, setPlants] = useState([]);

  const loadPlants = async () => {
    
    toast.loading('Loading Plants...')

    const response = await axios.get('https://nursery-server-d1yr.onrender.com/plants')
 
    toast.dismiss()
    toast.success('plants loaded successfully')
    setPlants(response.data.data)
  };

  useEffect(() => {
    loadPlants();
  }, []);

  return (
    <div>
      <h1>Plants</h1>
      {plants.map((plant, i) => {
        const { _id, name, image, category, price, description } = plant;
        return (
          <PlantCard
            key={i}
            id={_id}
            name={name}
            image={image}
            category={category}
            price={price}
            description={description} 
          />);
      })}
     <Toaster/>
    </div>
  );
}

export default Home;
