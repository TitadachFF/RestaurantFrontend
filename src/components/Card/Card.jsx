import { Link } from "react-router-dom";
import React from 'react'
import Update from "../../pages/Update";
import axios from "axios";


const Card = ({ restaurant, handelDelete }) => {
    if (!restaurant || !restaurant.image) {
        // Handle the case where 'restaurant' or 'image' is undefined
        return null; // or return some default content or error message
    }

    
    return (
        <div className="card" style={{ width: "18rem" }} key={restaurant.id}>
            <img src={restaurant.image} alt="" className='card-img-top' />
            <div className="card-body">
                <h5 className='title'>{restaurant.name}</h5>
                <p className="card-text">{restaurant.type}</p>
                <div className="mt-[20px] ">
                <Link id="btn-card" to="" className=' bg-red-600 text-white rounded-xl p-2 mr-2' onClick={() => {
                    handelDelete(restaurant.id);
                }}>
                    Delete
                </Link>
                <Link id="btn-card" to={`/Update/${restaurant.id}`} className=' bg-yellow-400 text-white rounded-xl p-2 mt-5'>
                    Edit
                </Link>
                </div>
            </div>
        </div>
    )
}

export default Card;