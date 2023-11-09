import React, { useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import axios from "axios";

const URL = import.meta.env.VITE_BASE_URL;
const USERNAME = import.meta.env.VITE_BASE_USERNAME;
const PASSWORD = import.meta.env.VITE_BASE_PASSWORD;
const config = {
    auth: {
        username: USERNAME,
        password: PASSWORD,
    },
};

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
                const res = await axios.get(
                    `${URL}/restaurants/${restaurantId}`,
                    config
                );
                setRestaurant(res.data);
            } catch (error) {
                console.error(error);
            }
        };
        fetchAllRestaurant()
    },[restaurantId]);

    const handleClick = async (e) => {
        e.preventDefault();
        try {
        
            await axios.put(
                `${URL}/restaurants/${restaurantId}`,
                restaurant,
                config
            );
            navigate("/");
        } catch (error) {
            console.error(error);
            setError(true);
        }
    };

console.log(restaurant);

    return (
        <div className="pt-[30px] h-[700px] flex justify-center items-center  mb-[150px]">
  
            <div className="row form">
                <div className="col-6 card justify-content-center ">
                    
                    <h1 className="card-header font-bold text-[30px] ">เเก้ไขรายการร้านอาหาร</h1>
                    <h5 className="card-header">เเก้ไขรายละเอียดของร้านอาหาร</h5>
                    <div className="error text-red-500">{error && "*มีบางอย่างผิดพลาดโปรดตรวจสอบข้อมูลการเเก้ไขให้ดี"}</div>
                    <div className="card-body">
                        <form onSubmit={handleClick}>
                            {" "}
                            <div className="form-group" style={{ marginTop: "10px" }}>
                                <label htmlFor="name" className="text-[20px]">ชื่อร้านอาหาร:</label>{" "}
                                <br />
                                <input
                                    type="text"
                                    className="form-control rounded-lg w-[500px]"
                                    name="name"
                                    placeholder={restaurant.name}
                                    onChange={handleChange}
                                />{" "}
                            </div>{" "}
                            <div className="form-group" style={{ marginTop: "15px" }}>
                                <label htmlFor="name" className="text-[20px]">ประเภทอาหาร :
                                </label>{" "}
                                <br />
                                <input
                                    type="text"
                                    className="form-control rounded-lg w-[500px]"
                                    name="type"
                                    placeholder={restaurant.type}
                                    onChange={handleChange}
                                />{" "}
                            </div>{" "}
                            
                            <div className="form-group" style={{ marginTop: "15px" }}>
                                {" "}
                                <label htmlFor="name" className="text-[20px]">รูปของร้านอาหาร :</label>{" "}
                                <br />
                                <input
                                    type="text"
                                    className="form-control rounded-lg w-[500px]"
                                    name="imageUrl"
                                    placeholder={restaurant.image}
                                    onChange={handleChange}
                                />{" "}
                            </div>{" "}
                            <label htmlFor="name" className="text-[15px] mt-[10px] text-red-500 justify-end flex">*โปรดตรวจสอบรายละเอียดก่อนทำการเเก้ไข</label>{" "}
                            <div className="flex justify-center mt-[20px]">
                                {" "}
                                <button
                                    className="btn btn-success  bg-pink-500 text-white rounded-xl p-3 mr-2 "
                                    style={{ marginRight: "15px" }}
                                    type="submit"

                                >ยืนยันการเเก้ไข
                                </button>{" "}
                                <button to="#" className="btn btn-success  bg-gray-500 text-white rounded-xl p-3 mr-2 " >
                                    ยกเลิก  {" "}
                                </button>{" "}
                                <div className="error" style={{ marginTop: "5px" }}>
                                   
                                </div>{" "}
                            </div>{" "}
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Update;