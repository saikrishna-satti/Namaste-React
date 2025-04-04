import { useState } from "react";
import RestaurantCard from "./RestaurantCard";
import Shimmer from "./shimmer";
import useRestaurantData from "../utils/useRestaurantData";
import useOnlinestatus from "../utils/useOnlineStatus";

const Body = () => {
  const [searchText, setSearchText] = useState("");
  const isOnline = useOnlinestatus();
  const[listofrestaurants,filteredrestaurants,setFilteredresatuarants]=useRestaurantData();

  const FilterRestaurants = () => {
    const filteredData = listofrestaurants.filter((res) =>                                                       
      res.info.name.toLowerCase().includes(searchText.toLowerCase())
    );
    setFilteredresatuarants(filteredData);
  };
 
  
  if (!isOnline) return <h1 className="pt-[120px]">Looks like you are offline</h1>;


  
  return filteredrestaurants.length === 0 ? (
    <Shimmer />
  ) : (
    <div className="w-[90vw] mx-auto flex flex-col justify-between items-center p-4">
      <div className="py-4 flex justify-between w-full max-w-xl">
        <input
          type="text"
          placeholder="Search here"
          className="w-3/4 p-3 border border-gray-300 rounded-md shadow-lg transition duration-300 ease-in-out focus:ring-2 focus:ring-blue-500 outline-none"
          value={searchText}
          onChange={(e) => setSearchText(e.target.value)}
        />
        <button
          onClick={FilterRestaurants}
          className="px-4 py-3 bg-black text-white rounded-lg hover:bg-gray-800 transition-colors duration-300">
          Search
        </button>
      </div>
      <div className="w-full grid grid-cols-1 md:grid-cols-3 lg:grid-cols-3 gap-4">
        {filteredrestaurants.map((restaurant) => (
          <RestaurantCard key={restaurant?.info?.id} restaurantData={restaurant} />
        ))}
      </div>
    </div>
  );
};

export default Body;

