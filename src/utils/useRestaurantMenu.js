import { useEffect, useState } from "react";
import { RES_MENU_CARD_URL } from "./config";

const useRestaurantMenu = (resId) => {
  const [menuItems, setMenuItems] = useState([]);

  useEffect(() => {
    getResMenu();
  }, []);

  const getResMenu = async () => {
    const resMenu = await fetch(RES_MENU_CARD_URL + resId);
    const resMenuJson = await resMenu.json();
    const listItems = resMenuJson?.data?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards?.filter(item => item.card.card.itemCards || item.card.card.categories)
    setMenuItems([...resMenuJson.data.cards, {menuListItems: listItems}]);
  };

  return menuItems;
};

export default useRestaurantMenu;
