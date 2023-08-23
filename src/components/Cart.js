import { useDispatch, useSelector } from "react-redux";
import { clearCart, removeItem } from "../utils/store/cartSlice";

const Cart = () => {
  const dispatch = useDispatch();
  const cartItems = useSelector((store) => store.cart.cartItems);
  const resDetails = useSelector((store) => store.restaurant.restaurantMeta)

  return (
    <>
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
            <button onClick={() => dispatch(removeItem(index))}>Delete</button>
          </div>
        ))}
      {cartItems.length > 0 && (
        <button onClick={() => dispatch(clearCart())}>Clear Cart</button>
      )}
    </>
  );
};

export default Cart;