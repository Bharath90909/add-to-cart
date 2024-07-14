import React from "react";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Product from "./Product";

export default function Products() {
  const [products, setProducts] = useState([]);
  const [isLoading, setLoading] = useState(false);
  useEffect(() => {
    async function fetchProducts() {
      setLoading(true);
      const res = await fetch("https://dummyjson.com/products");
      const data = await res.json();
      setProducts(data.products);
      setLoading(false);
    }
    fetchProducts();
  }, []);
  return (
    <>
      {isLoading && <h1 className="loader">Loading...</h1>}
      <div className="products">
        {products.map((product, index) => (
          <Product data={product} index={index} key={index}></Product>
        ))}
      </div>
    </>
  );
}
