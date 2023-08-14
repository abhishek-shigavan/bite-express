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
    setMenuItems(resMenuJson.data.cards);
  };

  return menuItems;
};

export default useRestaurantMenu;
