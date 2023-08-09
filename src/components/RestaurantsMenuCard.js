import { useEffect, useState } from "react";
import { useParams } from "react-router";
import { RES_MENU_CARD_URL } from "../utils/config";

const RestaurantMenuCard = () => {
  const [menuItems, setMenuItems] = useState([]);
  const { resId } = useParams()

  useEffect(() => {
    getResMenu()
  }, [])
  
  const getResMenu = async () => {
    const resMenu = await fetch(RES_MENU_CARD_URL+resId)
    const resMenuJson = await resMenu.json()
    setMenuItems(resMenuJson.data.cards)
  }

  if(menuItems.length === 0) return <span>Menu</span> 
  const {name, cuisines, locality, areaName, costForTwoMessage, city, avgRatingString, totalRatingsString } = menuItems[0]?.card?.card?.info

  return (
    <div className="res-menu">
      <span>Menu</span>
      <span>{name}</span>
      <span>{locality}</span>
      <span>{areaName}</span>
      <span>{cuisines.join(", ")}</span>
      <span>{costForTwoMessage}</span>
      {menuItems[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card?.card?.itemCards?.map((item) => {
        return <span key={item.card.info.id}>{item.card.info.name} -- {item.card.info.price / 100}</span>
      })}
    </div>
  );
};

export default RestaurantMenuCard;
