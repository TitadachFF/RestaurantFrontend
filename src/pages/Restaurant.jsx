import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import axios from "axios";
import Card from '../components/Card/Card';
import CarouselCustomArrows from '../components/Carousel/Carousel';
import Loading from '../components/Loading/Loading';
import * as loadingData from "../loading/restaurant.json";
import { Carousel } from '@material-tailwind/react';
import NavBarCate from '../components/Navbar/Navbar.category';
import authHeader from "../services/auth.header";
import NavBar from '../components/Navbar/NavBar';
import { useAuthContext } from '../context/AuthContext';
import { useSearchContext } from "../hook/SearchContext";





const URL = import.meta.env.VITE_BASE_URL;
const USERNAME = import.meta.env.VITE_BASE_USERNAME;
const PASSWORD = import.meta.env.VITE_BASE_PASSWORD;
const config = {
  auth: {
    username: USERNAME,
    password: PASSWORD,
  },
  headers: authHeader(),
};

const Restaurant = () => {
  const { user } = useAuthContext()
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

  const handDelete = async (id) => {
    try {
      await axios.delete(`${URL}/restaurant/${id}`, config);
      window.location.reload();
    } catch (error) {
      console.error(error);
    }
  }
  const { setSearchValue } = useSearchContext();
  const { searchValue } = useSearchContext(); const filteredRestaurants = restaurants.filter((restaurant) => {
    return (
      restaurant.name.toLowerCase().includes(searchValue.toLowerCase()) ||
      restaurant.type.toLowerCase().includes(searchValue.toLowerCase())
    );
  });
  return (
    <>


      <NavBar />
      <CarouselCustomArrows />

      <NavBarCate />




      <div className='bg-gray-100 '>
        <br />
        <h1 className='  mt-[20px] font-bold text-[30px] text-gray-700 text-center '   >🍝 เมนูทั้งหมดในร้าน</h1>
        <div className='place-items-center ml-[0px] mr-[20px]  '>



          <div className="card  ">
            <div className="row">
            {searchValue && filteredRestaurants.length > 0 ? (
            <>
              {filteredRestaurants.map((data) => {
                return <Card restaurant={data} key={data.id} />;
              })}
            </>
          ) : searchValue && filteredRestaurants.length === 0 ? (
            <div style={{ textAlign: "center", marginTop: "150px" }}>
              No matching restaurants found.
            </div>
          ) : restaurants.length > 0 ? (
            restaurants.map((data) => {
              return <Card restaurant={data} key={data.id} />;
            })
          ) : (
            <div
              className="spinner-border"
              style={{ marginTop: "150px" }}
              role="status"
            ></div>
          )}
            </div>
          </div>
        </div>
        <br /> <br />
      </div>











          



    </>
  )
}

export default Restaurant;