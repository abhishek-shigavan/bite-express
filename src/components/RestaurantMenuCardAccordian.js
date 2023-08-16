import { useState } from "react";
import { RES_MENU_ITEMS_IMG } from "../utils/config";

const RestaurantMenuCardAccordian = ({ data }) => {
  const [showItems, setShowItems] = useState(false);
  const listItems = data.itemCards;
  const categoryItems = data.categories;
  return (
    <div className="flex flex-col bg-slate-100 mb-2">
      <div className="flex justify-between py-2 my-2 px-4">
        {data.title}
        <button onClick={() => setShowItems(!showItems)}>Expand</button>
      </div>
      {showItems && (
        <div>
          {listItems
            ? listItems.map((item) => (
                <div key={item.card.info.id} className="flex pb-3 px-4">
                  <div className="flex flex-col w-9/12">
                    <span key={item.card.info.id}>{item.card.info.name}</span>
                    <span className="py-2">₹ {item.card.info.price / 100}</span>
                    <span className="text-sm text-[#282c3f73]">
                      {item.card.info.description}
                    </span>
                  </div>
                  <div className="flex justify-end w-3/12 relative">
                    <img
                      src={RES_MENU_ITEMS_IMG + item.card.info.imageId}
                      className="rounded-lg w-[75%] h-[96px] object-cover"
                    />
                  </div>
                </div>
              ))
            : categoryItems.map((item, index) => (
                <li key={index}>{item.title}</li>
              ))}
        </div>
      )}
    </div>
  );
};

export default RestaurantMenuCardAccordian;
