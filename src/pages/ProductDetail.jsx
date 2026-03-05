import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useCart } from "../context/cartContext";
import { FaStar } from "react-icons/fa";
import { ShimmerProductDetails } from "../component/shimmer/ShimmerProductDetails";

export const ProductDetail = () => {
  const { addToCart, cartMessage, updateQuantity, cart } = useCart();
  const { id } = useParams();
  //console.log("ID=", id);

  const [productDetails, setProductDetails] = useState(null);

  const PRODUCTS_API = import.meta.env.VITE_PRODUCTS_API;

  useEffect(() => {
    const fetchProductDetails = async () => {
      try {
        const response = await fetch(`${PRODUCTS_API}/${id}`);
        if (!response.ok) throw new Error("Faild to fetch product details");
        const data = await response.json();
        //console.log(data);
        setProductDetails(data);
      } catch (error) {
        console.log("Error Fecthing product details", error);
      }
    };
    fetchProductDetails();
  }, [id]);

  if (!productDetails) return <ShimmerProductDetails />;

  const cartItem = cart.find((item) => item.id === productDetails.id);
  const quantity = cartItem ? cartItem.quantity : 0;

  return (
    <>
      <div className="container mx-auto px-4 my-8">
        {cartMessage && (
          <div className="cartMessage fixed left-0 right-0 flex align-middle justify-center top-50 z-10">
            <p className="bg-black text-white py-5 px-8 rounded-md ">
              {cartMessage}
            </p>
          </div>
        )}
        <div className="grid grid-cols-12 gap-4">
          <div className="col-span-6 gap-4">
            <img
              src={productDetails.image}
              alt={productDetails.title}
              style={{ height: "150px", objectFit: "contain", width: "100%" }}
            />
          </div>
          <div className="col-span-6 gap-4">
            <h2 className="font-bold text-black text-2xl mb-4">
              {productDetails.title}
            </h2>
            <p className="mb-3 flex align-center">
              <FaStar className="text-yellow-500 me-1.5" />
              {productDetails.rating.rate} - {productDetails.rating.count}{" "}
              ratings
            </p>
            <p className="text-black text-2xl mb-4">{productDetails.price}</p>
            <p>{productDetails.description}</p>
            <p className="my-4">
              <strong>Category: </strong>
              {productDetails.category}
            </p>

            <div className="flex align-middle my-5">
              <button
                onClick={() => updateQuantity(productDetails.id, quantity + 1)}
                disabled={!cartItem}
              >
                +
              </button>
              <span className="py-2 px-4">{quantity}</span>
              <button
                onClick={() => updateQuantity(productDetails.id, quantity - 1)}
                disabled={!cartItem}
              >
                -
              </button>
            </div>

            <button
              className="btn-primary bg-black"
              onClick={() => addToCart(productDetails)}
            >
              Add to Cart
            </button>
          </div>
        </div>
      </div>
    </>
  );
};
