import React, { useEffect, useState } from "react";
import { ProductCard } from "../component/ProductCard";
import { ShimmerCard } from "../component/shimmer/ShimmerCard";
import { ShimmerGrid } from "../component/shimmer/ShimmerGrid";
import { useParams, useNavigate } from "react-router-dom";

export const Home = () => {
  const [products, setProducts] = useState([]);
  const [wishlist, setWishlist] = useState([]);
  const [wishlistMessage, setwishlistMessage] = useState("");
  const [categories, setCategories] = useState([]);

  const PRODUCTS_API = import.meta.env.VITE_PRODUCTS_API;

  const { name } = useParams();
  const navigate = useNavigate();

  const fetchProducts = async () => {
    try {
      const response = await fetch(PRODUCTS_API);
      if (!response.ok) throw new Error("Faild to Featch");
      const data = await response.json();
      console.log(data);
      setProducts(data);
    } catch (error) {
      console.error("Error Fetching Products: ", error);
    }
  };

  const fetechcategories = async () => {
    try {
      const response = await fetch(`${PRODUCTS_API}/categories`);
      if (!response.ok) throw new Error("Failed to fetch products");
      const data = await response.json();
      setCategories(data);
      console.log("Categoies", data);
    } catch (error) {
      console.log("Error fetching categories", error);
    }
  };

  useEffect(() => {
    localStorage.setItem("wishlist", JSON.stringify(wishlist));
  }, [wishlist]);

  useEffect(() => {
    fetchProducts();
    fetechcategories();
  }, []);

  const addToWishlist = (product) => {
    console.log("Product to be added to wishlist", product);
    if (!wishlist.find((item) => item.id === product.id)) {
      setWishlist([...wishlist, product]);
      console.log(wishlist);
      setwishlistMessage(`${product.title} Item is added to wishlist`);
      setTimeout(() => {
        setwishlistMessage("");
      }, 1000);
    } else {
      console.log("Item is already in wishlist");
    }
  };

  const filteredProducts = name
    ? products.filter((product) => product.category === name)
    : products;

  if (!products || products.length === 0) {
    return <ShimmerGrid />;
  }
  return (
    <>
      <div className="container mx-auto px-4 my-5">
        <div className="flex flex-wrap gap-3 my-6 justify-center">
          <button
            onClick={() => navigate("/")}
            className={`px-4 py-2 rounded-md ${
              name === "all" ? "bg-black text-white" : "bg-gray-200"
            }`}
          >
            All
          </button>

          {categories.map((category) => (
            <button
              key={category}
              onClick={() => navigate(`/category/${category}`)}
              className={`px-4 py-2 rounded-md capitalize ${
                name === category ? "bg-black text-white" : "bg-gray-200"
              }`}
            >
              {category}
            </button>
          ))}
        </div>
        <div className="grid grid-cols-4 gap-4">
          {filteredProducts.map((product) => (
            <ProductCard
              key={product.id}
              product={product}
              onAddWishlist={addToWishlist}
              wishlist={wishlist}
            />
          ))}
        </div>

        {wishlistMessage && (
          <div className="wishlistMessage fixed left-0 right-0 flex align-middle justify-center top-50 z-10">
            <p className="bg-black text-white py-5 px-8 rounded-md ">
              {wishlistMessage}
            </p>
          </div>
        )}
        {/* <div className="grid grid-cols-4 gap-4">
          {products.map((product) => {
            return (
              <ProductCard
                key={product.id}
                product={product}
                onAddWishlist={addToWishlist}
                wishlist={wishlist}
              />
            );
          })}
        </div> */}
      </div>
    </>
  );
};
