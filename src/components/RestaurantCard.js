import image3 from "../../assets/foodplaceholder.png";
import { IMG_CDN_URL } from "../constants";
const RestaurantCard = ({ name, cloudinaryImageId, cuisines, avgRating }) => {
  return (
    <div className="restaurant-card">
      <img src={cloudinaryImageId ? IMG_CDN_URL + cloudinaryImageId : image3} />
      <h3 className="restaurant-name">{name}</h3>
      <h4 className="cuisine">{cuisines.join(", ")}</h4>
      <h5 className="ratings">{avgRating ? avgRating : 0} stars</h5>
    </div>
  );
};

export default RestaurantCard;
