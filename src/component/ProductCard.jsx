import React from "react";
import { Link } from "react-router-dom";
import { useCart } from "../context/cartContext";
import { CiShoppingCart } from "react-icons/ci";
import { IoEyeOutline } from "react-icons/io5";
import { CiHeart } from "react-icons/ci";
import { AiOutlineDelete } from "react-icons/ai";

export const ProductCard = ({
  product,
  onAddWishlist,
  onRemoveWishlist,
  wishlist = [],
}) => {
  const { addToCart, cartMessage } = useCart();

  const { id, title, price, image } = product;
  const iswishlist = wishlist.find((item) => item.id === product.id);
  return (
    <div className="bg-gray-100 rounded-2xl p-8 text-center productCard">
      {cartMessage && (
        <div className="cartMessage fixed left-0 right-0 flex align-middle justify-center top-50 z-10">
          <p className="bg-black text-white py-5 px-8 rounded-md ">
            {cartMessage}
          </p>
        </div>
      )}
      <img
        src={image}
        alt={title}
        style={{ height: "150px", objectFit: "contain", width: "100%" }}
      />
      <h4 className="my-4 text-md font-bold">{title.substring(0, 40)}...</h4>
      <p className="font-bold text-blue-500 my-3">${price}</p>
      <button className="m-2 btn-icon" onClick={() => addToCart(product)}>
        {" "}
        <CiShoppingCart />
      </button>
      <Link to={`/product/${id}`}>
        <button className="m-2 btn-icon">
          <IoEyeOutline />
        </button>
      </Link>
      {onAddWishlist && (
        <button className="m-2 btn-icon" onClick={() => onAddWishlist(product)}>
          <CiHeart className={iswishlist ? "text-red-600" : "text-black"} />
        </button>
      )}

      {onRemoveWishlist && (
        <button onClick={() => onRemoveWishlist(product.id)}>
          <AiOutlineDelete />
        </button>
      )}
    </div>
  );
};
