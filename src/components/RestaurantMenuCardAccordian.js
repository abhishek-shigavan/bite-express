import { RES_MENU_ITEMS_IMG } from "../utils/config";
import ButtonContainer from "./ButtonContainer";

const RestaurantMenuCardAccordian = (props) => {
  const { data } = props;
  const listItems = data.itemCards;
  const categoryItems = data.categories;

  return (
    <div className="flex flex-col bg-slate-100 mb-2">
      {data.categories && <div className="py-2 my-2 px-4">{data.title}</div>}
      <div>
        {listItems ? (
          <RenderListItem title={data.title} listItems={listItems} {...props} />
        ) : (
          categoryItems.map((item, index) => (
            <RenderListItem
              key={index}
              title={item.title}
              listItems={item.itemCards}
              {...props}
            />
          ))
        )}
      </div>
    </div>
  );
};

export default RestaurantMenuCardAccordian;

export const RenderListItem = (props) => {
  const { title, listItems, showItems, setShowItems, data, resMeta } = props;

  return (
    <>
      <div className="flex justify-between py-2 my-2 px-4">
        {title}
        <button onClick={() => setShowItems()}>Expand</button>
      </div>
      {showItems &&
        listItems.map((item) => (
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
              <ButtonContainer menuItemName={item.card.info.name} item={item} resMeta={resMeta} position={false}/>
            </div>
          </div>
        ))}
    </>
  );
};
