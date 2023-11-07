import {useState, useEffect} from 'react';
import {Link} from 'react-router-dom';
import axios from "axios";
import Card from '../components/Card/Card';
import CarouselCustomArrows from '../components/Carousel/Carousel';
import Loading from '../components/Loading/Loading';
import * as loadingData from "../loading/restaurant.json";
const URL = import.meta.env.VITE_BASE_URL;
const USERNAME = import.meta.env.VITE_BASE_USERNAME;
const PASSWORD = import.meta.env.VITE_BASE_PASSWORD;
const config = {
    auth: {
        username:USERNAME,
        password:PASSWORD,
    },
};

const Restaurant = () => {
    const [restaurants, setRestaurants] = useState([]);
    const [loading, setLoading] = useState(false);
    useEffect(() => {
      const fetchAllRestaurant = async () => {
        try {
          const res = await axios.get(`${URL}/restaurants`, config);
          setRestaurants(res.data);
          setLoading(false);
        } catch (error) {
          console.error(error);
        }
      };
      setLoading(true);
      fetchAllRestaurant();
    }, []);

    const handDelete = async (id) =>{
        try {
            await axios.delete(`${URL}/restaurant/${id}`, config);
            window.location.reload();
        } catch (error) {
            console.error(error);
        }
    }
  
  return (
  <>
  <CarouselCustomArrows/>
    <div>
        <h1 className=' ml-[210px] mt-[20px] font-bold text-[30px] text-gray-700' >📢 รายการอาหารที่แนะนำ</h1>
        <div className="row">
        {!loading ? (
          <div className="restaurants">
            {restaurants.map((restaurant) => {
              return (
                <Card
                  restaurant={restaurant}
                  key={restaurant.id}
                  handelDelete={handDelete}
                />
              );
            })}
          </div>
        ) : (
          <Loading animation={loadingData} />
        )}
        </div>
    </div>
    <br /><br />
    
    

    <div>
    <h1 className=' ml-[210px] mt-[20px] font-bold text-[30px] text-gray-700' >🔖 สินค้าขายดี</h1>
        <div className="row">
        {!loading ? (
          <div className="restaurants">
            {restaurants.map((restaurant) => {
              return (
                <Card
                  restaurant={restaurant}
                  key={restaurant.id}
                  handelDelete={handDelete}
                />
              );
            })}
          </div>
        ) : (
          <Loading animation={loadingData} />
        )}
        </div>
    </div>
    <br /><br />
    
    </>
  )
}

export default Restaurant;