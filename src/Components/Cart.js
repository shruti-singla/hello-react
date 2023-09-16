import { useDispatch, useSelector } from "react-redux";
import ItemList from "./ItemList";
import { clearCart } from "../utils/cartSlice";

const Cart = () => {
  const cartItems = useSelector((store) => store.cart.items);

  const dispatch = useDispatch();

  const handleClearEvent = () => {
    dispatch(clearCart());
  };

  return (
    <div className="m-4 p-4 text-center">
      <div className="">
        <h1 className="text-2xl font-bold">Cart</h1>
        <button className="m-2 p-2 bg-gray-600 text-white" onClick={handleClearEvent}>Clear Cart</button>
      </div>
      <div className="w-6/12 m-auto text-center">

        {cartItems.length === 0 && <h1 className="mt-4">Your cart is empty. Please add some</h1>}

        <ItemList items={cartItems} />
      </div>
    </div>
  );
};

export default Cart;
