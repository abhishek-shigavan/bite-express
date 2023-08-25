import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { clearCart, removeItem } from "../utils/store/cartSlice";
import { clearRestaurantInfo } from "../utils/store/restaurantSlice";
import { RES_CARD_IMG } from "../utils/config";
import ButtonContainer from "./ButtonContainer";

const Cart = () => {
  const dispatch = useDispatch();
  const cartItems = useSelector((store) => store.cart.cartItems);
  const resDetails = useSelector((store) => store.restaurant.restaurantMeta);
  const [totalPrice, setTotalPrice] = useState(0);

  useEffect(() => {
    const total = cartItems.reduce(
      (prev, curr) => prev + curr.price * curr.quantity,
      0
    );
    setTotalPrice(total);
  }, [cartItems]);

  const handleRemoveItem = (index) => {
    if (cartItems.length === 1) {
      dispatch(clearCart());
      dispatch(clearRestaurantInfo());
    } else {
      dispatch(removeItem(index));
    }
  };

  const handleClearCart = () => {
    dispatch(clearCart());
    dispatch(clearRestaurantInfo());
  };

  return (
    <div className="min-h-screen min-w-full bg-[#E9ECEE] absolute">
      {resDetails.length > 0 ? (
        <div className="flex flex-col w-6/12 bg-white mx-auto mt-20 p-6">
          <div className="flex pb-9">
            <img
              src={RES_CARD_IMG + resDetails[0].imgId}
              className="w-4/12 rounded-xl mr-5"
            />
            <div className="flex flex-col">
              <span className="font-extrabold text-2xl">
                {resDetails[0].name}
              </span>
              <span className="text-[#686B78]">{resDetails[0].area}</span>
            </div>
          </div>
          <div>
            {cartItems.map((ele, index) => (
              <div key={ele.id} className="flex justify-between items-center">
                <div className="flex flex-col w-6/12">
                  <span className="font-bold text-lg">{ele.name}</span>
                  <span className="text-[#686B78]">₹ {ele.price}</span>
                </div>
                <div className="w-3/12">
                <ButtonContainer menuItemName={ele.name} resMeta={resDetails[0]} position={true}/></div>
                <span className="text-[#686B78] w-2/12">
                  ₹ {ele.price * ele.quantity}
                </span>
                <div className="flex justify-end w-1/12">
                <button onClick={() => handleRemoveItem(index)}>Delete</button></div>
              </div>
            ))}
          </div>
        </div>
      ) : (
        <div></div>
      )}
      {cartItems.length > 0 && (
        <>
          <span>{totalPrice}</span>
          <button onClick={() => handleClearCart()}>Clear Cart</button>
        </>
      )}
    </div>
  );
};

export default Cart;
