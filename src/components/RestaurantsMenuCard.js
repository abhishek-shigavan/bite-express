import { useParams } from "react-router";
import useRestaurantMenu from "../utils/useRestaurantMenu";

const RestaurantMenuCard = () => {
  const { resId } = useParams();

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
  } = menuItems[0]?.card?.card?.info;

  return (
    <div className="res-menu">
      <span>Menu</span>
      <span>{name}</span>
      <span>{locality}</span>
      <span>{areaName}</span>
      <span>{cuisines.join(", ")}</span>
      <span>{costForTwoMessage}</span>
      {menuItems[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card?.card?.itemCards?.map(
        (item) => {
          return (
            <span key={item.card.info.id}>
              {item.card.info.name} -- {item.card.info.price / 100}
            </span>
          );
        }
      )}
    </div>
  );
};

export default RestaurantMenuCard;
