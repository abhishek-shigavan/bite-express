import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addItemToCart, clearCart, removeItem, updateItemQuantity } from "../utils/store/cartSlice";
import { addRestaurantInfo, clearRestaurantInfo } from "../utils/store/restaurantSlice";

const ButtonContainer = (props) => {
  const [showAddBtn, setShowAddBtn] = useState(true);
  const [itemQuantity, setItemQuantity] = useState(1);
  const { menuItemName, item, resMeta, position } = props;
  const dispatch = useDispatch();
  const resDetails = useSelector((store) => store.restaurant.restaurantMeta);
  const cartItems = useSelector((store) => store.cart.cartItems);

  const checkItemInCart = (returnIndex = false) => {
    const isPresent = cartItems.findIndex((item) => item.name === menuItemName);
    if (isPresent >= 0) {
      setItemQuantity(cartItems[isPresent].quantity);
      setShowAddBtn(false);
    } else if (isPresent < 0 && !showAddBtn) {
      setShowAddBtn(true);
    }

    if (returnIndex) return isPresent;
  };

  useEffect(() => {
    checkItemInCart();
  }, [cartItems]);

  const dispatchAddItemToCart = (item) => {
    dispatch(
      addItemToCart({
        id: item.card.info.id,
        name: item.card.info.name,
        price: item.card.info.price / 100,
        quantity: 1,
      })
    );
  };

  const handleAddToCart = (item, resMeta) => {
    if (resDetails.length > 0 && resMeta.name !== resDetails[0]?.name) {
      dispatch(clearRestaurantInfo());
      dispatch(addRestaurantInfo(resMeta));
      dispatch(clearCart());
      dispatchAddItemToCart(item);
    } else if (resDetails.length > 0 && resMeta.name === resDetails[0]?.name) {
      dispatchAddItemToCart(item);
    } else {
      dispatch(addRestaurantInfo(resMeta));
      dispatchAddItemToCart(item);
    }
  };

  const handleRemoveItem = (itemIndex) => {
    if(cartItems.length === 1) {
        dispatch(clearCart())
        dispatch(clearRestaurantInfo())
    } else {
        dispatch(removeItem(itemIndex))
    }
  }

  const handleItemQuantity = (action) => {
    const itemIndex = checkItemInCart(true);

    action === "inc"
      ? dispatch(
          updateItemQuantity({
            item: cartItems[itemIndex],
            itemIndex: itemIndex,
            quantity: itemQuantity + 1,
          })
        )
      : itemQuantity > 1
      ? dispatch(
          updateItemQuantity({
            item: cartItems[itemIndex],
            itemIndex: itemIndex,
            quantity: itemQuantity - 1,
          })
        )
      : handleRemoveItem(itemIndex)
  };

  return (
    <>
      {showAddBtn ? (
        <button
          className="px-4 py-1 bg-black text-white absolute rounded-lg top-[80px] right-[22%]"
          onClick={() => handleAddToCart(item, resMeta)}
        >
          Add
        </button>
      ) : (
        <div className={position ? "flex static" : "flex absolute top-[80px] right-[15%]"}>
          <button
            onClick={() => handleItemQuantity("dec")}
            className="border border-gray-400 rounded-lg px-3 py-1 bg-black text-white"
          >
            -
          </button>
          <span className="border border-gray-400 rounded-lg px-3 py-1 bg-black text-white">
            {itemQuantity}
          </span>
          <button
            onClick={() => handleItemQuantity("inc")}
            className="border border-gray-400 rounded-lg px-3 py-1 bg-black text-white"
          >
            +
          </button>
        </div>
      )}
    </>
  );
};

export default ButtonContainer;
