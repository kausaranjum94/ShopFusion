import React, { useState, useEffect } from "react";
import { ProductCard } from "./ProductCard";

export const Wishlist = () => {
  const [wishlist, setWishlist] = useState([]);
  const [message, setMessage] = useState("");

  useEffect(() => {
    const storedWishlist = localStorage.getItem("wishlist");
    setWishlist(storedWishlist ? JSON.parse(storedWishlist) : []);
  }, []);

  const removeFromWishlist = (id) => {
    const updateWishlist = wishlist.filter((item) => item.id !== id);
    setWishlist(updateWishlist);
    localStorage.setItem("wishlist", JSON.stringify(updateWishlist));
  };

  return (
    <div className="container mx-auto px-4 my-5">
      <h1 className="text-center my-4 text-2xl font-bold">Wishlist</h1>
      {wishlist.length === 0 && (
        <p className="text-center font-bold text-black">
          Your Wishlist is Empty
        </p>
      )}
      <div className="grid grid-cols-4 gap-4">
        {wishlist.map((product) => {
          return (
            <ProductCard
              key={product.id}
              product={product}
              onRemoveWishlist={removeFromWishlist}
            />
          );
        })}
      </div>
    </div>
  );
};
