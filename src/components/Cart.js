import React from "react";
import { useSelector, useDispatch } from "react-redux";
import CartItem from "./CartItem";
import { clearCart } from "../store/cartSlice";
export default function Cart() {
  const cartItems = useSelector((store) => store.cart.items);
  const dispatch = useDispatch();

  const cartValue = cartItems.reduce(
    (acc, item) => item.price * item.quantity + acc,
    0
  );

  console.log(cartItems);
  return (
    <>
      <div className="clear-cart">
        <p>Cart Value:${Math.round(cartValue)}</p>
        <button onClick={() => dispatch(clearCart())}>clear</button>
      </div>

      <div className="cart">
        {cartItems.map((item, index) => (
          <CartItem data={item} index={index} key={index}></CartItem>
        ))}
      </div>
    </>
  );
}
