import React from "react";
import { useDispatch } from "react-redux";
import { addItem } from "../store/cartSlice";
export default function Product({ data, index }) {
  const { title, price, rating, images } = data;
  const url = images[0];
  const dispatch = useDispatch();

  function clickHandler() {
    const item = { id: index, title, price, rating, url, quantity: 1 };
    dispatch(addItem(item));
  }
  return (
    <div className="product" onClick={clickHandler}>
      <img src={url}></img>
      <div className="content">
        <h1>{title}</h1>
        <div className="price-rating">
          <span>
            <strong>{price}</strong>
          </span>
          <span>
            <strong>{rating}</strong>
          </span>
        </div>
        <button>Add Cart</button>
      </div>
    </div>
  );
}
