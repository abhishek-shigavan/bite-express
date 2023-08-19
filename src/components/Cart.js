import { useDispatch, useSelector } from "react-redux";
import { clearCart, removeItem } from "../utils/store/cartSlice";

const Cart = () => {
  const dispatch = useDispatch();
  const cartItems = useSelector((store) => store.cart.cartItems);

  const handleClearCart = () => {
    dispatch(clearCart());
  };

  const handleDeleteItem = (ele) => {
    dispatch(removeItem(ele));
  };

  return (
    <>
      <h1>Cart Page</h1>
      {cartItems.length > 0 &&
        cartItems.map((ele) => (
          <div
            key={ele.card.info.id}
            className="flex w-6/12 m-auto bg-slate-300 justify-between"
          >
            <li>
              {ele.card.info.name} - {ele.card.info.price / 100}
            </li>
            <button onClick={() => handleDeleteItem(ele)}>Delete</button>
          </div>
        ))}
      {cartItems.length > 0 && (
        <button onClick={handleClearCart}>Clear Cart</button>
      )}
    </>
  );
};

export default Cart;
