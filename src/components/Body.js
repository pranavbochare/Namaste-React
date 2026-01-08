import RestaurantCard from "./RestaurantCard";
import { resList } from "../public/reslist";
import { useState } from "react";

const Body = () => {
  const [restaurants, setRestaurants] = useState(resList);
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
            const filteredList = restaurants.filter((res) => res.info.avgRating >= 4.5);
            setRestaurants(filteredList);
          }}>
          Top Rated
        </button>
      </div>
      <div className="restaurant-container">
        {restaurants.map((res) => (
          <RestaurantCard key={res.info.id} resData={res.info} />
        ))}
      </div>
    </div>
  );
};

export default Body;
