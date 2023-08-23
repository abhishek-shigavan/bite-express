import { useDispatch, useSelector } from "react-redux";
import { clearCart, removeItem } from "../utils/store/cartSlice";
import { clearRestaurantInfo } from "../utils/store/restaurantSlice";

const Cart = () => {
  const dispatch = useDispatch();
  const cartItems = useSelector((store) => store.cart.cartItems);
  const resDetails = useSelector((store) => store.restaurant.restaurantMeta);

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
    <>
      <h1>{resDetails[0].name}</h1>
      <h1>Cart Page</h1>
      {cartItems.length > 0 &&
        cartItems.map((ele, index) => (
          <div
            key={ele.id}
            className="flex w-6/12 m-auto bg-slate-300 justify-between"
          >
            <li>
              {ele.name} - {ele.price} - {ele.quantity}
            </li>
            <button onClick={() => handleRemoveItem(index)}>Delete</button>
          </div>
        ))}
      {cartItems.length > 0 && (
        <button onClick={() => handleClearCart()}>Clear Cart</button>
      )}
    </>
  );
};

export default Cart;
