import { IMG_CDN_URL } from "../utils/constants";
import Shimmer from "./shimmer";
import "../RestaurantMenu.css";
import useRestaurantMenu from "../utils/useRestaurantMenu";
import { useParams } from "react-router-dom";

const RestaurantMenu = () => {
  const { resId } = useParams();
  const restaurantInfo = useRestaurantMenu(resId);

  // Show loading shimmer
  if (restaurantInfo === null) return <Shimmer />;

  // Extract restaurant details with safe defaults
  const {
    cloudinaryImageId = "",
    name = "Unknown Restaurant",
    avgRating = "N/A",
    totalRatings = "No Ratings",
    cuisines = [],
    locality = "Unknown Location",
    sla = {},
  } = restaurantInfo?.cards[2]?.card?.card?.info || {};

  // Extract item cards with safer handling
  const regularCards =
    restaurantInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards || [];

  
   
  const itemCards =
    regularCards.find((c) => c?.card?.card?.itemCards)?.card?.card?.itemCards || [];

  return (
    <div className="max-w-4xl mx-auto p-6">
      {/* Restaurant Header */}
      <div className="bg-gray-800 text-white rounded-lg shadow-md p-6 flex items-center gap-6">
        <img
          className="w-32 h-32 rounded-lg object-cover"
          src={IMG_CDN_URL + cloudinaryImageId}
          alt={name}
        />
        <div>
          <h1 className="text-2xl font-bold">{name}</h1>
          <p className="text-gray-300">{locality}</p>
          <p className="text-gray-400">{cuisines?.join(", ")}</p>
          <div className="flex items-center gap-4 mt-2">
            <span className="bg-green-600 text-white px-3 py-1 rounded-full text-sm">
              ⭐ {avgRating}
            </span>
            <span className="text-gray-300">{totalRatings} Ratings</span>
          </div>
          <span className="mt-2 inline-block bg-gray-700 text-white px-4 py-1 rounded">
            ⏳ {sla?.slaString || "N/A"}
          </span>
        </div>
      </div>

      {/* Menu Items */}
      <div className="mt-8">
        {itemCards.length ? (
          itemCards.map((item) => {
            const {
              id,
              name,
              price,
              defaultPrice,
              ratings,
              imageId,
              description,
            } = item.card.info;

            return (
              <div
                key={id}
                className="flex justify-between items-center p-4 bg-white shadow-md rounded-lg mb-4"
              >
                <div className="flex-1">
                  <h2 className="text-lg font-semibold">{name}</h2>
                  <h4 className="text-gray-600">₹{price / 100 || defaultPrice / 100}</h4>
                  <p className="text-gray-500 text-sm">{description?.slice(0,60)}{description.length>60?"...":""}</p>
                </div>
                <div className="flex flex-col items-center">
                  <img className="w-20 h-20 rounded-lg object-cover" src={IMG_CDN_URL + imageId} alt={name} />
                  <button className="mt-2 bg-yellow-500 text-white px-4 py-1 rounded-lg hover:bg-yellow-600 transition">
                    ADD
                  </button>
                </div>
              </div>
            );
          })
        ) : (
          <h2 className="text-center text-gray-500 mt-4">No items available</h2>
        )}
      </div>
    </div>
  );
};

export default RestaurantMenu;
