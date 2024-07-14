import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import AppLayout from "./components/AppLayout";
import Products from "./components/Products";
import ProductPage from "./components/ProductPage";
import Cart from "./components/Cart";

import "./components/product.css";
export default function App() {
  const appRouter = createBrowserRouter([
    {
      path: "/",
      element: <AppLayout />,
      children: [
        {
          path: "/",
          element: <Products />,
        },
        {
          path: "/product/:productId",
          element: <ProductPage></ProductPage>,
        },
        {
          path: "/cart",
          element: <Cart />,
        },
      ],
    },
  ]);
  return <RouterProvider router={appRouter} />;
}
