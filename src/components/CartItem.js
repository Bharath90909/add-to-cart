import React, { useReducer, useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addItem, removeItem } from "../store/cartSlice";

export default function CartItem({ data, index }) {
  const { title, price, url, quantity } = data;
  const dispatch = useDispatch();
  const [quantityCount, setQuantity] = useState(quantity);
  useEffect(() => {
    setQuantity(quantity);
  }, [quantity]);
  function removeHandler() {
    dispatch(removeItem(index));
  }

  function increment() {
    dispatch(
      addItem({
        type: "UPDATE__QUANTITY",
        ...data,
        id: index,
        quantity: quantityCount + 1,
      })
    );
    setQuantity((prev) => prev + 1);
  }

  function decrement() {
    dispatch(
      addItem({
        type: "UPDATE__QUANTITY",
        ...data,
        id: index,
        quantity: quantityCount - 1,
      })
    );
    setQuantity((prev) => prev - 1);
  }

  return (
    <div className="cart-item">
      <div className="cart-content">
        <h1>{title}</h1>
        <div className="cart-item-price-rating">
          <span>
            <strong>Price:${price}</strong>
          </span>
          <p>Quantity:{quantityCount}</p>
        </div>
      </div>
      <div className="cart-item-img">
        <img src={url}></img>
        <div className="cart-buttons">
          <button onClick={() => decrement()}>-</button>
          <button onClick={() => increment()}>+</button>
        </div>
      </div>
      <button onClick={removeHandler}>Remove</button>
    </div>
  );
}
