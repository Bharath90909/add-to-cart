import React from "react";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
export default function Header() {
  const cartItems = useSelector((store) => store.cart.items);
  // console.log("header:", cartItems);
  return (
    <div className="header">
      <Link to="/">
        <h1>Prodcut Logo</h1>
      </Link>
      <div className="nav-links">
        <Link to="/cart">Cart ({cartItems.length})</Link>
      </div>
    </div>
  );
}
