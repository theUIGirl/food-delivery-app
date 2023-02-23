import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { IMG_CDN_URL } from "../constants";
import Shimmer from "./ShimmerUI";

const RestaurantMenu = () => {
  const { id } = useParams();
  const [menu, setMenu] = useState(null);
  useEffect(() => {
    getRestaurantMenu(id);
  }, []);
  const getRestaurantMenu = async (id) => {
    const response = await fetch(
      `https://www.swiggy.com/dapi/menu/v4/full?menuId=${id}`
    );
    const data = await response.json();
    setMenu(data.data);
    console.log(data);
  };
  return (!menu)?<Shimmer/>:(
    <>
      <h2>{menu.id}</h2>
      <h2>{menu.name}</h2>
      <img src={IMG_CDN_URL + menu.cloudinaryImageId}/>
    </>
  );
};
export default RestaurantMenu;
