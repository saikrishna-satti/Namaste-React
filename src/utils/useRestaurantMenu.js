import { useEffect, useState } from "react";
import { MENU_API_URL } from "./constants"


useRestaurantMenu=(resid)=>{
    const[restaurantdata,setRestaurantdata]=useState(null);

   
    const fectchMenuData=async()=>{
        const data=await fetch(MENU_API_URL+resid);
        const json=await data.json();
        console.log(json);
        setRestaurantdata(json?.data);

    };
     useEffect(()=>{
        fectchMenuData();
     },[resid])
    return restaurantdata;
}

export default useRestaurantMenu;