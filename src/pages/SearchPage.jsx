import React, { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import { ProductCard } from "../component/ProductCard";

export const SearchPage = () => {
  const [products, setProducts] = useState([]);
  const [filteredProducts, setfilteredProducts] = useState([]);
  const [searchMessage, setSearchMessage] = useState("");
  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);

  const query = queryParams.get("q");

  const PRODUCTS_API = import.meta.env.VITE_PRODUCTS_API;

  useEffect(() => {
    const featchProducts = async () => {
      try {
        const response = await fetch(`${PRODUCTS_API}`);
        if (!response.ok) throw new Error("Faild to fetch products");
        const data = await response.json();
        setProducts(data);
        //console.log("Searched Data", data);
      } catch (error) {
        console.log("Error fetching products");
      }
    };
    featchProducts();
  }, []);

  useEffect(() => {
    if (query) {
      const updatedFilteredProducts = products.filter((product) =>
        product.title.toLowerCase().includes(query.toLowerCase()),
      );
      if (updatedFilteredProducts.length !== 0) {
        setfilteredProducts(updatedFilteredProducts);
        setSearchMessage("");
      } else {
        setfilteredProducts([]);
        setSearchMessage("No products Found");
      }
    } else {
      setfilteredProducts(products);
    }
  }, [query, products]);

  return (
    <div className="container mx-auto px-4 my-5">
      <h1 className="font-bold text-2xl text-center my-4">Search Result</h1>
      {searchMessage && (
        <p className="font-bold text-xl text-center my-4">{searchMessage}</p>
      )}
      <div className="grid grid-cols-4 gap-4 my-4">
        {filteredProducts &&
          filteredProducts.map((product) => {
            return (
              <ProductCard key={`search-${product.id}`} product={product} />
            );
          })}
      </div>
    </div>
  );
};
