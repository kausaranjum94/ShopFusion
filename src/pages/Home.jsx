import React, { useEffect, useState, useMemo } from "react";
import { ProductCard } from "../component/ProductCard";
import { ShimmerGrid } from "../component/shimmer/ShimmerGrid";
import { useParams, useNavigate, useLocation } from "react-router-dom";
import { useFetchProducts } from "../hooks/useFetchProducts";
import { useFetchCategories } from "../hooks/useFetchCategories";
import { useSearchParams } from "react-router-dom";

const PRODUCTS_API = import.meta.env.VITE_PRODUCTS_API;

export const Home = () => {
  const [wishlist, setWishlist] = useState([]);
  const [wishlistMessage, setwishlistMessage] = useState("");

  const { name } = useParams();
  const navigate = useNavigate();
  const location = useLocation();

  const [searchParams] = useSearchParams();
  const sortOption = searchParams.get("sort");

  const {
    products,
    loading: productLoading,
    error: productError,
  } = useFetchProducts(PRODUCTS_API);

  const {
    categories,
    loading: categoryLoading,
    error: categoryError,
  } = useFetchCategories(PRODUCTS_API);

  console.log("Products", products);

  useEffect(() => {
    localStorage.setItem("wishlist", JSON.stringify(wishlist));
  }, [wishlist]);

  const addToWishlist = (product) => {
    console.log("Product to be added to wishlist", product);
    if (!wishlist.find((item) => item.id === product.id)) {
      setWishlist((prev) => {
        if (prev.find((item) => item.id === product.id)) return prev;
        return [...prev, product];
      });
      setwishlistMessage(`${product.title} Item is added to wishlist`);
      setTimeout(() => {
        setwishlistMessage("");
      }, 1000);
    } else {
      console.log("Item is already in wishlist");
    }
  };

  const finalProducts = useMemo(() => {
    let updated = name
      ? products.filter((product) => product.category === name)
      : products;

    if (sortOption === "price-asc") {
      return [...updated].sort((a, b) => a.price - b.price);
    }

    // For Sorting
    if (sortOption === "price-desc") {
      return [...updated].sort((a, b) => b.price - a.price);
    }

    if (sortOption === "name-asc") {
      return [...updated].sort((a, b) => a.title.localeCompare(b.title));
    }

    if (sortOption === "rating") {
      return [...updated].sort((a, b) => a.rating.rate - b.rating.rate);
    }

    return updated;
  }, [products, name, sortOption]);

  if (productError) return <p>Error: {productError}</p>;
  if (categoryError) return <p>Error: {categoryError}</p>;

  if (productLoading || categoryLoading) return <ShimmerGrid />;
  return (
    <>
      <div className="container mx-auto px-4 my-5">
        <div className="flex justify-between my-6">
          <div className="flex flex-wrap gap-3  justify-center">
            <button
              onClick={() => navigate("/")}
              className={`px-4 py-2 rounded-md ${
                !name ? "bg-black text-white" : "bg-gray-200"
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

          <select
            value={sortOption || ""}
            // onChange={(e) => setsortOption(e.target.value)}
            onChange={(e) => {
              const value = e.target.value;
              navigate(`${location.pathname}?sort=${value}`);
            }}
            className="border p-2 rounded"
          >
            <option value="">Default</option>
            <option value="price-asc">Price - Low to High</option>
            <option value="price-desc">Price - High to Low</option>
            <option value="name-asc">Name A - Z</option>
            <option value="rating">Rating</option>
          </select>
        </div>

        <div className="grid grid-cols-4 gap-4">
          {finalProducts.map((product) => (
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
      </div>
    </>
  );
};
