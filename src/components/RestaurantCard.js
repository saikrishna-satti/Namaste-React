import { Link } from "react-router-dom";
import {IMG_CDN_URL } from "../utils/constants";


const RestaurantCard = (props) => {
  const { restaurantData } = props;

  const {
    id="",
    cloudinaryImageId = "",
    name = "Unnamed Restaurant",
    areaName = "Unknown Area",
    avgRating = "N/A",
    cuisines = [],
    costForTwo = "N/A",
    sla = "N/A",
  } = restaurantData?.info || {};

  return (
    <Link to={`/restaurants/${id}`} className="border border-gray-200 rounded-lg overflow-hidden shadow-md transform hover:scale-105 transition-all duration-300">
      <img
        src={IMG_CDN_URL + cloudinaryImageId}
        alt="restaurant image"
        className="w-full h-48 object-cover"
      />
      <div className="p-4">
        <h3 className="text-xl font-semibold text-gray-800 truncate">{name}</h3>
        <div className="mt-2 flex justify-between items-center text-sm text-gray-600">
          <span className="flex items-center space-x-1">
            <span className="font-semibold">{avgRating}</span>
            <span className="text-xs">⭐</span>
          </span>
          <span>{costForTwo}</span>
          <span>{sla.deliveryTime} mins</span>
        </div>
        <p className="text-sm text-gray-500 mt-2">
          {cuisines.join(", ").slice(0, 30)}
          {cuisines.join(", ").length > 30 ? "..." : ""}
        </p>
        <p className="text-xs text-gray-400 mt-1">{areaName}</p>
      </div>
    </Link>
  );
};

export default RestaurantCard;
