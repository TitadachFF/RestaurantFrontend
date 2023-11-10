import React, { useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import api from "../services/api";



const Update = () => {
  const [restaurant, setRestaurant] = useState({
    name: "",
    type: "",
    image: "",
  });
  const navigate = useNavigate();
  const [error, setError] = useState(false);
  const { restaurantId } = useParams();
  const handleChange = (e) => {
    setRestaurant((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };


  useEffect(() => {

    const fetchAllRestaurant = async () => {
      try {
        const res = await api.get(`/restaurant/${restaurantId}`, );
        setRestaurant(res.data);
      } catch (error) {
        console.error(error);
      }
    };
    fetchAllRestaurant()
  },[]);

  const handleClick = async (e) => {
    e.preventDefault();
    try {
      await api.put(`/restaurant/${restaurantId}`, restaurant, );
      navigate("/");
    } catch (error) {
      console.error(error);
      setError(true);
    }
  };

  return (
    <div className="h-[700px] flex justify-center items-center  mt-[20px] ">
 
      <div className="row form">
        <div className="col-6 card justify-content-center">
        <h1 className=" font-bold text-[30px]">เเก้ไขรายการอาหาร</h1>
          <h5 className="card-header">เเก้ไขข้อมูลรายการอาหาร</h5>
          <h5 className="card-header   text-red-500">*โปรดตรวจสอบข้อมูลให้ถูกต้องก่อนทำการเเก้ไข</h5>
          <div className="error text-red-500">{error && "มีบางอย่างผิดพลาดโปรดตรวจสอบ"}</div>
          <div className="card-body">
            <form>
              <div className="form-group">
                <label  className='text-[20px]' htmlFor="name">*รูปภาพอาหาร</label>
                <br />
                <input
                  type="text"
                  className="form-control rounded-lg w-[500px]"
                  name="name"
                  placeholder="Restaurant name"
                  onChange={handleChange}
                  value={restaurant.name}
                />
              </div>
<br />
              <div className="form-group">
                <label className='text-[20px]'  htmlFor="type">*ประเภทอาหาร</label>
                <br />
                <input
                  type="text"
                  className="form-control rounded-lg w-[500px]"
                  name="type"
                  placeholder="Restaurant type"
                  onChange={handleChange}
                  value={restaurant.type}
                />
              </div>
<br />
              <div className="form-group">
                <label className='text-[20px]'  htmlFor="image">*[URL]รูปภาพอาหาร</label>
                <br />
                <input
                  type="text"
                  className="form-control rounded-lg w-[500px]"
                  name="image"
                  placeholder="Restaurant image"
                  onChange={handleChange}
                  value={restaurant.image}
                />
              </div>
              <br />

              <div className="flex justify-center">
              <Link to=""   className="btn btn-success  bg-pink-500 text-white rounded-xl p-3 mr-2 " onClick={handleClick}>
                Update
              </Link>
         

              
              <Link to="/"className="btn btn-success  bg-gray-500 text-white rounded-xl p-3 mr-2 " >
                Cancel
              </Link>
              </div>
              <hr className="my-5 border-blue-gray-300 decoration-dashed" />
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Update;
