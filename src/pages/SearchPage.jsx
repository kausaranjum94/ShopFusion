import React, { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import { ProductCard } from "../component/ProductCard";
import { useFetchProducts } from "../hooks/useFetchProducts";

export const SearchPage = () => {
  const [filteredProducts, setfilteredProducts] = useState([]);
  const [searchMessage, setSearchMessage] = useState("");
  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);

  const query = queryParams.get("q");

  const PRODUCTS_API = import.meta.env.VITE_PRODUCTS_API;

  const { products, error: productError } = useFetchProducts(PRODUCTS_API);

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
