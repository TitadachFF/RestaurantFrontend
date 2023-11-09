import { Link } from "react-router-dom";
import React from 'react'
import Update from "../../pages/Update";
import axios from "axios";
import { useAuthContext } from "../../context/AuthContext";


const Card = ({ restaurant, handelDelete, user, logout }) => {

    const handDelete = async (id) => {
        try {
            await axios.delete(`${URL}/restaurants/${id}`, config);
            window.location.reload();
        } catch (error) {
            console.error(error);
        }
    }


    
    return (
        <div className="card" style={{ width: "18rem" }} key={restaurant.id}>
            <div className="w-[250px] h-[170px]  ">
            <img src={restaurant.image} alt="" className='card-img-top h-full w-full  rounded-lg' />
            </div>
            <div className="card-body">
                <h5 className='title'>{restaurant.name}</h5>
                <p className="card-text mb-[20px]">{restaurant.type}</p>

                {user && user.roles && user.roles.some(role => role === "ROLES_ADMIN") && (
                    <Link to="" className=' bg-red-600 text-white rounded-xl p-2 mr-2 ' onClick={() => {
                        handelDelete(restaurant.id);
                    }}>
                        Delete
                    </Link>)}
              


                {user && user.roles.includes("ROLES_ADMIN") && (
                    <Link to={`./Update/${restaurant.id}`} className='bg-yellow-400 text-white rounded-xl p-2 mt-5'>
                        Edit
                    </Link>
                )}
          
        </div>
        </div>
    )
}
export default Card;