import { useState,useEffect } from "react";
import { SWIGGY_API_URL } from "../utils/constants";


useRestaurantData=()=>{
   const[originalList,setOriginalList]=useState([]);
   const[restaurantList,setRestaurantList]=useState([]);

  
   const fetchdata = async () => {
    try {
      const data = await fetch(SWIGGY_API_URL);
      const json = await data.json();
      const restaurants = json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants || [];
      setOriginalList(restaurants);
      setRestaurantList(restaurants);

    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  useEffect(() => { fetchdata(); }, []);    
return [originalList,restaurantList,setRestaurantList];

}

export default useRestaurantData;