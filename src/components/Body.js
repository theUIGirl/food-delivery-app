import { restaurantList } from "../constants";
import RestaurantCard from "./RestaurantCard";
import { useEffect, useState } from "react";
import Shimmer from "./ShimmerUI";
// const searchTxt="kfc";
function filterData(restaurants, searchTxt) {
  const filteredData = restaurants.filter((restaurant) => {
    return restaurant?.data?.data?.name
      .toLowerCase()
      .includes(searchTxt.toLowerCase());
  });
  return filteredData;
}

const Body = () => {
  const [searchTxt, setSearchTxt] = useState("");
  const [allRestaurants, setAllRestaurants] = useState([]);
  const [filteredRestaurants, setFilteredRestaurants] = useState([]);

  useEffect(() => {
    console.log("useeffect");
    getRestaurants();
  }, []);

  async function getRestaurants() {
    const data = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?page=0&ignoreServiceability=true&lat=18.621055599465002&lng=73.8306423049214&pageType=SEE_ALL&sortBy=RELEVANCE&page_type=DESKTOP_SEE_ALL_LISTING"
    );
    const res = await data.json();
    // optional chaining
    setAllRestaurants(res?.data?.cards);
    setFilteredRestaurants(res?.data?.cards);
  }

  // don't render component to fix UI break(Early return)
  if (!allRestaurants) return null;
  // if()
  return allRestaurants?.length === 0 ? (
    <Shimmer />
  ) : (
    <>
      <div className="search-container">
        <input
          type="text"
          className="search-input"
          placeholder="Search for restaurants"
          value={searchTxt}
          onChange={(e) => {
            setSearchTxt(e.target.value);
          }}
        />
        <button
          className="search-btn"
          onClick={() => {
            setFilteredRestaurants(
              filterData(allRestaurants, searchTxt.toLowerCase())
            );
          }}
        >
          Search
        </button>
      </div>
      <div className="restaurant-card-container">
        {filteredRestaurants.length === 0 ? (
          <h3>No Restaurant Found</h3>
        ) : (
          filteredRestaurants.map((restaurant) => {
            return (
              <RestaurantCard
                key={restaurant.data.data.id}
                {...restaurant.data.data}
              />
            );
          })
        )}
      </div>
    </>
  );
};

export default Body;
