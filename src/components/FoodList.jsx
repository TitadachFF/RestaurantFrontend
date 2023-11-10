import React, { useEffect, useState } from 'react';
import api from '../services/api';
import Card from './Card/Card'; // Import Card component

const FoodList = ({ type }) => {
  const [restaurants, setRestaurants] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        // ปรับ URL เพื่อให้สอดคล้องกับ API ของคุณ
        const response = await api.get(`/restaurants?type=${type}`);
        setRestaurants(response.data);
      } catch (error) {
        console.error('Error fetching restaurants:', error);
      }
    };

    fetchData();
  }, [type]);

  return (
    <div>
      <h2>{type} Restaurants</h2>
      <ul>
        {restaurants.map((restaurant) => (
          <li key={restaurant.id}>
            {/* Render Card component for each restaurant */}
            <Card restaurant={restaurant} />
          </li>
        ))}
      </ul>
    </div>
  );
};

export default FoodList;
