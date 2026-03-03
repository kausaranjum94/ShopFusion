import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useCart } from "../context/cartContext";
import { BsSearch } from "react-icons/bs";
import { useNavigate } from "react-router-dom";

export const NavBar = () => {
  const { cart } = useCart();

  const totalCount = cart.reduce((total, item) => total + item.quantity, 0);

  const [search, setSearch] = useState("");
  const navigate = useNavigate();

  const handleSearch = (e) => {
    e.preventDefault();
    console.log(search);
    navigate(`/search?q=${search}`);
  };

  return (
    <div className="navSearchWrap flex align-middle justify-end">
      <div className="navSearchWrap">
        <form onSubmit={handleSearch} className="w-sm flex align-middle me-3">
          <input
            type="text"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            placeholder="Search Products ..."
            className=" bg-neutral-secondary-medium border border-default-medium text-heading text-sm rounded-base focus:ring-brand focus:border-brand block w-full p-3 shadow-xs rounded-md"
            required
          />
          <button type="submit" className="ms-2 !bg-blue-500 !text-white">
            Search
          </button>
        </form>
      </div>
      <nav className="flex items-center">
        <Link
          to="/"
          className="text-xl font-bold mx-4 my-0 hover:underline text-black"
        >
          Home
        </Link>
        <Link
          to="/cart"
          className="text-xl font-bold mx-4 my-0 hover:underline text-black"
        >{`Cart(${totalCount})`}</Link>
        <Link
          to="/wishlist"
          className="text-xl font-bold mx-4  my-0 hover:underline text-black"
        >
          Wishlist
        </Link>
      </nav>
    </div>
  );
};
