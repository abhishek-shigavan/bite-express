import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { clearCart, removeItem } from "../utils/store/cartSlice";
import { clearRestaurantInfo } from "../utils/store/restaurantSlice";
import { RES_CARD_IMG } from "../utils/config";
import ButtonContainer from "./ButtonContainer";
import AddressContainer from "./AddressContainer";

const Cart = () => {
  const dispatch = useDispatch();
  const cartItems = useSelector((store) => store.cart.cartItems);
  const resDetails = useSelector((store) => store.restaurant.restaurantMeta);
  const [totalPrice, setTotalPrice] = useState(0);
  const [gst, setGst] = useState(0);

  useEffect(() => {
    const total = cartItems.reduce(
      (prev, curr) => prev + curr.price * curr.quantity,
      0
    );
    setTotalPrice(total);
    setGst(Math.round(total / 18));
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
        <>
          <div className="flex flex-col w-6/12 bg-white mx-auto mt-20 p-6">
            <div className="flex pb-9">
              <img
                src={RES_CARD_IMG + resDetails[0].imgId}
                className="w-4/12 h-[180px] object-cover rounded-xl mr-5"
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
                <div
                  key={ele.id}
                  className="flex justify-between items-center pb-3"
                >
                  <div className="flex flex-col w-6/12">
                    <span className="text-lg">{ele.name}</span>
                    <span className="text-[#686B78]">₹ {ele.price}</span>
                  </div>
                  <div className="w-3/12">
                    <ButtonContainer
                      menuItemName={ele.name}
                      resMeta={resDetails[0]}
                      position={true}
                    />
                  </div>
                  <span className="text-[#686B78] w-2/12">
                    ₹ {ele.price * ele.quantity}
                  </span>
                  <div className="flex justify-end w-1/12">
                    <button onClick={() => handleRemoveItem(index)}>
                      Delete
                    </button>
                  </div>
                </div>
              ))}
            </div>
            <div className="border-b border-[#e9e9eb] my-5"></div>
            <div className="flex flex-col w-6/12 pb-3">
              <span className="pb-2">Bill Details</span>
              <div className="flex justify-between text-[#686B78] pb-1">
                <span>Item Total</span>
                <span>₹ {totalPrice}</span>
              </div>
              <div className="flex justify-between text-[#686B78] pb-1">
                <span className="">Delivery Fee | {resDetails[0].distance}</span>
                <span>₹ {resDetails[0].fee}</span>
              </div>
              <div className="flex justify-between text-[#686B78] pb-1">
                <span className="">GST Charges</span> <span>₹ {gst}</span>
              </div>
            </div>
            <div className="border-b border-[#e9e9eb] my-5"></div>
            <div className="flex justify-between">
              <div>
                <span className="mr-3">TO PAY</span>
                <span>₹ {Math.round(resDetails[0].fee + gst + totalPrice)}</span>
              </div>
              <>
                <button className="border px-3 py-1 rounded-lg" onClick={() => handleClearCart()}>Clear Cart</button>
              </>
            </div>
          </div>
          <AddressContainer />
        </>
      ) : (
        <div></div>
      )}
    </div>
  );
};

export default Cart;
