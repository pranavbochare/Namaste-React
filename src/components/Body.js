import { useState, useEffect } from "react";
import RestaurantCard from "./RestaurantCard";
import Shimmer from "./Shimmer";

const Body = () => {
  const [restaurants, setRestaurants] = useState([]);
  const [filteredRestaurants, setFilteredRestaurants] = useState([]);
  const [searchText, setSearchText] = useState("");

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const data = await fetch("https://www.eatsure.com/v1/api/get_restaurants");
    const json = await data.json();
    const restauratList = json.data.data;
    console.log(json.data.data);
    setRestaurants(restauratList);
    setFilteredRestaurants(restauratList);
  };

  // conditional rendering
  if (!restaurants.length) {
    return <Shimmer />;
  }

  return !restaurants.length ? (
    <Shimmer />
  ) : (
    <div className="body">
      <div className="search">
        <input
          type="text"
          placeholder="Search for restaurant"
          className="search-input"
          value={searchText}
          onChange={(e) => {
            setSearchText(e.target.value);
          }}></input>
        <button
          className="search-button"
          onClick={() => {
            const filteredRes = restaurants.filter((res) =>
              res.brand_name
                .toLowerCase()
                .trim()
                .replace(/\s+/g, "")
                .includes(searchText.toLocaleLowerCase().trim().replace(/\s+/g, "")),
            );
            if (filteredRes.length === 0) {
              alert("No restaurant found");
              setFilteredRestaurants(restaurants);
              setSearchText("");
            } else {
              setFilteredRestaurants(filteredRes);
              setSearchText("");
            }
          }}>
          Search
        </button>
      </div>
      <div className="filter">
        <button
          className="top-rated"
          onClick={() => {
            const filteredList = restaurants.filter((res) => res.sequence * 50 >= 1600);
            setFilteredRestaurants(filteredList);
          }}>
          Top Rated
        </button>
      </div>
      <div className="restaurant-container">
        {filteredRestaurants.map((res) => (
          <RestaurantCard key={res.brand_id} resData={res} />
        ))}
      </div>
    </div>
  );
};

export default Body;
