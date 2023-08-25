import { useParams } from "react-router";
import useRestaurantMenu from "../utils/useRestaurantMenu";
import RestaurantMenuCardAccordian from "./RestaurantMenuCardAccordian";
import { useState } from "react";

const RestaurantMenuCard = () => {
  const { resId } = useParams();
  const [showItems, setShowItems] = useState(null);
  const menuItems = useRestaurantMenu(resId);

  if (menuItems.length === 0) return <span>Menu</span>;
  const {
    name,
    cuisines,
    locality,
    areaName,
    costForTwoMessage,
    city,
    avgRatingString,
    totalRatingsString,
    cloudinaryImageId
  } = menuItems[0]?.card?.card?.info;

  return (
    <div className="flex flex-col">
      <span>Menu</span>
      <span>{name}</span>
      <span>{locality}</span>
      <span>{areaName}</span>
      <span>{cuisines.join(", ")}</span>
      <span>{costForTwoMessage}</span>
      <div className="flex w-8/12 mx-auto border border-black border-dotted"></div>
      <div className="flex flex-col mx-auto w-6/12 my-6">
        {menuItems[3]?.menuListItems.map((item, index) => {
          return (
            <RestaurantMenuCardAccordian
              key={index}
              data={item.card.card}
              showItems={index === showItems ? true : false}
              setShowItems={() =>
                setShowItems(index === showItems ? null : index)
              }
              resMeta={{ name: name, area: areaName, imgId: cloudinaryImageId }}
            />
          );
        })}
      </div>
    </div>
  );
};

export default RestaurantMenuCard;
