import RestaurantCard from "./RestaurantCard";
import { useState, useEffect } from "react";

const Body = () => {
  const [restaurants, setRestaurants] = useState([]);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const data = await fetch("https://www.eatsure.com/v1/api/get_restaurants");
    const json = await data.json();
    const restauratList = json.data.data;
    console.log(json.data.data);
    setRestaurants(restauratList);
  };

  return (
    <div className="body">
      <div className="search">
        <input type="text" placeholder="Search for restaurant" className="search-input"></input>
        <button className="search-button">Search</button>
      </div>
      <div className="filter">
        <button
          className="top-rated"
          onClick={() => {
            const filteredList = restaurants.filter((res) => res.sequence * 50 >= 1600);
            setRestaurants(filteredList);
          }}>
          Top Rated
        </button>
      </div>
      <div className="restaurant-container">
        {restaurants.map((res) => (
          <RestaurantCard key={res.brand_id} resData={res} />
        ))}
      </div>
    </div>
  );
};

export default Body;
