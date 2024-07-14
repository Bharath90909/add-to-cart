import React from "react";
import { Outlet, useNavigation } from "react-router-dom";
import { Provider } from "react-redux";
import Header from "./Header";
import appStore from "../store/appStore";
import "./product.css";
export default function AppLayout() {
  return (
    <Provider store={appStore}>
      <div className="container">
        <Header />
        <Outlet />
      </div>
    </Provider>
  );
}
